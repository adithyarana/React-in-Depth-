const RestaurantCard = ({ resdata }) => {
    const {
      name,
      avgRating,
      costForTwo,
      locality,
      cuisines,
      sla,
      cloudinaryImageId,
    } = resdata?.info;
    
  
    return (
      <div data-testid="rescard" className="flex flex-col gap-2 border border-gray-400 rounded-xl bg-gray-100 w-[200px] h-[450px] ">
        <img className="w-[200px] h-[200px] object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt={name}/>
        <div className="flex flex-col gap-2 p-3">
        <h2 className="font-bold">{name}</h2>
        <h3 className="text-yellow-500">{avgRating}</h3>
        <h3>{costForTwo}</h3>
        <h4>{locality}</h4>
        <h5 className="text-wrap">{cuisines.join(", ")}</h5>
        <h6>{sla.deliveryTime} mins</h6>
        </div>
      </div>
    );
  };


  // Higher Order Component

  export const Withpromotedcard = (RestaurantCard) => {
    return (resdata)=>{
      return(
        <div>
          <h3 className="absolute p-2 text-white bg-black rounded-lg" >Promoted</h3>
          <RestaurantCard {...resdata}/>
        </div>
      )
    }
  }
    

export default RestaurantCard;