import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Fortnite = () => {

  

  useEffect(() => {
      fetchItems();
  },[]);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
      const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
      const items = await data.json();
      
      setItems(items.items);
  }
     

  return (
    <div>
     {items.map(item =>(
         <h1 key={item.itemid}>
             <Link  to={`/fortnite/${item.itemid}`}>{item.name}</Link>
             </h1>
     ))}
    </div>
  );
}

export default Fortnite;