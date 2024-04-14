import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function EmployeeRegister() {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
        password: "",
        department: "",
        type: "employee",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("employee.register"));
    };

    return (
        <GuestLayout className={"!min-h-max py-10"}>
            <Head title="Register" />
            <p className="text-center text-xl font-bold">Create Employee</p>
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="username" value="Username" />

                    <TextInput
                        id="username"
                        name="username"
                        value={data.username}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("username", e.target.value)}
                        required
                    />

                    <InputError message={errors.username} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="department" value="Department" />

                    <TextInput
                        id="department"
                        type="text"
                        name="department"
                        value={data.department}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("department", e.target.value)}
                        required
                    />

                    <InputError message={errors.department} className="mt-2" />
                </div>

                {/* <TextInput
                    id="type"
                    type="hidden"
                    name="type"
                    value={data.type}
                /> */}

                <div className="flex items-center justify-end mt-4">
                    {/* <p className="flex items-center gap-2">
                        Already registered?
                        <Link
                            href={route("user.login")}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Log in
                        </Link>
                    </p> */}

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
