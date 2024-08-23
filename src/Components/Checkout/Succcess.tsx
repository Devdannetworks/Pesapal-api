import { useLocation, useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const transactionReference = queryParams.get("transaction_reference");

  const { orderTrackingId } = useParams();

  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Your transaction reference is: {orderTrackingId}</p>
    </div>
  );
};

export default PaymentSuccess;
