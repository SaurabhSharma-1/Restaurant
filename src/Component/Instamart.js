import { useState } from "react"

const Section = ({title,desc,isVisible,setIsVisible,resetVisible}) =>{


    return(
        <>
        
        <div className='border-solid border-2 rounded-md border-gray-500 m-5 p-5'>
        <h1 className="mb-3 text-lg font-semibold">{title}</h1>
            {isVisible?
            (
            <>
            <button className='border-solid border-2 px-2 rounded-lg ' onClick={()=>resetVisible()}>Hide</button>
            <h1>{desc}</h1>
            </>):<button className='border-solid border-2 px-2 rounded-lg ' onClick={()=>{setIsVisible()}}>Show</button>}
        </div>
        </>
        
    )
}

const Instamart = () =>{

    const [visible,setVisible] = useState("");

    return(
        <div>
            <h1 className="font-bold text-3xl mx-5 mb-4 p-2 border-b-2">Careers</h1>
            <Section
            title={"Sales Manager"}
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing"
            isVisible={visible==="about"}
            setIsVisible={()=>setVisible("about")}
            resetVisible={()=>setVisible("")}
            />
            <Section 
            title="Frontend Lead"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing" 
            isVisible={visible==="product"}
            setIsVisible={()=>setVisible("product")}
            resetVisible={()=>setVisible("")}
            />
            
            <Section
            title="Management Consultant"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing" 
            isVisible={visible==="career"}
            setIsVisible={()=>setVisible("career")}
            resetVisible={()=>setVisible("")}
            />

        </div>
    )
}

export default Instamart