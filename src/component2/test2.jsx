import React, {  useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function Test2(){
    const [weapons,setWeapons]=useState([]);
    const fetchdata = async () => {
        const data=await fetch("https://fortnite-api.theapinetwork.com/store/get");
        const items=await data.json();
        setWeapons(items.data);

    }
    
    useEffect(()=>{
        fetchdata();
    },[]);
    
    return (
        weapons.map(weapon=><div key={weapon.itemId}  className="text-center p-2 "><a href={`/second/${weapon.itemId}`} >  {weapon.item.name} </a></div>).slice(0,5)
    );
}
 
export default Test2;