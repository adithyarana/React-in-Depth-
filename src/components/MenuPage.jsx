import React, { useState } from "react";
import SimmerUi from "./Simmer";
import { useParams } from "react-router-dom";
import useMenuhook from "../utils/useMenuhook";
import ResCategory from "./ResCategory";

const MenuPage = () => {

  const { resId } = useParams();
  const [expand, setexpand ]= useState(null)

  const resInfo = useMenuhook(resId);
  console.log(resInfo);

  const dummy ="Dummy data"

  if (resInfo === null) return <SimmerUi />;

  const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || [];
    console.log( "cards" ,resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    
    
    const category = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((res)=>{
      return res.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

    console.log("category" , category);

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <h1 className="text-2xl">{name}</h1>

      <p className="text-xl">
        {cuisines.join(", ")}- Rs {costForTwo / 100} for two
      </p>

      {/* <h2>{category?.card?.card?.title}</h2>
      <ul>
        {itemCards?.map((itemcard) => {
          return (
            <li key={itemcard?.card?.info?.id}>
              {itemcard?.card?.info?.name} -
              {" "}
              <span className="font-bold">Rs:</span>{itemcard?.card?.info?.price / 100}
            </li>
          );
        })}
      </ul> */}

       {/* accordian  */}
       {category.map((category, index)=>{
        return(
          // controlled component
          <ResCategory
           key={category?.card?.card?.categoryId}
            category={category?.card?.card}
             showlist={index==expand?true:false}
             setexpand={()=>setexpand(index)}
             dummydata={dummy}     // this will change the index when we click on accordian
             />  // showlist it the props which is conrolling the accordian rescatogery open or close it is a controlled component
        )
       })}
    </div>
  );
};

export default MenuPage;
