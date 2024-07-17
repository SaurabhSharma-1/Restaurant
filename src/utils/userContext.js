import { createContext } from "react";

const userContext = createContext({
    Dummy:{
        name:"Dummy Name",
        email: "Dummy@gmail.com",
    }
})

export default userContext;