import "./MenuCard.css";
import suyuLagman from "../../assets/img/suyuLagmon.svg";
import hotLanch from "../../assets/img/hotLanch.svg";
import poNiovqati from "../../assets/img/poNiovqati.svg";
import quyuLagman from "../../assets/img/quyuLagman.svg";
import tuqum from "../../assets/img/tuqum.svg";
function MenuCard({ menuCategoriy, orders, setOrders }) {
  const dishes = [
    {
      id: 1,
      Image: suyuLagman,
      name: "Spicy seasoned seafood noodles",
      price: 2.29,
      available: 20,
      category: "Hot Dishes",
    },
    {
      id: 2,
      Image: hotLanch,
      name: "Salted Pasta with mushroom sauce",
      price: 2.69,
      available: 11,
      category: "Cold Dishes",
    },
    {
      id: 3,
      Image: poNiovqati,
      name: "Beef dumpling in hot and sour soup",
      price: 2.99,
      available: 16,
      category: "Soup",
    },
    {
      id: 4,
      Image: quyuLagman,
      name: "Healthy noodle with spinach leaf",
      price: 3.29,
      available: 22,
      category: "Grill",
    },
    {
      id: 5,
      Image: tuqum,
      name: "Hot spicy fried rice with omelet",
      price: 3.49,
      available: 13,
      category: "Dessert",
    },
    {
      id: 6,
      Image: poNiovqati,
      name: "Hot spicy fried rice with omelet",
      price: 3.49,
      available: 13,
      category: "Appetizer",
    },
  ];

  const filterDishes =
    menuCategoriy === "All"
      ? dishes
      : dishes.filter((item) => item.category === menuCategoriy);

  function addOrders(item) {
    const buyurtma = orders.find((or) => or.id === item.id);

    if (buyurtma) {
      const updated = orders.map((or) => {
        if (or.id === item.id) {
          return { ...or, qty: or.qty + 1 };
        }
        return or;
      });
      setOrders(updated);
    } else {
      const newItem = { ...item, qty: 1 };
      setOrders([...orders, newItem]);
    }
  }
  return (
    <>
      <div className="Menu">
        <div className="menuCardTitle">
          <h1>Choose Dishes</h1>
        </div>

        <div className="menuCards">
          <div className="menuCard">
            {filterDishes.map((item) => (
              <div
                className="card"
                key={item.id}
                onClick={() => addOrders(item)}
              >
                <img src={item.Image} alt="" />
                <div className="card_text">
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                  <span>{item.available} Bowls available</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default MenuCard;
