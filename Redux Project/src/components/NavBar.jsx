import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";

const NavBar = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-slate-900 text-white shadow-lg">
      <h1 className="text-2xl font-bold tracking-tight text-blue-400">
        Mera<span className="text-white">Shop</span>
      </h1>
      <div className="relative cursor-pointer hover:scale-110 transition-transform">
        <ShoppingCart size={28} />
        {cartQuantity > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white h-5 w-5 flex items-center justify-center rounded-full font-bold animate-bounce">
            {cartQuantity}
          </span>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
