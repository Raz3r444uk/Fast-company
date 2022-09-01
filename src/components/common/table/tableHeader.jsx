import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
            caretToggle();
        } else {
            onSort({ path: item, order: "asc" });
        }
    };

    const caretToggle = (item) => {
        if (selectedSort.path === item) {
            return (
                <i
                    className={
                        selectedSort.order === "asc"
                            ? "bi bi-caret-down-fill"
                            : "bi bi-caret-up-fill"
                    }
                ></i>
            );
        } else {
            return null;
        }
    };

    return (
        <thead>
            <tr>
                {Object.keys(columns).map((colum) => (
                    <th
                        key={colum}
                        onClick={
                            columns[colum].path
                                ? () => handleSort(columns[colum].path)
                                : undefined
                        }
                        {...{ role: columns[colum].path && "button" }}
                        scope="col"
                    >
                        {columns[colum].name}
                        {caretToggle(columns[colum].path)}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableHeader;
