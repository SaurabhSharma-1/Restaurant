import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Img_ID } from "../Constants";
import useRestfetch from "../utils/useRestfetch"
import useMenu from "../utils/useMenu";
import Card from "./Card";
import Card1 from "./Card1"
import Menu from "./Menu"

const RestaurantPage = () =>{

    const {resId} = useParams();
    
    // let temp = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.090699082120356&lng=73.01001868731078&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`

    // const [restLink, setRestLink] =useState(temp);
    // const [restData, setRestData] = useState([]);

    const restData = useRestfetch(resId);
    const menuData = useMenu(resId);
    console.log(menuData);
    
    // useEffect(()=>{
    //     async function takeRes(){
    //         const data = await fetch(restLink)
    //         const json = await data.json();
    //         // setRestData(json.data.cards[3]); // will helpful in relevant
            // setRestData(json.data.cards[2].card.card.info);
            
    //     }
    //     takeRes();    
    // },[])


    return (
        <>
        <div className="flex">
            <div className="w-1/4 p-5 m-5 h-72 overflow-clip border border-gray-300 shadow-md rounded-s bg-purple-100 flex flex-col justify-center items-center">
                <h1 className="font-bold mb-3">{restData?.name}</h1>
        <div className='mb-5 h-56 bg-purple-100'>
            <img className="h-56 w-30 border-2 shadow-xl rounded-md" src={Img_ID+restData?.cloudinaryImageId} width="250px" height="250px"/>
        </div>
            </div>
        
        <div className=" w-1/3">
            {
                menuData?.map((temp)=>{
                    return(
                        <Card1 {...temp.card.info} key={temp.card.info.id}/>
                    )
                })
            }
                {/* menuData.map(Rest=>{
                    return( 
                        <Card {...Rest.info} /> )      
                    } */}
        </div>
        </div>
        
        </>
    );
}

export default RestaurantPage;