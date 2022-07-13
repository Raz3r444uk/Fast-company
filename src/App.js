import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDeleteElement = (id) => {
    setUsers(users.filter((user) => user._id !== id));
  };

  const handleChangeStatus = (id) => {
    console.log(123);
  };

  return (
    <div>
      <SearchStatus length={users.length} />
      <Users
        users={users}
        onDelete={handleDeleteElement}
        status={false}
        onChange={handleChangeStatus}
      />
    </div>
  );
}

export default App;
