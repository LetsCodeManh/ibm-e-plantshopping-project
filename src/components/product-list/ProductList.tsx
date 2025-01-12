import plantsArray from "../../data/plants";
import "./ProductList.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../reducer/CartsSlice";

const ProductList: React.FC = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  const handleAddToCart = (product: {
    name: string;
    image: string;
    description: string;
    cost: number;
  }) => {
    dispatch(addItem(product));
  };

  const isInCart = (plantName: string) => {
    return cartItems.some((item: any) => item.name === plantName);
  };

  return (
    <div className="product-grid">
      {plantsArray.map((category, index) => (
        <div key={index} className="product-category">
          <h1 className="text-center">{category.category}</h1>
          <div className="product-list">
            {category.plants.map((plant, plantIndex) => (
              <div className="product-card" key={plantIndex}>
                <img
                  className="product-image"
                  src={plant.image}
                  alt={plant.name}
                />
                <div className="flex gap-1">
                  <p className="product-title">{plant.name}</p>
                  <p className="product-description">{plant.description}</p>
                  <p className="product-price">${plant.cost}</p>
                </div>

                <button
                  className={`product-button ${
                    isInCart(plant.name) ? "added-to-cart" : ""
                  }`}
                  onClick={() => handleAddToCart(plant)}
                >
                  {isInCart(plant.name) ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
