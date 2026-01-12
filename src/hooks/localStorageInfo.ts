export const setAuthenticationData=(data:any)=>{
   if(typeof window!="undefined" && typeof localStorage!="undefined"){
     localStorage.setItem("testerikaAuthenticatedUserDetail",JSON.stringify(data))
     let getData=(localStorage.getItem("testerikaAuthenticatedUserDetail") || "")
     if(getData){
        return true
     }else{
        return false
     }
   }else{
    return false
   }
}

export const removeAuthenticationDataHandleLogout=()=>{
  if(typeof window!="undefined" && typeof localStorage!="undefined"){
    localStorage.removeItem("testerikaAuthenticatedUserDetail")
    return true
  }else{
   return false
  }
}

export const getAuthenticatedUserData=()=>{
  if(typeof window!="undefined" && typeof localStorage!="undefined"){
    let getData=(localStorage.getItem("testerikaAuthenticatedUserDetail") || "")
    if(getData){
       return JSON.parse(getData)
    }else{
      return null
    }
  }else{
   return null
  }
}


export const checkUserProfileStatus=()=>{
  if(typeof window!="undefined" && typeof localStorage!="undefined"){
    let getData=(localStorage.getItem("testerikaAuthenticatedUserDetail") || "")
    if(getData){
       if(JSON.parse(getData)?.firstname && JSON.parse(getData)?.lastname){
          return true
       }else{
        return false
       }
    }else{
      return false
    }
  }else{
   return false
  }
}