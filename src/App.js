import { useState } from "react";
import "./styles.css";

const cityList = {
  Goa: [
    { title: "Baaga Beach", rating: "⭐⭐⭐⭐⭐" },
    { title: "Big daddy Casino", rating: "⭐⭐⭐" },
    { title: "Agoda Fort", rating: "⭐⭐⭐⭐" },
    { title: "Palolem Beach", rating: "⭐⭐⭐" },
    { title: "Big Foot Mueseum", rating: "⭐⭐" }
  ],
  Hyderabad: [
    { title: "Tank Bund", rating: "⭐⭐⭐⭐⭐" },
    { title: "Golconda", rating: "⭐⭐⭐⭐" },
    { title: "Birla Temple", rating: "⭐⭐⭐" },
    { title: "Charminar", rating: "⭐⭐⭐" },
    { title: "Wonderla", rating: "⭐⭐⭐" }
  ],
  Kerala: [
    { title: "Allepey", rating: "⭐⭐⭐⭐⭐" },
    { title: "Wayand", rating: "⭐⭐⭐⭐⭐" },
    { title: "Munnar", rating: "⭐⭐⭐⭐" },
    { title: "Kochi", rating: "⭐⭐⭐" },
    { title: "Thrivandrum", rating: "⭐⭐⭐⭐⭐" }
  ]
};

export default function App() {
  const [list, setList] = useState(null);
  const [buttonClicked, setButtonCliked] = useState(false);

  const handleOnClick = (cityName) => {
    setList(cityList[cityName]);
    setButtonCliked(true);
  };
  return (
    <div className="App">
      <div class="header">
        <h2>Best Places to visit</h2>
        <p>
          Checkout on my list of places to visit. Click on City to get list.
        </p>
      </div>
      <hr />
      {Object.keys(cityList).map((city, index) => {
        return (
          <button
            className="btn"
            key={index}
            onClick={() => handleOnClick(city)}
          >
            {city}
          </button>
        );
      })}
      {list &&
        buttonClicked &&
        list.map((element, idx) => {
          return (
            <div key={idx} className="container">
              <ul>
                <li>{element.title}</li>
                <li className="small">Rating:{element.rating}</li>
              </ul>
            </div>
          );
        })}
    </div>
  );
}
