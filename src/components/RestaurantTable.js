import { useState, useEffect } from "react";
import Filter from './Filter';

const RestaurantTable = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterTerm, setFilterTerm] = useState('');

  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    const res = await fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', {
      method: 'GET',
      headers: {
        Authorization: 'Api-Key ' + process.env.REACT_APP_SECRET_KEY
      }
    })
    const data = await res.json()
    data.sort((a,b) => b.name < a.name ? 1 : -1)
    setRestaurants(data)
  }

  const filterRestaurants = () => {
    return restaurants.filter(restaurant => {
      const values = [
        restaurant.state,
        restaurant.genre
      ]
      return values.reduce((acc, value) => {
        if (value.toLowerCase().includes(filterTerm.toLowerCase())) acc = true;
        return acc;
      }, false)
    });
  };
  
  return (
    <>
      <Filter filterTerm={filterTerm} setFilterTerm={setFilterTerm} />
      
      <table>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>State</th>
          <th>Genre</th>
          <th>Telephone</th>
        </tr>

        {filterRestaurants().map(restaurant => {
          return (
            <tr key={restaurant.id}>
              <td>{restaurant.name}</td>
              <td>{restaurant.city}</td>
              <td>{restaurant.state}</td>
              <td>{restaurant.genre}</td>
              <td>{restaurant.telephone}</td>
            </tr>
          )})}
      </table>
    </>
  );
}

export default RestaurantTable;