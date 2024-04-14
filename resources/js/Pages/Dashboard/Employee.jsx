import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import EmployeeRegister from "../Auth/EmployeeRegister";
import Table from "@/Components/Table";

export default function Employee({ auth, employees }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h1 className="font-semibold text-lg text-gray-800 leading-tight">
                    Employees
                </h1>
            }
        >
            <div className="container mx-auto py-10">
                <EmployeeRegister />
                <h2 className="font-bold">Employees Table</h2>
                <Table
                    column={["username", "department", "created_at"]}
                    data={employees}
                />
            </div>
        </AuthenticatedLayout>
    );
}
