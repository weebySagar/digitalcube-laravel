import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Table from "@/Components/Table";

export default function User({ auth, users }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h1 className="font-semibold text-lg text-gray-800 leading-tight">
                    Users
                </h1>
            }
        >
            <div className="py-10 container mx-auto">
                <Table
                    column={["username", "gender", "dob", "created_at"]}
                    data={users}
                />
            </div>
        </AuthenticatedLayout>
    );
}
