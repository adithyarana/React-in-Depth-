import { useEffect, useState } from "react"

const useOnlineStatus = () => {

    const [online , setonline]= useState(true);

   useEffect(()=>{
    window.addEventListener("offline",()=>{
        setonline(false);
    })

    window.addEventListener("online",()=>{
        setonline(true);
    })
   },[]);

    return online;
    
}

export default useOnlineStatus