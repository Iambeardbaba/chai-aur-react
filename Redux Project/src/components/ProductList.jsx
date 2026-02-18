import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const products = [
  { id: "p1", name: "Classic T-Shirt", price: 599 },
  { id: "p2", name: "Blue Jeans", price: 1299 },
  { id: "p3", name: "Sneakers", price: 2499 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(cartActions.addItem(item));
  };

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow bg-white"
        >
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4 font-mono text-lg">
            ₹{product.price}
          </p>
          <button
            onClick={() => addToCartHandler(product)}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition-all"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
