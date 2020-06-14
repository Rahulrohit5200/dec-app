import {firebase,GoogleAuthProvider} from "../firebase/firebase";


export const  startLogin=()=>{
    return (dispatch)=>{//return fn
        return firebase.auth().signInWithPopup(GoogleAuthProvider)//to chain further promises
    }    
}

export const startLogout=()=>{
    return (dispatch)=>{
        return firebase.auth().signOut()
    }
}

export const Login=(uid)=>{
    return{
        type:"LOGIN",
         uid: uid
    }
}

export const Logout=()=>{
    return{
        type:"LOGOUT"
    }
}
