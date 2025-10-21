const initialState = {
    users:[],
    profile:{},
    isLoggedIn:false,
    error:"",
}

export const authReducer = (state = initialState,action)=>{
    const payload=action.payload;
     switch (action.type) {
        case "signup":{
            // const user =state.users.find((user)=> user.email === payload.email);
            // if(user){
            //     return alert("email already existed");
            // }
            return {...state, users:[...state.users,payload]};
        }
        default:{
            return state
        }
     }
}