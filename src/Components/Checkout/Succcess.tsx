import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const { orderTrackingId } = useParams();

  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Your transaction reference is: {orderTrackingId}</p>
    </div>
  );
};

export default PaymentSuccess;
