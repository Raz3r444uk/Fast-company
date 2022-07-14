import React from "react";
import Qualitie from "../components/qualitie";
import Bookmark from "../components/bookmark";

const User = ({ users, onDelete, status, onChange }) => {
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
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>
                <Qualitie user={user} />
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate} /5</td>
              <td>
                <button onClick={() => onChange(user._id)}>
                  <i className={status === false ? "bi bi-bookmark" : "bi bi-bookmark-fill"}></i>
                </button>
              </td>
              <td>
                <button className="btn btn-danger " onClick={() => onDelete(user._id)}>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default User;
