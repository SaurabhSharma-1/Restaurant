import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Img_ID } from "../Constants";
import useRestfetch from "../utils/useRestfetch"

const RestaurantPage = () =>{

    const {resId} = useParams();
    
    // let temp = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.090699082120356&lng=73.01001868731078&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`

    // const [restLink, setRestLink] =useState(temp);
    // const [restData, setRestData] = useState([]);

    const restData = useRestfetch(resId);

    
    // useEffect(()=>{
    //     async function takeRes(){
    //         const data = await fetch(restLink)
    //         const json = await data.json();
    //         // setRestData(json.data.cards[3]); // will helpful in relevant
    //         setRestData(json.data.cards[2].card.card.info);
            
    //     }
    //     takeRes();    
    // },[])



    return (
        <>
        <div className='RestaurantPage'>
            <h1>{restData?.name}</h1>
            <img src={Img_ID+restData?.cloudinaryImageId} width="250px" height="200px"/>
            <h2>{restData?.cuisines}</h2>
            <h3>{restData?.costForTwoMessage}</h3>
            <h3>Ratings: {restData?.avgRating} stars</h3>
        </div>
        </>
    );
}

export default RestaurantPage;