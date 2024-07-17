import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";

const About = () =>{
    return (
        <>
        <h1 className="font-bold text-3xl mx-5 mb-4 p-2 border-b-2">
            About
        </h1>
        <div className="w-3/4 ml-5">
        <h1 className="">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi 
            tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil 
            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</h1>
        </div>
        
        {/* <ProfileClass name={"Akshay"}/> */}
    </>
    )
}

export default About;