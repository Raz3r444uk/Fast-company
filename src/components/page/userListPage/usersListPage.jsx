import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { paginate } from "../../../utils/paginate";
import Pagination from "../../common/pagination";
import api from "../../../api";
import GroupList from "../../common/groupList";
import SearchStatus from "../../ui/searchStatus";
import UserTable from "../../ui/usersTable";
import TextField from "../../common/form/textField";
import _ from "lodash";

const UsersListPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });
    const [users, setUsers] = useState();
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
        api.professions.fetchAll().then((data) => setProfession(data));
    }, []);

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };
    const pageSize = 6;

    // useEffect(() => {
    //     api.professions.fetchAll().then((data) => setProfession(data));
    // }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf, searchName]);

    const handleProfessionSelect = (item) => {
        setSearchName("");
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleSort = (items) => {
        setSortBy(items);
    };

    if (users) {
        let filteredUsers = "";
        const searchRegExp = new RegExp(searchName, "g");

        if (searchName) {
            filteredUsers = users.filter((user) =>
                searchRegExp.test(user.name)
            );
        } else {
            filteredUsers = selectedProf
                ? users.filter(
                    (user) =>
                        JSON.stringify(user.profession) ===
                        JSON.stringify(selectedProf)
                )
                : users;
        }

        const count = filteredUsers.length;
        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        );
        const usersCrop = paginate(sortedUsers, currentPage, pageSize);

        const clearFilter = () => {
            setSelectedProf();
        };

        const handleSearch = (e) => {
            clearFilter();
            setSearchName(e.target.value);
        };

        return (
            <div className="d-flex justify-content-center m-5">
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                            Очистить
                        </button>
                    </div>
                )}

                <div className="d-flex flex-column">
                    <SearchStatus length={count} />
                    <TextField
                        placeholder="Search..."
                        name="search"
                        id="search"
                        onChange={handleSearch}
                        value={searchName}
                    />
                    {count > 0 && (
                        <UserTable
                            users={usersCrop}
                            onSort={handleSort}
                            onDelete={handleDelete}
                            onToggleBookMark={handleToggleBookMark}
                            selectedSort={sortBy}
                        />
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <h1 className="d-flex align-items-center justify-content-center">
                Loading...
            </h1>
        );
    }
};

UsersListPage.propTypes = {
    users: PropTypes.array
};

export default UsersListPage;
