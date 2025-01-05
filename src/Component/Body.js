import { useEffect, useState, useContext } from "react";
// import restaurants from "../Constants";
import { Link } from "react-router-dom";
import Card from "./Card";
import { Shimmer } from "./shimmer";
import { filterData } from "../utils/helper";
import userContext from "../utils/userContext";

const Body = () =>{ 
    const [search,setSearch] = useState();
    const [restCopy,setRestCopy] = useState([]);
    const [filtered,setfiltered] = useState([]);
    const [test,setTest] = useState([]);

    const {user,setUser} = useContext(userContext);

    useEffect(()=>{
        call();
    },[]);

    async function call(){

        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.090699082120356&lng=73.01001868731078&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')


        const json = await data.json();
        setRestCopy(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfiltered(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setTest(json.data);
        // console.log(test);    

    }

    // console.log(user);

    if(restCopy?.length===undefined) return <h1>Loading</h1>

    return (restCopy.length===0) ? <Shimmer/>:
        <>
        <div className="">
        <div className=" my-4 p-2 ml-80 border-2 border-violet-100 w-1/2 rounded-md flex space-x-9 bg-white ">
            <input 
            type="text"
            className="border-none w-3/4 p-1 outline-none"
            placeholder=""
            value={search}
            onChange={(e)=>{
                setSearch(e.target.value);
            }}
            onKeyDown={(e) => {
                if (e.key === "Enter"){
                    const temp = filterData(search,restCopy)
                    setfiltered(temp);
                }
                    
                }}
            />
            <button className="ml-3 px-4 border-2 shadow-sm rounded-md border-violet-100 bg-gray-50 "  onClick={()=>{
                const temp = filterData(search,restCopy)
                    setfiltered(temp);
            }
            }>
                Search
            </button>
            {/* <input className="border-b-2 mx-2" value={user.name} onChange={(e)=>{
                setUser({
                    name:e.target.value,
                    email: "helpme@gmail.com",
                });
            }}/> */}
        </div>
        {/* <h1 className=" bg-red-400 text-xl mx-20 flex justify-center items-center">Hi! I have Lot to work on It. But still you can check little Features</h1> */}
        <div className='flex flex-wrap items-center justify-center'>
        {
            (filtered.length===0)?<h1>No Such Restaurant Found!</h1>: filtered.map(Rest=>{
            return( <Link to = {"restaurant/"+Rest.info.id} key={Rest.info.id}>
                <Card {...Rest.info} />           
                </Link>)
            })
        }
        </div>
        </div>
        
        
        </>   
        
}

export default Body;