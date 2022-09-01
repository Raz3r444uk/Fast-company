import React from "react";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/userListPage";
import { useParams } from "react-router-dom";

const Users = () => {
    const params = useParams();
    const { id } = params;
    return <>{id ? <UserPage userId={id} /> : <UsersListPage />}</>;
};

export default Users;
