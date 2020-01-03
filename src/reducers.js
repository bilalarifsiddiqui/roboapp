import { CHANGE_SEARCH_FIELD } from './constants'



const initailState = {
    searchField : ''
}

export const SearchRobots = (state = initailState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD: 
        return Object.assign({}, state, {searchField: action.payload});
     default:
     return state   
    }
}

