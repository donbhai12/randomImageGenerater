"use client"
import React, { useState } from "react";

import axios from "axios";
import './globals.css'
 const fun  = () =>{
  const[Images, setImages] =useState([])
  const getImages = async ()=>{
   try {
    const responce = await axios.get("https://picsum.photos/v2/list");
    const data = responce.data;
    setImages(data)
    console.log(Images)
   } catch (error) {
    console.error("Error hai dosto")
   }
  }
   return( 
        <div>
         <button onClick={getImages} className="p-5 bg-green-600 text-white">
         Get Images
         </button>
         <div className="p-10 bg-red-300">
                  {Images.map((img,i)=>{
                   return <img key={i}src={img.download_url} 
                   width={300}
                   height={300}
                   className="m-10 rounded inline-block"
                   />
                  })}
         </div>
        </div>
   )
 }
 export default fun;