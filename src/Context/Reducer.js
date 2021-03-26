export const initialState = {
    name: null,
    username: null,
    email: null,
    password: null,
    rank: null,

}

export const User_Rank = 'User_Rank'


export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case User_Rank:
        return { rank: payload }

    default:
        return state
    }
}

