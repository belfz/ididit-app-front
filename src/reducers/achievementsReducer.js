const achievementsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ACHIEVEMENTS_FETCH_SUCCESS':
            return Object.assign({}, state, {
                achievements: action.achievements
            });
        case 'SINGLE_ACHIEVEMENT_FETCH_SUCCESS':
            return Object.assign({}, state, {
                singleAchievement: action.singleAchievement
            });
        case 'ACHIEVEMENTS_FILTER_SHOW_DONE':
            return Object.assign({}, state, {
                done: true
            });
        case 'ACHIEVEMENTS_FILTER_SHOW_UNDONE':
            return Object.assign({}, state, {
                done: false
            });
        case 'ACHIEVEMENTS_FILTER_SHOW_ALL':
            return Object.assign({}, state, {
                done: undefined
            });
        case 'ACHIEVEMENT_UPDATED':
            return Object.assign({}, state, {achievements: state.achievements.map(achievement => {
                if (achievement._id === action.achievement._id) {
                    return Object.assign(achievement, action.achievement);
                }
                return achievement;
            })});
        case 'ACHIEVEMENT_CREATED':
            return Object.assign({}, state, {
                achievements: state.achievements.slice().push(action.achievement)
            });
        case 'LOGOUT':
            return {}; //remove the achievements from memory on logout                          
        default:
            return state; 
    }
}

export default achievementsReducer;
