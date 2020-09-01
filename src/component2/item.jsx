import React, { useState, useEffect } from 'react';

function Item({match}){

    useEffect(()=>{
        let unmounted=false;
            
        const fetchData=async()=>{
            const data=await fetch("https://fortnite-api.theapinetwork.com/store/get");
            const items=await data.json();
            const myItem=items.data.filter(w=>{return w.itemId===match.params.id});
            if(!unmounted)
            { 
                setWeapons(items.data);
                setItem(myItem[0]);
            }
        }

        fetchData();

        return ()=>{
            unmounted=true;
        }
    },[match.params.id]
    );

    const [weapons,setWeapons]=useState([]);

    const [item,setItem]=useState(null);


    
    
    console.log("myitem",item);
    return(
        <div className="item p-5" >
            <h1>{item===null?"":item.item.name}</h1>
            <img src={item===null?"null":item.item.images.icon} alt=""/>
        </div>
    );

}
 
export default Item;