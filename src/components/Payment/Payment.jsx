import "./Payment.css";
import iconCreditCard from "../../assets/icons/CreditCard.svg";
import iconPaypal from "../../assets/icons/Paypal.svg";
import iconCash from "../../assets/icons/Cash.svg";
import { useState } from "react";

function Payment({ orders, setOrders, setPament }) {
  const [activeCard, setActiveCard] = useState("credit");
  // const total = orders.reduce((sum, or) => sum + or.qty * or.price, 0);

  return (
    <>
      <div className="payment">
        <div className="paymentPanel">
          <h2 className="paymentTitle">Payment</h2>
          <p className="paymentP">3 payment method available</p>

          <div className="paymentSection">
            <h4>Payment Method</h4>
            <div className="paymentMethods">
              <button
                className={`methodBtn ${activeCard === "credit" ? "active" : ""}`}
                onClick={() => setActiveCard("credit")}
              >
                <img src={iconCreditCard} alt="" />
                Credit Card
              </button>
              <button
                className={`methodBtn ${activeCard === "paypal" ? "active" : ""}`}
                onClick={() => setActiveCard("paypal")}
              >
                <img src={iconPaypal} alt="" />
                Paypal
              </button>
              <button
                className={`methodBtn ${activeCard === "cash" ? "active" : ""}`}
                onClick={() => setActiveCard("cash")}
              >
                <img src={iconCash} alt="" />
                Cash
              </button>
            </div>
          </div>

          <div className="inputGroup">
            <label>Cardholder Name</label>
            <input type="text" placeholder="Levi Ackerman" />
          </div>

          <div className="inputGroup">
            <label>Card Number</label>
            <input type="text" placeholder="2564 1421 0897 1244" />
          </div>

          <div className="inputRow">
            <div className="inputGroup">
              <label>Expiration Date</label>
              <input type="text" placeholder="02/2022" />
            </div>
            <div className="inputGroup">
              <label>CVV</label>
              <input type="password" placeholder="123" />
            </div>
          </div>

          <div className="inputRow">
            <div className="inputGroup">
              <label>Order Type</label>
              <select>
                <option>Dine In</option>
                <option>To Go</option>
                <option>Delivery</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>Table no.</label>
              <input type="text" placeholder="140" />
            </div>
          </div>

          <div className="paymentBtns">
            <button className="cancelBtn" onClick={() => setPament(false)}>
              Cancel
            </button>
            <button className="confirmBtn">Confirm Payment</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
