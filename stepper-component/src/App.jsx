import CheckoutStepper from "./components/stepper";
import "./App.css";

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your contact details.</div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div>Provide your Shipping address.</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Complete Payment for your order.</div>,
  },
  {
    name: "Delivered",
    Component: () => <div>Your order has been delivered</div>,
  },
];


function App() {
  return (
    <div>
      <h2>Checkout</h2>
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
    </div>
  );
}

export default App;
