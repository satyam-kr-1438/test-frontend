import Loading from 'components/dashboardComponent/common/loadingPart/Loading'
import { getActivePackagesAndPassesDetails, getAllPasses } from 'components/request/request'
import { getAuthenticatedUserData } from 'hooks/localStorageInfo'
import { useRouter } from 'next/router'
import React, { FC, Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getActivePackagesBundlePasses, setPasses, setPassesFeatures } from 'reducers/reducerSlice'

const GetAllActivePackagesAndPasses:FC<any> = ({children}) => {
    const dispatch=useDispatch()
    const router=useRouter()
    const getPremiumPackagesAndPasses=async ()=>{
        try{
         const auth=getAuthenticatedUserData()
         if(auth){
            const {data}=await getActivePackagesAndPassesDetails(auth?.id)
            if(data?.success){
               dispatch(getActivePackagesBundlePasses(data?.data))
            }else{
            }
         }else{
         }
        }catch(err){
        }
     }

     const getAllPAssesData = async () => {
         try {
           const { data } = await getAllPasses()
           if (data?.success) {
             dispatch(setPasses(data?.data))
             dispatch(setPassesFeatures(data?.data2))
           }
         } catch (err) {
         }
       }
       useEffect(() => {
            getAllPAssesData()
       }, [])
     useEffect(()=>{
         getPremiumPackagesAndPasses()
     },[])
  return (
    <Fragment>
        {
            children
        }
    </Fragment>
  )
}

export default GetAllActivePackagesAndPasses