import React, { useState } from "react";
import User from "../components/user";

const Users = (users) => {
  console.log(users);
  return (
    <>
      <User {...users} />;
    </>
  );
};

export default Users;
