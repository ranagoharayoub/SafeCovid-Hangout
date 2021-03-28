export const initialState = {
    token: null,
    id: null,
    name: null,
    username: null,
    email: null,
    password: null,
    rank: null,

}

export const User_Rank = 'User_Rank'
export const User_Token = 'User_Token'
export const User_Id = 'User_Id'
export const Log_Out = 'Log_Out'


export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case User_Rank:
        return { rank: payload }
    case User_Token:
        return { token: payload }
    case User_Id:
        return { id: payload }
    case Log_Out:
        return { token: null }

    default:
        return state
    }
}

