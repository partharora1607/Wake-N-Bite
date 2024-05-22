import dealOfDayImg from "../../../images/deal-of-day.png";

const DealsForYou = (props) => {
  const header = props?.offer?.info?.header;
  const couponCode = props?.offer?.info?.couponCode;
  return (
    <>
      <div className="border w-3/12 m-2 p-4 flex rounded-3xl shadow-lg">
        <img src={dealOfDayImg} className="w-[55px]" alt="Deal of the Day"></img>
        <div className="font-sanspl-5 text-m pl-3">
          <p className="font-semibold">{header}</p>
          <p className="text-gray-400 font-semibold">{couponCode}</p>
        </div>
      </div>
    </>
  );
};

export default DealsForYou;
