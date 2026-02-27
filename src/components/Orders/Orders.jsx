import "./Orders.css";
import iconDelete from "../../assets/icons/deleteQizil.svg";
import { useContext } from "react";
import { AppContex } from "../Contex/AppContex";


export const Orders = () => {
  const { orders, setOrders, setPament } = useContext(AppContex);
  const total = orders.reduce((sum, or) => sum + or.qty * or.price, 0);

  const removeItem = (id) => {
    const filterDele = orders.filter((or) => or.id !== id);
    setOrders(filterDele);
  };

  return (
    <>
      <div className="orderPanel">
        <h2 className="orderTitle">Orders #34562</h2>

        <div className="orderTabs">
          <button className="tab active">Dine In</button>
          <button className="tab">To Go</button>
          <button className="tab">Delivery</button>
        </div>

        <div className="orderHeader">
          <span>Item</span>
          <span className="qtyy">Qty</span>
          <span>Price</span>
        </div>

        <div className="orderList">
          {orders.map((item) => (
            <div className="orderItem" key={item.id}>
              {/* Boshqa component*/}
              <div className="orderRow-top">
                <div className="orderItemLeft">
                  <img src={item.Image} alt="" className="orderImg" />
                  <div>
                    <p className="orderName">{item.name}</p>
                    <span className="orderPrice">$ {item.price}</span>
                  </div>
                </div>
                <span className="orderQty">{item.qty}</span>
                <span className="orderTotal">
                  $ {(item.qty * item.price).toFixed(2)}
                </span>
              </div>
              <div className="orderRow-bottom">
                <input
                  className="orderNote"
                  type="text"
                  placeholder="Order Note..."
                />
                <button
                  className="deleteBtn"
                  onClick={() => removeItem(item.id)}
                >
                  <img src={iconDelete} alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="orderFooter">
          <div className="orderRow">
            <span>Discount</span>
            <span>$ 0</span>
          </div>
          <div className="orderRow">
            <span>Sub total</span>
            <b>$ {total}</b>
          </div>
          <button className="payBtn" onClick={() => setPament(true)}>
            Continue to Payment
          </button>
        </div>
      </div>
    </>
  );
};
