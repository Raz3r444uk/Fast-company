import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  let arr = [
    " человек тусанет с тобой сегодня",
    " человека тусанет с тобой сегодня",
    " человек тусанет с тобой сегодня",
    "Никто с тобой не тусанет",
  ];

  const usersCount = (count) => {
    if (count == 0) {
      return arr[3];
    }
    if (count == 1 || count > 10) {
      return count + arr[0];
    }
    if (count > 1 && count < 5) {
      return count + arr[1];
    }
    if (count >= 5 && count <= 10) {
      return count + arr[2];
    }
  };

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
      <h2>
        <span className={"badge " + (users.length > 0 ? "bg-primary" : "bg-danger")}>
          {usersCount(users.length)}
        </span>
      </h2>
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
