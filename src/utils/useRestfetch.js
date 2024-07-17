import { useState,useEffect } from "react";

const useRestfetch = (resId) =>{

    let temp = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.090699082120356&lng=73.01001868731078&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`

    const [restLink, setRestLink] = useState(temp);
    const [restaurant,setRestaurant] = useState(null);

    useEffect(()=>{
        takeRes();    
    },[])

    async function takeRes(){
        const data = await fetch(restLink)
        const json = await data.json();
        console.log("useEffect");
        // setRestData(json.data.cards[3]); // will helpful in relevant
        setRestaurant(json.data.cards[2].card.card.info);
        
    }

    // console.log(restaurant);

    return restaurant;
}

export default useRestfetch;