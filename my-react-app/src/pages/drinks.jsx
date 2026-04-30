import "./drinks.css";
import { useOutletContext } from "react-router-dom";

const drinks = [
    {
        name: "Mediterranean Mint Lemonade",
        price: 8,
        image: "https://assets.rbl.ms/31006784/origin.jpg"
    },
    {
        name: "Ayran",
        price: 9,
        image: "https://www.themediterraneandish.com/wp-content/uploads/2023/08/Ayran-WEB-10.jpg"
    },
    {
        name: "Turkish Coffee",
        price: 6,
        image: "https://www.thebossykitchen.com/wp-content/uploads/2018/02/Turkish-Coffee-square-picture0-500x500.jpg"
    },
    {
        name: "Arabic Tea",
        price: 6,
        image: "https://www.themediterraneandish.com/wp-content/uploads/2022/10/Arabic-mint-tea-2.jpg"
    },
    {
        name: "Red Wine",
        price: 18,
        image: "https://thegreekdeli.com/wp-content/uploads/2021/02/A-Glass-of-Greek-Red-Wine-a-Day-768x432.webp"
    },
    {
        name: "Big Apple Martini",
        price: 22,
        image: "https://www.acommunaltable.com/wp-content/uploads/2021/08/Single-glass-of-apple-martini-cocktail-720x1080.jpg"
    },
    {
        name: "Strawberry Basil Cocktail",
        price: 18,
        image: "https://www.everyday-delicious.com/wp-content/uploads/2022/06/strawberry-basil-cocktail-everyday-delicious-1.jpg"
    },
    {
        name: "Peach Sangria",
        price: 20,
        image: "https://abarabove.com/wp-content/uploads/2025/07/abaraboveteam_a_summer-style_food_blog_photo_of_peach_sangria_99a2afce-7610-4aff-ac9e-a1d29bb10653_3.png"
    }
];
    

function Drinks() {
  const { addToCart } = useOutletContext();

  return (
    <div className="drinks-body">
        <h1 className="title">Drinks</h1>

        <div className="wrapper">
            {drinks.map((drink, index) => (
                <div className="card" key={index}>
                    <img src={drink.image} alt={drink.name} />
                    <div className="container">
                        <h4>{drink.name}</h4>
                        <p>${drink.price}</p>
                    </div>
                    <button className="add-cart" onClick={() => addToCart(drink)}>+</button>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Drinks;