import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';  // Sad Icon
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';  // Neutral Icon
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';  // Happy Icon

import { questionsList } from '../../Constants';
import { addMood } from '../../../redux/questionnaire/QuestionnaireActions';
import '../../../styles/pages/Questionnaire.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Questionnaire() {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(true);
  const [questions, setQuestions] = React.useState([]);
  const [answer, setAnswer] = React.useState([]);

  const navigate = useNavigate();

  const handleOkayClick = () => {
    const sum = answer.reduce((acc, val) => acc + val, 0);
    const moodScore = sum / answer.length;
    const currentMood = moodScore <= 1 ? 'sad' : moodScore <= 2 ? 'neutral' : 'happy';

    console.log("Current Mood: ", currentMood);
    
    // Dispatch the current mood to the Redux store
    dispatch(addMood(currentMood));
   
    setOpen(false);
    navigate("/pages/relaxing-activities");
  };

  useEffect(() => {
    setQuestions(questionsList); // set full question list
  }, []);

  const handleRadioCheck = (e, index) => {
    const updated=[...answer];
    updated[index] = Number(e.target.value);
    setAnswer(updated);
  } //stores answer to the questions

  const submitEnable = () => {
  return answer.length === questions.length && answer.every(val => val != null);
  }; //submits only if all questions are answered


  return (
    <Dialog 
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        className="dialog"
    >
        <DialogTitle>{"Help us know your mood better"}</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">

            {/* Mood Icons */}

            <Box className="moodIcons">
              <SentimentVeryDissatisfiedIcon className='sad' />
              <SentimentNeutralIcon className='neutral' />
              <SentimentSatisfiedAltIcon className='happy' />
            </Box>

            <div>
              {questions.map((obj, index) => {

                return (
                  <div key={`${obj.id}`}>
                    <div style={{fontFamily:'cursive',color:'rgb(167, 4, 167)'}} id={`${obj.id}`}>{obj.question}</div>
                    <RadioGroup
                      row
                      aria-labelledby={`${obj.id}`}
                      name={`${obj.id}`}
                      onChange={(e) => handleRadioCheck(e, index)}
                    >
                      <FormControlLabel style={{marginRight:'30px'}} value={1} control={<Radio />} label={obj.opt1} />
                      <FormControlLabel style={{marginRight:'30px'}} value={2} control={<Radio />} label={obj.opt2} />
                      <FormControlLabel style={{marginRight:'30px'}} value={3} control={<Radio />} label={obj.opt3} />
                    </RadioGroup>
                  </div>
                );

              })}
            </div>            
          </DialogContentText>
        </DialogContent>

        {submitEnable() &&
          <div className="modalInfo" style={{ fontFamily:"cursive", color: "#000" }}>
            Thanks for answering, Enjoy the break with some relaxing activities.
          </div>
        }

        <DialogActions>
          <Button variant="contained" onClick={handleOkayClick} disabled={!submitEnable()}>Okay</Button>
        </DialogActions>
    </Dialog>
  );
}
