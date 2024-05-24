import { useState } from "react";
import IMAGE_URL from "../../../utils/constants";

const SingleMenuCard = (props) => {
  // const { } = props;
  // console.log("single menu props ", props);
  const { defaultPrice, description, imageId, name, price } = props.card;

  const show = props.show;

  if (show === true) {
    return (
      <div className="flex mx-auto w-6/12 my-12 border-b-2 px-3">
        <div className="flex-1">
          <h1 className="font-bold pb-2 font-mono text-3xl">{name}</h1>
          <h2 className="py-4 font-semibold text-xl">₹ {price ? price / 100 : defaultPrice / 100}</h2>
          <p className="py-2 text-lg font-serif text-gray-600">{description}</p>
        </div>
        <div className="relative w-[200px] h-[200px] mx-4 py-3">
          <img className="w-full h-full object-cover" src={IMAGE_URL + imageId} alt="image" />
          <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 border-2 bg-white rounded-lg px-[70px] py-3 hover:bg-gray-200 font-bold text-green-500">
            ADD
          </button>
        </div>
      </div>
    );
  }
};

export default SingleMenuCard;
