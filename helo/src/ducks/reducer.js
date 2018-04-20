const initialState = {
    username: '',
    id: 0,
    profilePic: ''
}

const AUTH_UPDATE_REDUX = 'AUTH_UPDATE_REDUX';

export function authUpdateRedux(id, username, profilePic){
    return {
        type: AUTH_UPDATE_REDUX,
        payload: {
            id: id,
            username: username,
            profilePic: profilePic
        }
    }
}


export default function reducer(state = initialState, action){
    switch (action.type){
        case AUTH_UPDATE_REDUX:
        return Object.assign({}, state, {username: action.payload.username, id: action.payload.id, profilePic: action.payload.profilePic})

        default:
        return state
    }
}