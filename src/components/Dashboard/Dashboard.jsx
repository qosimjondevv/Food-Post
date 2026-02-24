import "./Dashboard.css";
import icon$ from "../../assets/icons/Coin.svg";
import iconupLevel from "../../assets/icons/upLevel.svg";
import iconpastLevel from "../../assets/icons/pastLevel.svg";
import iconCustomer from "../../assets/icons/Customer.svg";
import iconOrder from "../../assets/icons/Order.svg";
import iconPeopl from "../../assets/icons/boboy.svg";
import iconReiner from "../../assets/icons/Reiner.svg";
import iconLevi from "../../assets/icons/Levi.svg";
import iconHistoria from "../../assets/icons/Historia.svg";
import iconHanji from "../../assets/icons/Hanji.svg";
import imgSuyulagman from "../../assets/img/suyuLagmon.svg";
import imgQuyulagman from "../../assets/img/quyuLagman.svg";
import imgManti from "../../assets/img/poNiovqati.svg";
import imgCircle from "../../assets/icons/Circle.svg";
function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <div className="dashboardLeft">
          <div className="leftTitle">
            <h1>Dashboard</h1>
            <h4>Tuesday 2 Feb, 2021</h4>
            <span></span>
          </div>

          <div className="leftCards">
            <div className="leftCard">
              <div className="leftCardIcon">
                <div className="icnoDoler ">
                  <img src={icon$} alt="" />
                </div>
                <p>+32.40%</p>
                <div className="iconLevel">
                  <img src={iconupLevel} alt="" />
                </div>
              </div>
              <span>$10,243.00</span>
              <p>Total Revenue</p>
            </div>

            <div className="leftCard">
              <div className="leftCardIcon">
                <div className="icnoDoler ">
                  <img src={iconOrder} alt="" />
                </div>
                <h6 className="redtit">-12.40%</h6>
                <div className="iconpastLevel">
                  <img src={iconpastLevel} alt="" />
                </div>
              </div>
              <span>23,456</span>
              <p>Total Dish Ordered</p>
            </div>

            <div className="leftCard">
              <div className="leftCardIcon">
                <div className="icnoDoler ">
                  <img src={iconCustomer} alt="" />
                </div>
                <p>+2.40%</p>
                <div className="iconLevel">
                  <img src={iconupLevel} alt="" />
                </div>
              </div>
              <span>1.234</span>
              <p>Total Customer</p>
            </div>
          </div>

          <div className="leftBottom">
            <div className="leftBottomTit">
              <h1>Order Report</h1>
            </div>
            <div className="leftBottomHeaders">
              <h4>Customer</h4>
              <h4>Menu</h4>
              <h4>Total Payment</h4>
              <h4>Status</h4>
            </div>

            <span></span>

            <div className="rows">
              <div className="peopls">
                <div className="iconMg">
                  <img src={iconPeopl} alt="" />
                  <p>Eren Jaegar</p>
                </div>
                <div className="tit">
                  <p>
                    Spicy seasoned <br /> seafood noodles{" "}
                  </p>
                </div>
                <p className="pric">$125</p>
                <div className="contents">
                  <p>Completed</p>
                </div>
              </div>

              <div className="peopls">
                <div className="iconReiner">
                  <img src={iconReiner} alt="" />
                  <p>Eren Jaegar</p>
                </div>
                <div className="tit">
                  <p>
                    Salted Pasta with <br /> mushroom sauce
                  </p>
                </div>
                <p className="pric">$145</p>
                <div className="preparing">
                  <p>Preparing</p>
                </div>
              </div>

              <div className="peopls">
                <div className="iconLevi">
                  <img src={iconLevi} alt="" />
                  <p>Eren Jaegar</p>
                </div>
                <div className="tit">
                  <p>
                    Spicy seasoned <br /> seafood noodles{" "}
                  </p>
                </div>
                <p className="pric">$125</p>
                <div className="pending">
                  <p>Pending</p>
                </div>
              </div>

              <div className="peopls">
                <div className="iconHistoria">
                  <img src={iconHistoria} alt="" />
                  <p>Eren Jaegar</p>
                </div>
                <div className="tit">
                  <p>
                    Spicy seasoned <br /> seafood noodles{" "}
                  </p>
                </div>
                <p className="pric">$125</p>
                <div className="contents">
                  <p>Completed</p>
                </div>
              </div>

              <div className="peopls">
                <div className="iconHanji">
                  <img src={iconHanji} alt="" />
                  <p>Eren Jaegar</p>
                </div>
                <div className="tit">
                  <p>
                    Spicy seasoned <br /> seafood noodles{" "}
                  </p>
                </div>
                <p className="pric">$125</p>
                <div className="contents">
                  <p>Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ///////////////////////////////////////////////////////////////////////////////////// */}

        <div className="dashboardRight">
          <div className="rightCards">
            <div className="topCard">
              <div className="topTit">
                <h1>Most Ordered</h1>
                <select className="selc">
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
                  <option value="friday">Friday</option>
                  <option value="saturday">Saturday</option>
                  <option value="sunday">Sunday</option>
                </select>
              </div>
              <span></span>
              <div className="topMenu">
                <div className="menus">
                  <img src={imgSuyulagman} alt="" />
                  <div className="menuText">
                    <h5>Spicy seasoned seafood noodles</h5>
                    <p>200 dishes ordered</p>
                  </div>
                </div>

                <div className="menus">
                  <img src={imgQuyulagman} alt="" />
                  <div className="menuText">
                    <h5>Spicy seasoned seafood noodles</h5>
                    <p>200 dishes ordered</p>
                  </div>
                </div>

                <div className="menus">
                  <img src={imgManti} alt="" />
                  <div className="menuText">
                    <h5>Spicy seasoned seafood noodles</h5>
                    <p>200 dishes ordered</p>
                  </div>
                </div>
              </div>
              <button>View All</button>
            </div>

            <div className="botomCard">
              <div className="topTit">
                <h1>Most Type of Order</h1>
                <select className="selc">
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
                  <option value="friday">Friday</option>
                  <option value="saturday">Saturday</option>
                  <option value="sunday">Sunday</option>
                </select>
              </div>
              <span className="hrBotom"></span>
              <div className="botomimg">
                <div className="imgd">
                  <img src={imgCircle} alt="" />
                </div>


                <div className="bottomInfo">
                  <div className="titlesBottom">
                    <div className="yumred"></div>
                    <div className="yumtext">
                      <h5>Dine In</h5>
                      <p>200 customers</p>
                    </div>
                  </div>

                  <div className="titlesBottom">
                    <div className="yumOrange"></div>
                    <div className="yumtext">
                      <h5>Dine In</h5>
                      <p>200 customers</p>
                    </div>
                  </div>

                  <div className="titlesBottom">
                    <div className="yumBlue"></div>
                    <div className="yumtext">
                      <h5>Dine In</h5>
                      <p>200 customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
