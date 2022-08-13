import React from "react";
import UserPage from "../components/userPage";
import UsersList from "../components/usersList";
import { useParams } from "react-router-dom";

const Users = () => {
    const params = useParams();
    const { id } = params;
    return <>{id ? <UserPage userId={id} /> : <UsersList />}</>;
};

export default Users;
