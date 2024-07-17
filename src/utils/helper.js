export function filterData(item,data){
    return data.filter((rest)=>rest?.info?.name?.toLowerCase()?.includes(item.toLowerCase()));
    
}