import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import SimmerUi from "./Simmer.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";
import { Withpromotedcard } from "./RestaurantCard";
const Body = () => {
  // hooks is the normal js funtion that given by react

  const [filterdata, setfilterdata] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  const [filterres, setfilterres] = useState([]);

  const PromotedCard = Withpromotedcard(RestaurantCard);

  console.log("filterdata",filterdata);

  console.log("Body Rendered");

  // this callback function inside in useeffct run after the page render the page and it call the callback function
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setfilterdata(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterres(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus= useOnlineStatus();

  if(onlineStatus == false){
    return <h1>Plz check your Internet connection</h1>
  }




  // this is the skeleton loading cards simmer ui
  // this is the conditional rendering

  // Add optional chaining to safely check length
  return !filterdata || filterdata.length === 0 ? (
    <SimmerUi />
  ) : (
    <div className="body">
      <div className="flex gap-10 p-6">
        <div className="search">
          <input
            type="text"
            id="search"
            data-testid="search"
            placeholder="Serach Here..."
            value={searchtext}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
            className="p-2 border border-gray-400"
          />
          <button
            className="p-2 border border-gray-400"
            onClick={() => {
              // updtae the ui by filter the search

              const filterupdatadata = filterdata.filter((res) => {
                return res?.info?.name
                  .toLowerCase()
                  .includes(searchtext.toLowerCase());
              });
              setfilterres(filterupdatadata);

              setSearchtext("");
            }}
            
          >
            Search
          </button>
        </div>
        <button
          className="p-2 rounded-2xl border border-gray-400 cursor-pointer"
          onClick={() => {
            let filterdata1 = filterdata.filter((res) => {
              return res?.info?.avgRating > 4;
            });
            

            setfilterdata(filterdata1);
            console.log(filterdata1);
          }}
        >
          Top Rated restaurants
        </button>

        <button
          className="p-2 rounded-2xl border border-gray-400 cursor-pointer"
          onClick={() => {
            setfilterres(filterdata);
          }}
        >
          All restaurants
        </button>
      </div>
      <div className="grid grid-cols-5 gap-10 p-4 xl:grid-cols-5 2xl:grid-cols-8">
        {filterres.map(
          (
            resdata // dont use index as key it is a bad practice
          ) => (
            <Link
              key={resdata?.info?.id}
              to={"/restaurant/" + resdata?.info?.id}
            >
              {" "}
              {resdata?.info?.isOpen?<PromotedCard resdata={resdata}/>:<RestaurantCard resdata={resdata} />}
              {/* <RestaurantCard resdata={resdata} /> */}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Body;
