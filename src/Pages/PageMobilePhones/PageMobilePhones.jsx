// PHOTOS
import iphoneBlue from "../../img/iphoneBlue.jpg";
import iphoneRed from "../../img/iphoneRed.jpg";
import iphoneWhite from "../../img/iphoneWhite.jpg";

// STYLES
import "./PageMobilePhonesStyles.css";

const iphones = [
  {
    id: 1,
    icon: iphoneRed,
    price: "60 000 ₽",
    lastprice: "59 500 ₽",
    saleprice: "65000 ₽",
    text: "Смартфон 13 айфон / 1170x2532 / Super Retina XDR / 256 GB",
  },
  {
    id: 2,
    icon: iphoneBlue,
    price: "61 000 ₽",
    lastprice: "60 000 ₽",
    saleprice: "65 000 ₽",
    text: "Смартфон 13 айфон / 1170x2532 / Super Retina XDR / 256 GB",
  },
  {
    id: 3,
    icon: iphoneWhite,
    price: "100 000 ₽",
    lastprice: "99 000 ₽",
    saleprice: "110 000 ₽",
    text: "Смартфон 13 айфон / 1170x2532 / Super Retina XDR / 256 GB",
  },
];

function PageMobilePhones() {
  return (
    <div>
      <header>
        <div className="mainMenu">
          <a href="/">Главная страница</a>
          <a href="/login">Авторизация </a>
          <a href="/mobilephones">Магазин</a>
        </div>
      </header>
      <div className="containerPhones">
        {iphones.map((current) => (
          <div key={current.id} className="mobilePhones">
            <div>
              <img src={current.icon} className="iphonesStyle"></img>
            </div>
            <button className="buttonSearch">Быстрый просмотр</button>
            <div className="underPhone">
              <div className="pricePhones">
                <p className="priceWithoutSale">{current.price}</p>
                <p className="priceSale">{current.saleprice}</p>
              </div>
              <p className="priceSaleBank">{current.lastprice}</p>
              <div className="priceName">{current.text}</div>
              <div>
                <span className="stars">★★★★★</span> 87
              </div>
              <div className="priceCredit">Рассрочка 0-0-6</div>
            </div>
            <div className="priceBasketAndHeart">
              <button className="priceBasket">В корзину</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                className="heartSvg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PageMobilePhones;
