import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDeleteElement = (id) => {
    setUsers(users.filter((user) => user._id !== id));
  };

  const hanleToggleBookmark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          user.bookmark = !user.bookmark;
          return user;
        }
        return user;
      })
    );
  };

  return (
    <div>
      <SearchStatus length={users.length} />
      <Users users={users} onDelete={handleDeleteElement} onChange={hanleToggleBookmark} />
    </div>
  );
}

export default App;
