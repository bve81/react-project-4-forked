import React, { useState, useEffect } from "react";

export default function Item(props) {

  const { info } = props;
  const storageName=info.name;
  const [total, setTotal] = useState(()=>{
    const value = localStorage.getItem(storageName);
    if (!value) {
      return 0;
    }
    return Number.parseInt(value, 10);
  });
useEffect(() =>{
  localStorage.setItem(storageName, total);
}, [total]);

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="item">
      <div className="item-info">
        <h2 className="item-title">{info.name}</h2>
        <p className="item-desc">{info.desc}</p>
      </div>
      <div className="item-quantity">
        <button
          className="item-button"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="item-total">{total ? total : ""}</h3>
        <button className="item-button" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
