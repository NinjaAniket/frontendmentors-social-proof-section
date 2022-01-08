import React from "react";
import "./quotes-section.scss";
import { quotes_data } from "../assets/dummy-data";

export default function QuotesSection() {
  return (
    <div className="quotes__container">
      {quotes_data.map((item) => (
        <ul className="quotes">
          <li>
            <div className="quotes__wrapper">
              <img src={item.img} alt={item.alt} />
              <div>
                <p className="name">{item.name}</p>
                <p className="status">{item.status}</p>
              </div>
            </div>
            <p className="block-quotes">{`"${item.quotes}"`}</p>
          </li>
        </ul>
      ))}
    </div>
  );
}
