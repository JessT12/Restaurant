import "./food.css";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const foodItems = {
    appetizers: [
        {
            name: "Baba Ganoush",
            price: 15,
            image: "https://sixhungryfeet.com/wp-content/uploads/2020/11/Baba-Ganoush-3.jpg",
            description: "Creamy Middle Eastern dip made with eggplant, tahini, lemon juice, and garlic served with pita bread"
        },
        {
            name: "Dolma",
            price: 12,
            image: "https://www.themediterraneandish.com/wp-content/uploads/2019/12/Stuffed-Grape-Leaves-Recipe-Dolmas-15.jpg",
            description: "Grape leaves filled with minced meat, rice, herbs, and spices"
        },
        {
            name: "Crispy Falafel",
            price: 10,
            image: "https://feelgoodfoodie.net/wp-content/uploads/2024/03/Falafel-TIMG.jpg",
            description: "Deep fried chickpea balls seasoned with garlic, onions, cumin, and fresh cumin"
        }
    ],
    mainCourses: [
        {
            name: "Chicken Wrap",
            price: 24,
            image: "https://www.howewelive.com/wp-content/uploads/2025/07/mediterranean-chicken-wrap-2-1.jpg",
            description: "Grilled chicken breast served in a warm tortilla with fresh vegetables and tzatziki sauce"
        },
        {
            name: "Greek Gyro",
            price: 26,
            image: "https://somuchfoodblog.com/wp-content/uploads/2022/06/chicken-gyro12.jpg",
            description: "Beef gyro, lettuce, tomatoes, onions, and tzatziki sauce in a pita bread. Served with shoestring fries"
        },
        {
            name: "Broccoli Tahini Soup",
            price: 28,
            image: "https://www.marthastewart.com/thmb/yXxnu2Vl8m6l8clYdg9X1Odn1Vg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSL-897878-cream-of-broccoli-soup-horiz-1023-97e0be88ff0d4762816ea164f3921553.jpg",
            description: "Creamy soup made with fresh broccoli and tahini, served with warm pita bread"
        },
        {
            name: "Date Glazed Orange Chicken",
            price: 35,
            image: "https://www.theseasonedmom.com/wp-content/uploads/2024/09/apricot-glazed-chicken-9.jpg",
            description: "Roasted chicken served with sauce blended from soaked dates, orange juice, and spices"
        }
    ],
    desserts: [
        {
            name: "Flaky Baklava",
            price: 12,
            image: "https://www.supergoldenbakes.com/wordpress/wp-content/uploads/2023/08/Greek_Baklava-closeup-683x1024.jpg",
            description: "Crispy layers of phyllo dough filled with nuts and sweet syrup"
        },
        {
            name: "Bougatsa",
            price: 10,
            image: "https://www.allrecipes.com/thmb/ESAngN5r2uCAKvXRnWS60g1VOBo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8654345-bougatsa-ddmfs-5380-hero-3x4-17b0e320c1ae482782d0722a5d26d302.jpg",
            description: "Flaky phyllo dough layered with a creamy semolina custard filling"
        },
        {
            name: "Melomakarona",
            price: 8,
            image: "https://www.olivetomato.com/wp-content/uploads/2024/11/Melomakarona-Authentic-Greek-Christmas-Honey-Cookies-15-500x375.jpeg",
            description: "Soft, oval-shaped cookies soaked in a honey-spice syrup, then topped with walnuts"
        }
    ]
}

function Food() {
    const { addToCart } = useOutletContext();
    const [addedItems, setAddedItems] = useState(new Set());

    const categoryNames = {
        appetizers: "Appetizers",
        mainCourses: "Main Courses",
        desserts: "Desserts",
    };

    const handleAdd = (item) => {
        addToCart({ ...item, id: item.name });

        setAddedItems((prev) => {
            const updated = new Set(prev);
            updated.add(item.name);
            return updated;
        });

        setTimeout(() => {
            setAddedItems((prev) => {
                const updated = new Set(prev);
                updated.delete(item.name);
                return updated;
            });
        }, 1200);
    };

    return (
        <div className="food-body">
            {Object.entries(foodItems).map(([category, items]) => (
                <div key={category}>
                    <h1 className="title">{categoryNames[category]}</h1>

                    <div className="wrapper">
                        {items.map((item) => {
                            const isAdded = addedItems.has(item.name);

                            return (
                                <div className="card" key={item.name}>
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