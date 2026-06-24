import { useState,useEffect } from "react";
import { fetchNotifications } from "../api/notifications";

export function useNotifications(type,page){
const [notifications,setNotifications]=useState([]);
const [totalPages,setTotalPages]=useState(0);
const [loading,setLoading]=useState(true);
const [error,setError]=useState(null);

useEffect(()=>{
const load=async()=>{
try{
setLoading(true);
const data=await fetchNotifications({type,page,limit:5});
setNotifications(data.notifications);
setTotalPages(data.totalPages);
setError(null);
}
catch{
setError("Failed to load notifications");
}
finally{
setLoading(false);
}
};

load();
},[type,page]);

return{
notifications,
totalPages,
loading,
error
};
}