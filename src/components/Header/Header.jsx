import "./Header.css";
import search from "../../assets/icons/search.svg";
function Header({ menuCategoriy, setmenuCategoriy }) {
  const categors = [
    "All",
    "Hot Dishes",
    "Cold Dishes",
    "Soup",
    "Grill",
    "Appetizer",
    "Dessert",
  ];

  return (
    <>
      <div className="heaDer">
        <div className="header">
          <div className="hiro_title">
            <h1>Jaegar Resto</h1>
            <p>Tuesday, 2 Feb 2021</p>
          </div>
          <div className="headSearch">
            <img src={search} alt="" />
            <input
              type="search"
              className="search"
              placeholder="Search for food, coffe, etc.."
            />
          </div>
        </div>

        <div className="categoryMenu">
          {categors.map((cate) => (
            <button
              key={cate}
              onClick={() => setmenuCategoriy(cate)}
              className={menuCategoriy === cate ? "active" : ""}
            >
              {cate}
            </button>
          ))}
        </div>
        <span></span>
      </div>
    </>
  );
}
export default Header;
