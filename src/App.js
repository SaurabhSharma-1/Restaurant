import React, {lazy, useState} from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Component/Header';
import About from './Component/About';
import Error from './Component/Error';
import Cart from './Component/Cart';
import ProfileClass from './Component/ProfileClass'
import { Footer } from './Component/Footer';
import Body from './Component/Body';
import Contact from './Component/Contact';
import Instamart from './Component/Instamart';
import RestaurantPage from './Component/RestaurantPage';
import userContext from './utils/userContext';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

// const Instamart = lazy(()=> import('./Component/Instamart'))

const Applayout = () =>{

    const [user,setUser] = useState({
        name:"Saurabh Sharma",
        email: "helpme@gmail.com"
    })

    return (
        <userContext.Provider value={
            {user:user,
            setUser:setUser
            }}> 
            <Header/>
            <Outlet/>
            <Footer/>
        </userContext.Provider>
    );
};

const router1 = createBrowserRouter([
    {
        path: "/",
        element: <Applayout/>,
        errorElement: <Error/>,
        children:[
            {
                path: "/About",
                element: <About/>,
                errorElement: <Error/>,
                // children:[{
                //     path: "profile",
                //     element:<ProfileClass/>,
                // }]
            },
            {
                path: "/",
                element: <Body/>,
                errorElement: <Error/>,
            },
            {
                path: "/Contact",
                element: <Contact/>,
                errorElement: <Error/>,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantPage/>,
                errorElement:<Error/>,
            },
            {
                path: "/Instamart",
                element: <Instamart/>,
                errorElement:<Error/>,
            },
            {
                path: "/Cart",
                element: <Cart/>,
                errorElement:<Error/>,
            }
        ]
    },
    {
        path: "/About",
        element: <About/>,
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router1}/>);