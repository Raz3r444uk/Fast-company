import React, { useState } from "react";
import User from "../components/user";

const Users = (users) => {
  return (
    <>
      <User {...users} />
    </>
  );
};

export default Users;
