import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK);

const Payment = () => {
  const [cart] = useCart()
  const total = cart.reduce((sum,item)=> sum+item.price,0)
  const price = parseFloat(total.toFixed(2))
  return (
    <div className="w-full p-4 max-h-full">
      <Helmet>
        <title>Bistro Boss | Payment</title>
      </Helmet>
      <SectionTitle subHeading="Pay now" heading="payment"></SectionTitle>

      {/* payment part */}
      <h1 className="text-2xl">You can Pay here</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
