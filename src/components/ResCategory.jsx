import React  from "react";
import ItemList from "./ItemList";

const ResCategory = ({ category, showlist, setexpand, dummydata}) => {
 



  const { title } = category;
  return (
    <div
      onClick={() =>{setexpand()}}
      className="p-4 w-[1000px] bg-white shadow-lg my-3 cursor-pointer "
    >
      {/* header */}
      <div className="flex justify-between">
        <span className="text-xl font-bold">
          {title} ({category?.itemCards?.length})
        </span>
        <span>{showlist ? "⬆" : "⬇"}</span>
      </div>

      {/* accordian body */}
      {showlist && <ItemList items={category?.itemCards} dummydata={dummydata}/>}
    </div>
  );
};

export default ResCategory;
