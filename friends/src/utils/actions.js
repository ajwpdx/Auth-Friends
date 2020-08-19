import { axiosWithAuth } from '../utils/axioswithAuth'

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START'
export const FETCH_FRIENDS_SUCCESS ='FETCH_FRIENDS_SUCCESS'
export const ADD_FRIEND = 'ADD_FRIEND'

export const fetchFriends = () => dispatch => {
    dispatch({type:FETCH_FRIENDS_START})

    axiosWithAuth()
    .get("/api/friends")
    .then((res) => {
      console.log(res)
      dispatch({type:FETCH_FRIENDS_SUCCESS, payload: res.data})
    })
    .catch((err) => console.log(err));
};




export const addFriend = (input) => dispatch => {
    console.log('addFriend invoked >', input)
    axiosWithAuth()
    .post("/api/friends")
    .then(res => {
        console.log(res)
        dispatch({type: ADD_FRIEND, payload: input})
    })
    .catch((err) => console.log(err));
}