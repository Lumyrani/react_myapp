import React, { useEffect } from 'react';
import RestaurantCard from "./RestaurantCard";
import { useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredList, setFilteredList] = useState([])

    const [searchText, setSearchText] = useState("")
    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        //Optional chaining
        console.log("k:", json)
        // data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        // data.cards[3].card.card.gridElements.infoWithStyle.restaurants
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }
    const onlineStatus = useOnlineStatus()
    if (onlineStatus === false) return <h1>you lost your  internet connection!!</h1>
    return listOfRestaurants === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">
                <div className='search'>
                    <input type='text' className='search-box' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button onClick={() => {
                        const filteredSearchList = listOfRestaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredList(filteredSearchList);
                    }
                    }>Search</button>
                </div>
                <button className='filter_btn' onClick={() => {
                    const filteredList3 = listOfRestaurants.map((restaurant) => restaurant)
                    setFilteredList(filteredList3)
                }}>
                    Back
                </button>
                <button className="filter_btn" onClick={() => {
                    const filteredList1 = listOfRestaurants.filter((restaurant) => restaurant?.info?.avgRating > 4.4)
                    setFilteredList(filteredList1)
                }}>
                    Top Rating Restaurant
                </button>
                <button className="filter_btn" onClick={() => {
                    const filteredList2 = listOfRestaurants.filter((restaurant) => restaurant?.info?.name.toLowerCase().includes('Burger'.toLowerCase()))
                    setFilteredList(filteredList2)
                }}>
                    Catering
                </button>

            </div>

            <div className="res-container">

                {

                    filteredList?.map((restaurant) => (<Link to={"/restaurants/" + restaurant?.info?.id}><RestaurantCard key={restaurant?.info?.id} rData={restaurant} /></Link>
                    )
                    )
                }
            </div>

        </div>

    )
}


export default Body;