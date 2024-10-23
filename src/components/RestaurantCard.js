import { CDN_URL } from "../utils/constants"

const RestaurantCard = ({ rData }) => {
    console.log({ rData })
    const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } = rData?.info
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="rounded-lg" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo} </h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;