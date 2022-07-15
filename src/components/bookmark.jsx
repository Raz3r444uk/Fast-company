import React from "react";

const Bookmark = ({ user, onChange }) => {
  return (
    <>
      <td>
        <button onClick={() => onChange(user._id)}>
          <i className={user.bookmark === false ? "bi bi-bookmark" : "bi bi-bookmark-fill"}></i>
        </button>
      </td>
    </>
  );
};

export default Bookmark;
