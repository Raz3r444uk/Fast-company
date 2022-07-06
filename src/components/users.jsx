import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDeleteElement = (elementId) => {
    setUsers(users.filter((user) => user._id !== elementId));
  };

  const nameSurname = "Имя";
  const quanity = "Качество";
  const proffesiion = "Профессия";
  const totalMeetings = "Встретился, раз";
  const mark = "Оценка";

  /* Render elements */

  return (
    <>
      <h1>
        <span></span>
      </h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">{nameSurname}</th>
            <th scope="col">{quanity}</th>
            <th scope="col">{proffesiion}</th>
            <th scope="col">{totalMeetings}</th>
            <th scope="col">{mark}</th>
            <th scope="col">Удалить</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map((el) => (
                    <span className={"badge m-1 bg-" + el.color} key={el._id}>
                      {el.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate + "/5"}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDeleteElement(user._id)}>
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Users;
