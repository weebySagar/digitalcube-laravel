import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Table from "@/Components/Table";
import { Head, Link, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Dashboard({ auth, queries }) {
    const { data, setData, processing, reset, post } = useForm({
        queryId: "",
        status: "",
        _method: "PUT",
        user: auth.user.id,
    });

    const handleClick = () => {
        post(route("query.update", data.queryId));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h1 className="font-semibold text-lg text-gray-800 leading-tight">
                    Dashboard
                </h1>
            }
        >
            <div className="container py-10 mx-auto">
                <div className="flex justify-between">
                    <h2>Queries</h2>
                    <PrimaryButton
                        disabled={!data.queryId && !data.status}
                        onClick={handleClick}
                    >
                        Update
                    </PrimaryButton>
                </div>

                <Table
                    column={["user", "message", "status", "created_at"]}
                    data={queries}
                    isEdit={true}
                    setData={setData}
                    // post={post}
                    formData={data}
                />
            </div>
        </AuthenticatedLayout>
    );
}
