import { useSelector } from "react-redux";

const Cart=()=>{
    const cartItems=useSelector(store=store.cart.item);    
    return(
        <div>
            <h1></h1>
            <h1 className="text-xl m-5">Hi! Right now I'm Working on Cart Functionality!
            You Can Check Latest version of this
            project on my <a className="Text-xl text-blue-600" href="https://github.com/SaurabhSharma-1">Github</a> 
            <br/>May be by this time I've Completed it.
            </h1>
        </div>
    )
}

export default Cart;