import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  let contOfPeople = api.users.fetchAll().length;
  const [count, setCounter] = useState(contOfPeople);

  const words = [
    "человек тусанет с тобой сегодня!",
    "человека тусанут с тобой сегодня!",
    "Никто с тобой не тусанет!",
  ];

  let colorOfTitle = "badge fs-6 ";
  colorOfTitle += count <= 0 ? "bg-danger" : "bg-primary";

  const titleDynamics = () => {
    let newCount = Math.abs(count) % 100;
    let num = count % 10;
    if (newCount >= 10 && newCount <= 20) return `${count} ${words[0]}`;
    if (num > 1 && num < 5) return `${count} ${words[1]}`;
    if (num === 1) return `${count} ${words[0]}`;
    if (num === 0 || num < 0) return words[2];
    return `${count} ${words[0]}`;
  };

  const nameSurname = "Имя";
  const quanity = "Качество";
  const proffesiion = "Профессия";
  const totalMeetings = "Встретился, раз";
  const mark = "Оценка";

  const hanldeDelete = () => {
    setCounter(count - 1);
  };

  /* Render elements */

  const tHead = (
    <thead>
      {
        <tr>
          <th scope="col">{nameSurname}</th>
          <th scope="col">{quanity}</th>
          <th scope="col">{proffesiion}</th>
          <th scope="col">{totalMeetings}</th>
          <th scope="col">{mark}</th>
          <th scope="col"></th>
        </tr>
      }
    </thead>
  );

  const element = (
    <tr>
      <th scope="row">{api.users.fetchAll()[0].name}</th>
      <td>{}</td>
      <td>{api.users.fetchAll()[0].profession.name}</td>
      <td>{api.users.fetchAll()[0].completedMeetings}</td>
      <td>{api.users.fetchAll()[0].rate + "/5"}</td>
      <td>
        <button className="btn btn-danger" onClick={hanldeDelete}>
          Delete
        </button>
      </td>
    </tr>
  );

  return (
    <>
      <h1 className={colorOfTitle}>{titleDynamics(words)}</h1>
      <table className="table">
        {tHead}
        <tbody>
          {element}
          {element}
          {element}
          {element}
          {element}
          {element}
          {element}
        </tbody>
      </table>
    </>
  );
};

export default Users;
