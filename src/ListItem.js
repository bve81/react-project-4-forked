import React from "react";
import Item from "./Item";

export default function ListItem(props) {
  let items = props.items;
  return (
    <>
      <ul className="ui-list">
        {items.map((item) => (
          <li className="ui-item-list" key={item.id}>
            <Item info={item} />
            <button
              className="item-button"
              onClick={() => props.onsetItems(props.ondeleteButton(item.id))}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
