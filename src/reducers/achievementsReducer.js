const achievementsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ACHIEVEMENTS_FETCH_SUCCESS':
            return Object.assign({}, state, {
                achievements: action.achievements
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
        default:
            return state; 
    }
}

export default achievementsReducer;
