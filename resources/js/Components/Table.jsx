import React from "react";
import DropDownMenu from "./DropDownMenu";

const Table = ({ column, data, isEdit = false, setData, post, formData }) => {
    const status = ["pending", "in progress", "success"];
    return (
        <div className="rounded-lg overflow-hidden border border-gray-300 mt-6">
            <table className="min-w-full border-collapse ">
                <thead className="bg-gray-50">
                    <tr>
                        {}
                        {column?.map((data) => (
                            <th
                                className="pl-6 pr-3 py-3.5 text-left text-sm font-semibold capitalize"
                                key={data}
                            >
                                {data == "created_at"
                                    ? "created at"
                                    : data === "dob"
                                    ? "date of birth"
                                    : data}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody className=" bg-white">
                    {data?.map((row) => (
                        <tr
                            key={row.id}
                            className="border border-t border-b border-gray-300"
                        >
                            {column.map((col) => (
                                <td
                                    className={`text-sm pl-6 py-4 pr-3 text-gray-900 whitespace-nowrap ${
                                        col === "status" &&
                                        (row[col] === "pending"
                                            ? "text-red-500"
                                            : row[col] === "in progress"
                                            ? "text-yellow-500"
                                            : "text-green-500")
                                    }`}
                                    key={col}
                                >
                                    {col === "created_at" ? (
                                        row[col].split("T")[0]
                                    ) : col === "dob" ? (
                                        row[col].split(" ")[0]
                                    ) : col === "user" ? (
                                        row["user"].username
                                    ) : col === "employee" ? (
                                        row["employee"].username
                                    ) : col === "status" && isEdit ? (
                                        <DropDownMenu
                                            options={status}
                                            selectedData={row[col]}
                                            setData={setData}
                                            id={row.id}
                                            post={post}
                                            data={formData}
                                        />
                                    ) : (
                                        row[col]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
