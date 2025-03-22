"use client";

import { listProductCategories } from '@/services/ListProductCategories';
import React, { useEffect} from 'react'

const ProductApiTest = () => {

useEffect(()=>{
  const getCategories =async ()=>{
    const data=await listProductCategories();
    console.log(data);
  };
  getCategories();
},[])
  

  
  return (
    <div>ProductApiTest</div>
  )
}

export default ProductApiTest