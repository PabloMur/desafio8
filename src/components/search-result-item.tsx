import React from "react";

type SearchResultItemProps = {
  image: string;
  price: string;
  title: string;
};

function SearchResultItem(props: SearchResultItemProps) {
  return (
    <div className="search-result-item">
      <img
        src={props.image}
        alt="imagen"
        className="search-result-item__picture"
      />
      <div className="search-result-item__data">
        <h2>{props.title}</h2>
        <h4>{props.price}</h4>
      </div>
    </div>
  );
}

export { SearchResultItem };
