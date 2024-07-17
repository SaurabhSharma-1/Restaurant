import { Img_ID } from "../Constants";
import { useContext } from "react";
import userContext from "../utils/userContext";


const Card = ({name,cuisines,avgRating,cloudinaryImageId}) =>{

    const {user} = useContext(userContext);


    return(
        <div className='w-60 m-5 h-96 overflow-clip hover:scale-105 transition duration-300 ease-in-out border-gray-300 shadow-md rounded-xl bg-white'>
            {/* {console.log(props)} */}
            <img className="h-60 w-60 rounded-xl border-2" src={Img_ID+cloudinaryImageId}/>
            <h4 className="font-Bold text-l mx-3 my-2 ">{name}</h4>
            <h5 className="mx-3 my-1">{cuisines}</h5>
            <h6 className="mx-3 font-bold">{avgRating} 🖤</h6>
        </div>
    );
};

export default Card;

