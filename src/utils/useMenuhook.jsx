import { useState , useEffect } from "react"
import MenuApi from "./constant";

// this is the custom hook

const useMenuhook = (resId) => {
     
    const[resInfo , setResInfo]= useState(null);

    const fetchdata = async()=>{

        const data = await fetch(MenuApi + resId);
        const json = await data.json();
        setResInfo(json?.data);
    }

    useEffect(()=>{
        fetchdata();
    },[])

    return resInfo;

}

export default useMenuhook