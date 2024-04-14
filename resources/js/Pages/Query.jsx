import CreateQuery from "@/Components/CreateQuery";
import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Queries from "@/Components/Queries";

export default function Query({ auth, queries }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            {/* <Head title="Dashboard" /> */}
            <CreateQuery />

            <Queries queries={queries} />
        </AuthenticatedLayout>
    );
}
