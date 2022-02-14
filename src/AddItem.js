import React from "react";

export default function AddItem(props) {
  console.log(props);
  let name = props.name;
  let val = props.val;
  let desc = props.desc;
  return (
    <form onSubmit={props.onSubmintForm}>
      <div>
        <label htmlFor={name}>Название товара</label>
        <input
          type="text"
          placeholder="Название товара"
          className="ui-textfield"
          id={name}
          value={name}
          onChange={(e) => props.onSetName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor={desc}>Описание товара</label>
        <input
          type="text"
          placeholder="Описание товара"
          className="ui-textfield"
          value={desc}
          onChange={(e) => props.onSetDesc(e.target.value)}
        />
      </div>
      <div className="form-footer">
        <div className="validation">{val}</div>
        <input
          type="submit"
          className="ui-button"
          value="Добавить"
          onClick={props.onCheckValues}
        />
      </div>
    </form>
  );
}
