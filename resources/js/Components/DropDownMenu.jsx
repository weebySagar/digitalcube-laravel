import React, { useEffect } from "react";

export default function DropDownMenu({
    options,
    selectedData,
    setData,
    id,
    post,
    data,
}) {
    const onChange = (e) => {
        setData({ ...data, queryId: id, status: e.target.value });
        // setData({ ...data, status: e.target.value });
    };

    return (
        <select className="border border-gray-200 rounded" onChange={onChange}>
            {options.map((option) => (
                <option
                    className="text-gray-900"
                    selected={selectedData === option}
                    value={option}
                >
                    {option}
                </option>
            ))}
        </select>
    );
}
