import React from "react";
import './../styles/App.css';
import Tabscomponent from "./Tabscomponent";
import { useState } from "react";

const App = () => {


  function handlingfn(id, value) {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          content: `Content for ${value}`,
        };
      }
      return item;
    });

    setData(updatedData);
  }
  const [data,setData]=useState([
    {id:1,title:['Tab 1','Tab 2','Tab 3'],content:'Content for Tab 1'},
    {id:2,title:['Tab A','Tab B','Tab C'],content:'Content for Tab A'},
  ])
  return (
    <div>
        <Tabscomponent data={data} handlingfn={handlingfn}/>

    </div>
  )
}

export default App
