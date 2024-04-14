import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth, queries }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h1 className="font-semibold text-lg text-gray-800 leading-tight">
                    Dashboard
                </h1>
            }
        >
            <Head title="Dashboard" />

            <div className="py-10 container mx-auto">
                <h2 className="text-lg">Queries</h2>

                <Table
                    column={[
                        "user",
                        "message",
                        "status",
                        "employee",
                        "created_at",
                    ]}
                    data={queries}
                />
            </div>
        </AuthenticatedLayout>
    );
}
