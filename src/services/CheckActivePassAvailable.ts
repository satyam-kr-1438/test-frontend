export const CheckActivePassAvailable=(packageSales:any,passes:any,passesFeatures:any,type:string)=>{
    if(type=="Pass Pro"){
        let filterPass=packageSales.filter((item:any)=>item?.passid)?.map((item:any)=>item?.passid ? item?.passid : null)
        if(filterPass?.length<=0){
            return false
        }else{
            let findPass=passes?.filter((item:any)=>{
                if(filterPass?.includes(item?.id)){
                    return item
                }
            })
            if(findPass){
                let checkPassProAvailable=findPass?.find((item:any)=>{
                    if(item?.tblpass_type?.name=="Pass Pro"){
                        return item
                    }
                })
                if(checkPassProAvailable){
                    return true
                }else{
                    return false
                }
            }else{
                return false
            }
        }
    }else if(type=="Pass"){
        let filterPass=packageSales.filter((item:any)=>item?.passid)?.map((item:any)=>item?.passid ? item?.passid : null)
        if(filterPass?.length<=0){
            return false
        }else{
            let findPass=passes?.filter((item:any)=>{
                if(filterPass?.includes(item?.id)){
                    return item
                }
            })
            if(findPass){
                let checkPassProAvailable=findPass?.find((item:any)=>{
                    if(item?.tblpass_type?.name=="Pass"){
                        return item
                    }
                })
                if(checkPassProAvailable){
                    return true
                }else{
                    return false
                }
            }else{
                return false
            }
        }
    }else if(type=="Any"){
        let filterPass=packageSales.filter((item:any)=>item?.passid)?.map((item:any)=>item?.passid ? item?.passid : null)
        if(filterPass?.length<=0){
            return false
        }else{
            let findPass=passes?.filter((item:any)=>{
                if(filterPass?.includes(item?.id)){
                    return item
                }
            })
            if(findPass){
                let checkPassProAvailable=findPass?.find((item:any)=>{
                    if(item?.tblpass_type?.name=="Pass" || item?.tblpass_type?.name=="Pass Pro"){
                        return item
                    }
                })
                if(checkPassProAvailable){
                    return true
                }else{
                    return false
                }
            }else{
                return false
            }
        }
    }
}


export function isDateLessThanOrEqualToToday(dateString:any) {
    const givenDate = new Date(dateString); // Convert the input string to a Date object
    const now = new Date(); // Get the current date and time
  
    // Return true if givenDate is less than or equal to now, false otherwise
    return givenDate <= now;
  }