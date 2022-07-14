import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDeleteElement = (id) => {
    setUsers(users.filter((user) => user._id !== id));
  };

  const hanleToggleBookmar = (id) => {};

  return (
    <div>
      <SearchStatus length={users.length} />
      <Users
        users={users}
        status={false}
        onDelete={handleDeleteElement}
        onChange={hanleToggleBookmar}
      />
    </div>
  );
}

export default App;
