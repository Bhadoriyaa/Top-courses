import React, { useState } from 'react';
import { apiUrl,filterData } from "./components/data";
import Filter from './components/Filter';
import Card from './components/Card';
import Cards from './components/Cards';
import Navbar from "./components/Navbar"; 
import { toast } from 'react-toastify';
import { useEffect } from 'react';
 
 

const App=() =>{
  const[courses,setcourses]=useState(null);
  const[category,setcategory]=useState(filterData[0].title);
  useEffect(()=>{
    const fetchData= async()=>{
      try{
        let res= await fetch(apiUrl);
        let output= await res.json();
        setcourses(output.data);
      } 
      catch(error){
        toast.error("Something went wrong");
      }
    }
    fetchData();
  },[])
   
  return(
  <div className="min-h-screen flex flex-col bg-[#3b3b72]">
    <Navbar/>
<div className=" bg-[#3b3b72]">
    <Filter filterData={filterData}
    category={category}
    setcategory={setcategory}
    />
<div className="w-11/12 max-w-[1050px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
    <Cards    courses={courses} category={category}/>
    </div>
    </div>
  </div>
)

}

export default App;
