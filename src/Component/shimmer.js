
export const Shimmer = ()=>{
    return(
        
        <>
        <div className="search-container">
        <input 
        type="text"
        className="search-input"
        placeholder="Search"
        onChange={(e)=>{
            setSearch(e.target.value);
        }}/>
        <button>
            Search
        </button>
        </div>
        <div className='RestaurantCard'>
            
            {Array(20).fill("").map((e,index)=>{return <div className="shim" key={index}></div>})}
        </div>
        </>
        
    )
}

    