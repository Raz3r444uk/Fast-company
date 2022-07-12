import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDeleteElement = (elementId) => {
    setUsers(users.filter((user) => user._id !== elementId));
  };

  return (
    <div>
      <SearchStatus {...users} />
      <Users {...users} />;
    </div>
  );
}

export default App;
