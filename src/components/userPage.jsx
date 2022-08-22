import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import api from "../api";

import QualitiesList from "./qualitiesList";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    if (user) {
        return (
            <>
                <div className="d-flex align-items-center justify-content-center flex-column">
                    <div
                        className="d-flex align-items-center justify-content-center flex-column"
                        key={userId}
                    >
                        <h1>{user.name}</h1>
                        <h3 className="m-1">
                            Профессия: {user.profession.name}
                        </h3>
                        <div className="m-1">
                            Всего встреч: {user.completedMeetings}
                        </div>
                        <div className="m-1">Рейтинг: {user.rate}</div>
                        <div>
                            <QualitiesList
                                qualities={user.qualities}
                            ></QualitiesList>
                        </div>

                        <Link
                            className="list-group-item list-group-item-primary w-20 px-5 p-3 text-center alighn-center fs-5"
                            to="/users"
                        >
                            Все пользователи
                        </Link>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <h1 className="d-flex align-items-center justify-content-center">
                Loading...
            </h1>
        );
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
