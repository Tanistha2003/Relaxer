const user=require('../models/userModel')
const badge=require('../models/badgeModel')
const activity=require('../models/activityModel')
const moment=require('moment')
const cron= require('node-cron')
const jwt=require('jsonwebtoken')

class controllerDemo{

    static async scheduler(){
        try{
        cron.schedule('0 0 * * *',async() => {
            
            let d=new Date();
            let day=d.getDay();

            const users=await user.find();

            let week={
                0: 'Sunday',
                1: 'Monday',
                2: 'Tuesday',      
                3: 'Wednesday',
                4: 'Thursday',
                5: 'Friday',
                6: 'Saturday'
            };

            if(users){

                const currDate=moment().format('YYYY-MM-DD');
                const currentDate=new Date(currDate);

                for(let i=0;i<users.length;i++){

                    const userEmail=users[i].email;

                    const addActivity=new activity();
                    addActivity.email=userEmail;

                    addActivity.date=currentDate;
                    addActivity.day=week[day];
                    addActivity.activity={
                        date: moment(),
                        water: 0,
                        exercise: 0,
                        meditation: 0,
                        mood: 2
                    };

                    await addActivity.save();

                }
            }
        })
        }
        catch(err){
            console.log(err);
        }
    }

    async save(req){
        try{
            
            if(req.body.email){
                const findUser=await user.findOne({email:req.body.email});

                let obj={
                    0:'Sunday',
                    1:'Monday',
                    2:'Tuesday',   
                    3:'Wednesday',
                    4:'Thursday',
                    5:'Friday',
                    6:'Saturday'
                }

                let d=new Date();
                const day=d.getDay();

                if(findUser){
                    const token=jwt.sign({uid:findUser._id},"jwtkey");
                    return{
                        status:200,
                        data: findUser,
                        token: token,
                        message: "User already exists",
                    }

                }
                else {

                    const newUser=new user();
                    newUser.email=req.body.email;
                    newUser.name=req.body.name;
                    newUser.picture=req.body.picture;
                    const info=await newUser.save();
                    
                    const token=jwt.sign({uid:info._id},"jwtkey");

                    const addActivity=new activity();
                    addActivity.email=info.email;
                    addActivity.date=moment();
                    addActivity.day=obj[day];
                    addActivity.activity={
                        date:moment(),
                        water:0,
                        exercise:0,
                        meditation:0,
                        mood:2
                    };

                    await addActivity.save();
                    
                    return{
                        status:201,
                        data:info,
                        token:token,
                        message:"User created successfully"
                    }
                }
            }

        }catch(err){
            return{
                status:500,
                message: "Internal Server Error",
            }
        }
    }

    async weekly(req){

        try{
            const findUser=await user.findOne({_id:req.userid});

            if(!findUser){
                return{
                    status:404,
                    message: "User not found"
                }
            }
            else{
                let email=findUser.email;

                const start=moment().startOf('isoweek');
                const end=moment().endOf('isoweek');

                const activities=await activity.find({
                    email:email,
                    date:{
                        $gte:start.toDate(),
                        $lte:end.toDate()
                    }
                })


                return {
                    status:200,
                    data: activities
                }

            }
        }
        catch(err){
            return{
                status:400,
                message:err.message
            }
        }
    }

    async monthly(req){
        try{

            const findUser=await user.findOne({_id:req.userid});

            if(findUser){
                let email=findUser.email;

                const start=moment().startOf('month');
                const end=moment().endOf('month');

                const activities=await activity.find({
                    email:email,
                    date:{
                        $gte:start.toDate(),
                        $lte:end.toDate()
                    }
                });

                return{
                    status:200,
                    data: activities
                }
            }
            else{
                return{
                    status:404,
                    message: "User not found"
                }
            }
        }catch(err){
            return{
                status:500,
                message:err.message
            }
        }
    }

    async badges(req){
        try{
            const findUser=await user.findOne({_id:req.userid});

            if(findUser){

                const start=moment().startOf('month');
                const end=moment().endOf('month');

                const activityUser=await activity.find({
                    email:findUser.email,
                    date:{
                        $gte:start.toDate(),
                        $lte:end.toDate()
                    }
                });

                let watercount=0,exercisecount=0,moodcount=0,meditationcount=0;

                for(let i=0;i<activityUser.length;i++){
                    watercount += activityUser[i].activity.water || 0;
                    exercisecount += activityUser[i].activity.exercise || 0;
                    meditationcount += activityUser[i].activity.meditation || 0;
                    if(activityUser[i].activity.mood==3){
                        moodcount += 1;
                    }
                }

                //check if existing badges for the user
                const monthStr=moment().format('MMMM');
                const existingBadge=await badge.findOne({email:findUser.email,month:monthStr});

                // thresholds and query param names follow the second file's logic:
                // req.query.stepsCount, req.query.caloriesBurned, req.query.heartPoints
                if(existingBadge){
                    if(watercount>=240) 
                        await badge.updateOne({email:findUser.email,month:monthStr},{$set:{waterBadge:true}});
                    if(exercisecount>=108000) 
                        await badge.updateOne({email:findUser.email,month:monthStr},{$set:{exerciseBadge:true}});
                    if(meditationcount>=27000)
                        await badge.updateOne({email:findUser.email,month:monthStr},{$set:{meditationBadge:true}});
                    if(moodcount>=15)
                        await badge.updateOne({email:findUser.email,month:monthStr},{$set:{moodBadge:true}});
                    if(req.query.stepsCount>=150000)
                        await badge.updateOne({email:findUser.email,month:monthStr},{$set:{stepsBadge:true}});
                    if(req.query.caloriesBurned>=60000)
                        await badge.updateOne({email:findUser.email,month:monthStr},{$set:{caloriesBadge:true}});    
                    if(req.query.heartPoints>=450)
                        await badge.updateOne({email:findUser.email,month:monthStr},{$set:{heartBadge:true}});
                    

                    const allBadges=await badge.find({email:findUser.email,month:monthStr});
                    return{
                        status:200,
                        data: allBadges
                    }
                }
                else{
                    const addBadge=new badge();
                    addBadge.email=findUser.email;
                    addBadge.month=monthStr;

                    if(watercount>=240) addBadge.waterBadge=true;
                    if(exercisecount>=108000) addBadge.exerciseBadge=true;   
                    if(meditationcount>=27000) addBadge.meditationBadge=true;
                    if(moodcount>=15) addBadge.moodBadge=true;
                    if(req.query.stepsCount>=150000) addBadge.stepsBadge=true;
                    if(req.query.caloriesBurned>=60000) addBadge.caloriesBadge=true;
                    if(req.query.heartPoints>=450) addBadge.heartBadge=true;

                    await addBadge.save();

                    const allBadges=await badge.find({email:findUser.email,month:monthStr});
                    return{
                        status:200,
                        data: allBadges
                    }
                }

            }
            else{
                return{
                    status:404,
                    message: "User not found"
                }
            }
        }catch(err){
            return{
                status:500,
                message: err.message
            }
        }
    }

    async leaderboard(req){
        try{

           const curr=moment().format('MMMM');
           const badgesList=await badge.find({month:curr});

            let all=[];
            for(let i=0;i<badgesList.length;i++)
            {
                let count=0;
                let obj={};

                if(badgesList[i].waterBadge==true) count++;
                if(badgesList[i].exerciseBadge==true) count++;
                if(badgesList[i].meditationBadge==true) count++;
                if(badgesList[i].stepsBadge==true) count++;
                if(badgesList[i].caloriesBadge==true) count++;
                if(badgesList[i].heartBadge==true) count++;
                if(badgesList[i].moodBadge==true) count++;

                const findUser=await user.findOne({email:badgesList[i].email});

                obj={
                    name: findUser ? findUser.name : null,
                    email:badgesList[i].email,
                    badgeCount:count
                };

                all.push(obj);
            }

            return{
                status:200,
                data:all
            }

        } catch(err){
            return{
                status:500,
                message: err.message
            }
        }
    }

    async addWater(req){
        try{
            const findUser=await user.findOne({_id:req.userid});

           if(!findUser) throw new Error('User not found');

           const currDate=moment().format('YYYY-MM-DD');
           const date=new Date(currDate);

           const currActivity=await activity.findOne({email:findUser.email,date:{
            $gte:date
           }});

           if(!currActivity) throw new Error('Activity not found for today');

           let final=(currActivity.activity.water||0)+ (req.body.water||0);

           // preserve other activity fields
           const newActivityObj={
               water: final,
               exercise: currActivity.activity.exercise||0,
               meditation: currActivity.activity.meditation||0,
               mood: currActivity.activity.mood||2
           };

           await activity.updateOne({email:findUser.email,date:{
            $gte:date
           }},{activity:newActivityObj});

           const newActivity=await activity.findOne({email:findUser.email,date:{
            $gte:date
           }});

           return{
            status:200,
            data:newActivity
           }

        }catch(err){
            return{
                status:400,
                message:err.message || 'User not found'
            }
        }
    }

    async addExercise(req){
        try{
            const findUser=await user.findOne({_id:req.userid});

           if(!findUser) throw new Error('User not found');

           const currDate=moment().format('YYYY-MM-DD');
           const date=new Date(currDate);

           const currActivity=await activity.findOne({email:findUser.email,date:{
            $gte:date
           }});

           if(!currActivity) throw new Error('Activity not found for today');

           let final=(currActivity.activity.exercise||0)+ (req.body.exercise||0);

           const newActivityObj={
               water: currActivity.activity.water||0,
               exercise: final,
               meditation: currActivity.activity.meditation||0,
               mood: currActivity.activity.mood||2
           };

           await activity.updateOne({email:findUser.email,date:{
            $gte:date
           }},{activity:newActivityObj});

           const newActivity=await activity.findOne({email:findUser.email,date:{
            $gte:date
           }});

           return{
            status:200,
            data:newActivity
           }

        }catch(err){
            return{
                status:400,
                message:err.message || 'User not found'
            }
        }
    }

    async addMeditation(req){
        try{
            const findUser=await user.findOne({_id:req.userid});

           if(!findUser) throw new Error('User not found');

           const currDate=moment().format('YYYY-MM-DD');
           const date=new Date(currDate);

           const currActivity=await activity.findOne({email:findUser.email,date:{
            $gte:date
           }});

           if(!currActivity) throw new Error('Activity not found for today');

           let final=(currActivity.activity.meditation||0)+ (req.body.meditation||0);

           const newActivityObj={
               water: currActivity.activity.water||0,
               exercise: currActivity.activity.exercise||0,
               meditation: final,
               mood: currActivity.activity.mood||2
           };

           await activity.updateOne({email:findUser.email,date:{
            $gte:date
           }},{activity:newActivityObj});

           const newActivity=await activity.findOne({email:findUser.email,date:{
            $gte:date
           }});

           return{
            status:200,
            data:newActivity
           }

        }catch(err){
            return{
                status:400,
                message:err.message || 'User not found'
            }
        }
    }

    async addMood(req){
        try{
            const findUser=await user.findOne({_id:req.userid});

           if(!findUser) throw new Error('User not found');

           const currDate=moment().format('YYYY-MM-DD');
           const date=new Date(currDate);

           const currActivity=await activity.findOne({email:findUser.email,date:{
            $gte:date
           }});

           if(!currActivity) throw new Error('Activity not found for today');

           // second file treats mood updates as replacing/setting mood (and casts to number)
           let final=(req.body.mood!==undefined) ? +req.body.mood : currActivity.activity.mood || 2;

           const newActivityObj={
               water: currActivity.activity.water||0,
               exercise: currActivity.activity.exercise||0,
               meditation: currActivity.activity.meditation||0,
               mood: final
           };

           await activity.updateOne({email:findUser.email,date:{
            $gte:date
           }},{activity:newActivityObj});

           const newActivity=await activity.findOne({email:findUser.email,date:{
            $gte:date
           }});

           return{
            status:200,
            data:newActivity
           }

        }catch(err){
            return{
                status:400,
                message:err.message || 'User not found'
            }
        }
    }

    async editInfo(req){
        try{
            
            await user.updateOne({_id:req.userid},{
                waterGoal:req.body.waterGoal,
                meditationGoal:req.body.meditationGoal,
                exerciseGoal:req.body.exerciseGoal,
            });


            const newUser=await user.findOne({_id:req.userid});
            return{
                status:200,
                data:newUser
            }

        }catch(err){
            return{
                status:400,
                message:err.message || 'User not found'
            }
        }
    }

    async getinfo(req){
        try{
            const findUser=await user.findOne({_id:req.userid});

            if(findUser){
                return{
                    status:200,
                    data:findUser
                }
            } else {
                return {
                    status:400,
                    message:'User not found'
                }
            }
            
        }catch(err){
            return {
                status:400,
                message:err.message || 'User not found'
            }
        }
    }
}

controllerDemo.scheduler() //call scheduler function to start the cron job

module.exports = new controllerDemo()
