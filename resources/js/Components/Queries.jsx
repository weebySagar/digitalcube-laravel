import React from "react";
import Table from "./Table";

export default function Queries({ queries }) {
    return (
        <div className="container mx-auto py-10">
            {/* <div className="rounded-lg overflow-hidden border border-gray-300 mt-6">
                <table className="min-w-full border-collapse ">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="pl-6 pr-3 py-3.5 text-left text-sm font-semibold">
                                Message
                            </th>
                            <th className="pl-6 pr-3 py-3.5 text-left text-sm font-semibold">
                                Status
                            </th>
                            <th className="pl-6 pr-3 py-3.5 text-left text-sm font-semibold">
                                Created At
                            </th>
                        </tr>
                    </thead>

                    <tbody className=" bg-white">
                        {queries.map((query) => (
                            <tr className="border border-t border-b border-gray-300">
                                <td className="text-sm pl-6 py-4 pr-3 text-gray-900 whitespace-nowrap">
                                    {query.message}
                                </td>
                                <td
                                    className={`text-sm pl-6 py-4 pr-3 text-gray-900 whitespace-nowrap 
                                capitalize ${
                                    query.status === "pending"
                                        ? "text-red-400"
                                        : query.status === "progress"
                                        ? "text-yellow-400"
                                        : "text-green-400"
                                }`}
                                >
                                    {query.status}
                                </td>
                                <td className="text-sm pl-6 py-4 pr-3 text-gray-900 whitespace-nowrap">
                                    {query.created_at.split("T")[0]}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}
            {queries.length > 0 && (
                <>
                    <h2 className="text-2xl font-bold">Queries</h2>

                    <Table
                        column={["message", "status", "created_at"]}
                        data={queries}
                    />
                </>
            )}
        </div>
    );
}
