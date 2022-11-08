import "./styles.css";
import Button from "./Button";
import Input from "./Input";

const PaymentCheckout = (props) => (
  <div className="checkout">
    <div className="checkout-container">
      <button className="apple-pay-btn" onClick={event => window.location.href="https://www.apple.com/apple-pay/"}>Apple Pay</button>
      <br />
      <br />
      <button className="crypto-btn" onClick={event => window.location.href='https://www.coinbase.com/'}>Pay with crypto</button>
      <br />
      <br />
      <h3 className="heading-3">Or pay with card</h3>
      <Input label="Cardholder's Name" type="text" name="name" />
      <Input label="Card Number" type="number" name="card_number" imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png" />
       <div className="row">
         <div className="col">
           <Input label="Expiration Date" type="month" name="exp_date" />
         </div>
         <div className="col">
           <Input label="CVV" type="number" name="cvv" />
         </div>
       </div>
       <Button text="Place order" />
     </div>
  </div>
);
 
export default PaymentCheckout;