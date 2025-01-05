import { Img_ID } from "../Constants";
import { useContext, useEffect, useState } from "react";
import userContext from "../utils/userContext";


const Card = ({description,defaultPrice,finalPrice,price,imageId}) =>{

    const {user} = useContext(userContext);
    const [rate, setRate] =useState();
    const arr = [".","|","(","!"]
    const [desc, setDesc] = useState(description.slice(0,125));

    useEffect(()=>{
        if (defaultPrice) {
            setRate(defaultPrice);
        } else if (finalPrice) {
            setRate(finalPrice);
        } 
        else if (price) {
            setRate(price);
        }else {
            setRate(0);
        }
    },[]);
    

    return(
        <div className="">
            <div className="w-full p-1 m-5 h-56 overflow-clip border border-gray-300 shadow-md rounded-xl bg-white">
            <div className='flex justify-center items-center p-2 mb-5'>
            <h1 className="font-semibold mr-1">{desc}</h1>
            <img className="h-24 w-24 rounded-xl border-2" src={Img_ID+imageId}/>
            <h5 className="mx-3 my-1">₹{rate/100}</h5>
            </div>
            <div className="flex justify-center">
                <button className="font-bold shadow-lg border border-gray-400 p-1 px-2 m-2 rounded-md text-green-400">Add</button>
                <button className="font-bold border shadow-lg border-gray-400 font p-1 m-2 rounded-md text-red-300">Remove</button>
            </div>
            </div>
            
            
        </div>
        
    );
};

export default Card;

