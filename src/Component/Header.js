import { useState } from "react";
import {Link} from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
    <a href='/'>
        <img className="w-24 rounded-md" alt='Error' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoASjUKK3bvJEWxAeJyyMmiT3H_RayofccPg&usqp=CAU'></img>
    </a>
    
);

const Header = () => {

    const [isLogged,setIsLogged] = useState(true);

    const isOnline = useOnline();

    const change = () => {
        setIsLogged(!isLogged);
    }

    return (
    <div className='flex justify-between rounded-md bg-violet-600 font-semibold'>
        <Title/>
        <ul className="flex items-center text-white text-xl mr-8">
            <div className="flex">
            <Link to="/"><li className="headerText m-2" >Home</li></Link>
            <Link to="/About"><li className="headerText m-2">About</li></Link>
            {/* <Link to="/Contact"><li className="headerText m-2">Contact</li></Link> */}
            <Link to="/Instamart"><li className="headerText m-2">Career</li></Link>
            <Link to="/Cart"><li className="headerText m-2">Cart</li></Link>
            
            </div>
            {/* <div><span>Conneted</span>{isOnline?"✔":"❌"}</div> */}
            
            {/* <div className="logButton">
                {
                    isLogged?(<button className="m-2" onClick={()=>change()}>LogIn</button>):
                    (<button className="m-2" onClick={()=>change()} >LogOut</button>)
                }
            </div> */}
        </ul>
    </div>
    );
};

export default Header;