import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";


const uniqueList = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category;
        })
    ),
];

const Resturant = () => {
   const [menuData, setMenuData] = useState(Menu);
   const [menuList, setMenuList] = useState(uniqueList);
//    console.log(menuData);

const filterItem = (category) => {
    const updatedList = Menu.filter((curElem) => {
        return curElem.category == category;
    });
    setMenuData(updatedList);
};


    return(
        <>

        <Navbar filterItem = {filterItem}  manuList = {menuList} />
        
        <MenuCard menuData={menuData} />
        
        </>
         
    );
}

export default Resturant;