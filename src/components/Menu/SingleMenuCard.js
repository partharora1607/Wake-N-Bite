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
          <h1 className="font-bold pb-2 font-serif text-3xl">{name}</h1>
          <h2 className="py-4 font-semibold text-xl">₹ {price ? price / 100 : defaultPrice / 100}</h2>
          <p className="py-2 text-lg">{description}</p>
        </div>
        <div className="h-full py-3">
          <img className="w-[200px] h-[200px] mx-4" src={IMAGE_URL + imageId} alt="image" />
        </div>
      </div>
    );
  }
};

export default SingleMenuCard;
