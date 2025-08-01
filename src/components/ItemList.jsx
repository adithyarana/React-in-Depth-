import React, { useEffect } from "react";
import { Itemimage } from "../utils/constant.jsx";
import { useDispatch } from "react-redux";
import { additem } from "../utils/CardSlice.jsx";

const ItemList = ({ items }) => {
  console.log("items", items);

  const dispatch = useDispatch();

  const handleAddItem=(itemcard)=>{
    dispatch(additem(itemcard))
  }

  // if i click on add button it should shoow item added text

  


//   console.log("dummydata", dummydata);
  return items.length > 0 ?  (
    <div>
      {items.map((itemcard) => {
        const { name, price, description, imageId,defaultPrice } = itemcard?.card?.info;
        return (
          <div data-testid="itemlist" className="flex justify-between border-b border-gray-400" key={itemcard?.card?.info?.id}>
            <div
              className="flex flex-col gap-2 p-2 w-9/12"
            
            >
              <h2 className="font-bold">{name}</h2> 
              <p className="font-bold">Rs:{price?price/100:defaultPrice/100}</p>
              <p className="text-sm text-wrap">{description}</p>
            </div>

            <div className="flex flex-col p-3 w-3/12">
              <img
                src={Itemimage + imageId}
                alt="image"
                className="object-cover p-2 mt-8 rounded-xl"
              />
              <button  className="p-2 font-medium text-green-500 bg-gray-100 rounded-2xl cursor-pointer" onClick={()=>handleAddItem(itemcard)}>Add +</button>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div>
      <h2 className="text-2xl font-bold text-center">No items found</h2>
    </div>
  );
};

export default ItemList;
