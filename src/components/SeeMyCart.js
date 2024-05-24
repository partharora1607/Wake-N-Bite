import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/store/slices/cartSlice";

const IMAGE_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const SeeMyCart = () => {
  const cartItems = useSelector((store) => store?.cart?.items);

  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  console.log(cartItems);
  return (
    <>
      <h1 className="text-center m-4 p-4 text-3xl font-bold text-orange-400">Cart - ( {cartItems?.length} items ) </h1>

      <div>
        {cartItems.map((item, idx) => {
          return (
            <>
              <div
                key={idx}
                className="border-b-4 border-r-4 rounded-2xl w-6/12 mx-auto px-5 py-5 flex my-10 shadow-2xl"
              >
                <div className="">
                  <h1 className="mx-10 font-mono text-3xl font-bold text-amber-900 underline">{item.name}</h1>
                  <p className="mx-10 my-3 font-mono text-2xl text-gray-500 ">₹ {item.price / 100} </p>
                  <p className="px-10 text-xl">{item.description}</p>
                </div>
                <div>
                  <img className="rounded-full shadow-lg" src={IMAGE_URL + item.imageId} />
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="text-center ">
        <button
          onClick={clearCartHandler}
          className="font-serif font-semibold border p-4 rounded-lg bg-slate-800 text-white"
        >
          Clear Cart
        </button>
      </div>
    </>
  );
};

export default SeeMyCart;
