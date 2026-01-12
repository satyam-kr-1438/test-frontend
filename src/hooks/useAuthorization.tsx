import { useCallback, useEffect, useState } from 'react';

const useAuthorization = () => {
  const [auth, setAuth] = useState<any>(null);

  // scroll listener
  useEffect(()=>{
    if(typeof window != "undefined" && typeof localStorage!="undefined"){
        const authUser=(localStorage?.getItem("testerikaAuthenticatedUserDetail") || "")
        if(authUser){
           setAuth(JSON.parse(authUser))
        }
     }
  },[])

  return [auth,setAuth];
};

export default useAuthorization;
