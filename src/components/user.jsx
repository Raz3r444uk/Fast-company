import React, { useState } from "react";
import Qualitie from "../components/qualitie";
import Bookmark from "../components/bookmark";

const User = (users) => {
  const nameSurname = "Имя";
  const quanity = "Качество";
  const proffesiion = "Профессия";
  const totalMeetings = "Встретился, раз";
  const elected = "Избранное";
  const mark = "Оценка";

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">{nameSurname}</th>
            <th scope="col">{quanity}</th>
            <th scope="col">{proffesiion}</th>
            <th scope="col">{totalMeetings}</th>
            <th scope="col">{mark}</th>
            <th scope="col">{elected}</th>
            <th scope="col">Удалить</th>
          </tr>
        </thead>
        <tbody>
          <tr key={users[0]._id}>
            <td>{users[0].name}</td>
            <td>
              {users[0].qualities.map((el) => (
                <span className={"badge m-1 bg-" + el.color} key={el._id}>
                  {el.name}
                </span>
              ))}
            </td>
            <td>{users[0].profession.name}</td>
            <td>{users[0].completedMeetings}</td>
            <td>{users[0].rate + "/5"}</td>
            <td>
              <button
                className="btn btn-danger" /* onClick={() => handleDeleteElement(user._id)} */
              >
                delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default User;
