import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams()
    const resInfo = useRestaurantMenu(resId)

    if (resInfo === null) return (<Shimmer />)

    const { itemCards } = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card

    return (

        <div className="menu">
            <ul>
                {itemCards.map(item => {
                    return (
                        <li>{key = item.card.info.id}{item.card.info.name}
                        </li>
                    )
                }
                )}
            </ul>
        </div>
    )
}

export default RestaurantMenu;