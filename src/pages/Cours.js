import { useParams } from "react-router-dom"
import {ph} from "./data/Pharmacy"
import { useState } from "react"
export default function Cours(){
    const {cod} =useParams()
    const [allcod,setallcod]=useState(ph)

    
    return(<>
   {
        allcod.map((e)=>{
        if (e.cod == cod) {
         return(<>
         <h1>{e.cod}</h1>
         <h1>{e.Title}</h1>
         </>)   
        }
    })
   } 
   
    </>)
}