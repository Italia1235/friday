const initState = {
    _id:"",
    email:"",
    name:"",
    avatar: ""
}

export type UserProfileType ={
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод
    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;
    error?: string;
}

export const profileReducer = (state = initState, action: ActionType): InitStateTypeProfile => {
       switch (action.type){
        case 'login/GET-USER-INFO':
                       return{...state, email:action.email,name:action.name}
        default:
            return state;
    }
}

type ActionType = ReturnType<typeof getUserInfoAC>

export const getUserInfoAC = (id:string,email:string,name:string) =>
    ({type: 'login/GET-USER-INFO', email,name}  as const)


export type InitStateTypeProfile = typeof initState;