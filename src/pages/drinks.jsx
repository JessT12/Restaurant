import "./drinks.css";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";


function Drinks() {
    const { addToCart } = useOutletContext();
    const [menuItems, setMenuItems] = useState([]);
    const [addedItems, setAddedItems] = useState(new Set());

    useEffect(() => {
        fetch("http://localhost:5000/api/menu")
            .then((res) => res.json())
            .then((data) => setMenuItems(data));
    }, []);


    //get only drinks from menu data in mongodb
    const drinks = menuItems.filter(
        (item) =>
            item.category === "Drinks"
    );

    const handleAdd = (item) => {
        addToCart({ ...item, id: item._id });

        setAddedItems((prev) => {
            const updated = new Set(prev);
            updated.add(item._id);
            return updated;
        });

        setTimeout(() => {
            setAddedItems((prev) => {
                const updated = new Set(prev);
                updated.delete(item._id);
                return updated;
            });
        }, 1200);
    };

    return (
        <div className="drinks-body">
            <h1 className="title">Drinks</h1>

            <div className="wrapper">
                {drinks.map((drink) => {
                    const isAdded = addedItems.has(drink._id);
                    return (
                        <div className="card" key={drink._id}>
                            <img src={drink.image} alt={drink._id} />
                            <div className="container">
                                <h4>{drink.name}</h4>
                                <p>${drink.price}</p>
                            </div>
                            <button className={`add-cart ${isAdded ? "added" : ""}`} onClick={() => handleAdd(drink)}>
                                {isAdded ? "Added to cart" : "+"}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Drinks;