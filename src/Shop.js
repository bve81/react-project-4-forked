import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddItem from "./AddItem.js";
import ListItem from "./ListItem.js";

export default function Shop() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [items, setItems] = useState(()=> {
    const value = localStorage.getItem("items")
    if (!value) {
      return [];
    }
    return JSON.parse(value);
  
  });
  const [val, setVal] = useState("");

  useEffect(()=> {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items]);

  function checkValues() {
    if (name === "") {
      setVal("Введите название товара");
    } else {
      if (desc === "") {
        setVal("Введите описание товара");
      } else {
        setVal("");
        setItems((prev) => [...prev, { id: uuidv4(), name, desc }]);
      }
    }
  }

  function handleDeleteButton(props) {
    let ids = props;
    let arr = items.filter((el) => el.id !== ids);
    return arr;
  }

  function handleOnSubmintForm(e) {
    setName("");
    setDesc("");
    e.preventDefault();
  }

  return (
    //
    <>
      <AddItem
        name={name}
        desc={desc}
        val={val}
        onSubmintForm={handleOnSubmintForm}
        onSetDesc={setDesc}
        onSetName={setName}
        onCheckValues={checkValues}
      />
      {items.length ? (
        <div />
      ) : (
        <div>
          <p className="ui-title">Добавьте первый товар</p>
        </div>
      )}
      <ListItem
        items={items}
        onsetItems={setItems}
        ondeleteButton={handleDeleteButton}
      />
    </>
  );
}
