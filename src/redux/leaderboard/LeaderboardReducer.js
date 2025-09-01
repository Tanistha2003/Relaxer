import actionTypes from "./LeaderboardActionTypes";

const initialState = {
    ranks: [],
};

const LeaderboardReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LEADERBOARD:
            let sortedRanks =  action.payload.sort(function(a,b) {
                                    return (b.badgecount) - (a.badgecount);
                                }); //sort as per no. of badges (more badges, better index)
            return {
                ...state,
                ranks: sortedRanks 
            };

        default:
            return state;
    }
}

export default LeaderboardReducer;