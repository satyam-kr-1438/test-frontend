import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import Footer from 'components/blocks/footer/Footer';
import Testerikaheader from 'components/testerikaheader/Testerikaheader';
import Testerikamianheader from 'components/testerikaheader/Testerikamianheader';
import Blogs from 'components/blogs/Blogs';
import { useRouter } from 'next/router';

const Blog = () => {
  const [loading,setLoading]=useState(true)
  const router=useRouter()
  useEffect(()=>{
    router.push("/")
  },[])
  return (
    <Fragment>
    <Testerikaheader />
    <Testerikamianheader />
    
    {/* <Blogs /> */}
    <Footer/>
    </Fragment>
  )
}

export default Blog