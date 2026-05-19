import "./food.css";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Food() {
    const { addToCart } = useOutletContext();
    const [menuItems, setMenuItems] = useState([]);
    const [addedItems, setAddedItems] = useState(new Set());

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/menu`)
            .then((res) => res.json())
            .then((data) => setMenuItems(data));
    }, []);



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

    const foodOnly = menuItems.filter(
        (item) => item.category === "Food"
    );

    const groupedItems = foodOnly.reduce((acc, item) => {
        const category = item.section;

        if (!acc[category]) acc[category] = [];
        acc[category].push(item);

        return acc;
    }, {});

    const categoryNames = {
        Appetizers: "Appetizers",
        "Main Courses": "Main Courses",
        Desserts: "Desserts",
    };

    return (
        <div className="food-body">
            {Object.entries(groupedItems).map(([category, items]) => (
                <div key={category}>
                    <h1 className="title">{categoryNames[category] || category}</h1>

                    <div className="wrapper">
                        {items.map((item) => {
                            const isAdded = addedItems.has(item._id);

                            return (
                                <div className="card" key={item._id}>
                                    <img src={item.image} alt={item.name} />

                                    <div className="container">
                                        <h4>{item.name}</h4>
                                        <p>${item.price}</p>
                                        <p className="description">{item.description}</p>
                                    </div>

                                    <button
                                        className={`add-cart ${isAdded ? "added" : ""}`}
                                        onClick={() => handleAdd(item)}
                                    >
                                        {isAdded ? "Added to cart" : "+"}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}


export default Food;