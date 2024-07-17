import { useContext } from "react";
import userContext from "../utils/userContext";
import { Link } from "react-router-dom";

export const Footer = () =>{

    const {user} = useContext(userContext);

    return(
    <>
    <div className="flex bg-violet-600 text-yellow-50 mt-16 h-60">
            <div>
                <div className="text-xl font-semibold ">About</div>
                <div className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing<br/> sed do eiusmod tempor incididunt ut labore et<br/> magna aliqua. Ut enim ad minim veniam, quis nostrud<br/>
                exercitation ullamco laboris nisi ut aliquip ex ea<br/> eiusmod tempor incididunt hiuioy
                Duis aute irure .
                </div>
            </div>
            <div className="col ml-20">
                <div className="text-xl font-semibold ">Contact</div>
                <div className="c-item">
                    <div className="text">
                    Corporate Avenue, Andheri Ghatkopar Link Road,<br/> Mumbai, Maharashtra-400093, India
                    </div>
                </div>
                <div className="c-item">
                
                    <div className="text">Phone: 9999999991</div>
                </div>
                <div className="c-item">
                    
                    <div className="text">Email: Suggestion@gmail.com </div>
                </div>
            </div>
            {/* <div className="col">
                <div className="flex flex-col text-xl font-semibold">Categories</div>
                <span className="text">Headphone </span>
                <span className="text">Smart Watches </span>
                <span className="text">Bluetooth Speaker </span>
                <span className="text">Wireless Earbuds </span>
                <span className="text">Home Theatre </span>
                <span className="text">Projector </span>
            </div> */}
            <div className="flex flex-col ml-20">
                <div className="title text-xl font-semibold">Explore</div>
                <Link to="/"><span className="text">Home </span></Link>
                <Link to="/About"><span className="text">About </span></Link>
                <Link to="/About"><span className="text">Privacy Policy </span></Link>
                <Link to="/About"><span className="text">Return</span></Link>
                <Link to="/About"><span className="text">Terms & Condition </span></Link>
                <Link to="/About"><span className="text">Contact Us </span></Link>
            </div> 
        </div>
        <div className="flex flex-col justify-center items-center">
                <div className="text">
                Restaurant Depot @ 2024 Created By Saurabh. Beta Single Page Application.
                </div>
                <div className=" bg-red-400 text-xl mx-20 flex justify-center items-center">
                You Have To Add Cors Extension If API Not Fetched
                </div>
        </div>
    </>
    )     
}