import { FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS } from './actions'


const intitialState = {
    friends: [],
    isLoading: false,
    error: ""
}


export const reducer = (state = intitialState, action) => {
        switch (action.type) {
            case FETCH_FRIENDS_START:
                return {
                    ...state,
                    isLoading: true,
                        error: ''
                }
                default:
                    return state
        }
    }

