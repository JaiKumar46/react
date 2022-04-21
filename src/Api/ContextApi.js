import React,{useState,createContext} from "react";
 let AuthContext=createContext();
let AuthProvider=({children})=>{
    let [state]=useState([
        {
            username:"veer",sal:20000,company:"Qspider"
        },{
            username:"Shiva",sal:20000,company:"Jspider"
        },{
            username:"Zhang Zha Fan",sal:5000000,company:"Google"
        }

    ])
    return <AuthContext.provider value={state}>{children}</AuthContext.provider>
}
export default AuthProvider