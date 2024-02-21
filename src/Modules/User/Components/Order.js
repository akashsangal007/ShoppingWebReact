import { useParams } from "react-router";


const Order = () => {
  const orderId = useParams();
  return (
    <div className="bg-success">
      <h1 className=" text-center mt-2">Your Order has been Placed. </h1>
      <h1 className=" text-center mt-2">Order Id : {orderId.orderId} </h1>
    </div>
  );
};

export default Order;
