import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function UserRegister() {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
        password: "",
        gender: "",
        dob: "",
        type: "user",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("user.register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <p className="text-center text-xl font-bold">Create an account</p>
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
                    <InputLabel htmlFor="gender" value="Gender" />

                    <TextInput
                        id="gender"
                        type="text"
                        name="gender"
                        value={data.gender}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("gender", e.target.value)}
                        required
                    />

                    <InputError message={errors.gender} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="dob" value="Date of Birth" />

                    <TextInput
                        id="dob"
                        type="date"
                        name="dob"
                        value={data.dob}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("dob", e.target.value)}
                        required
                    />

                    <InputError message={errors.dob} className="mt-2" />
                </div>

                <TextInput
                    id="type"
                    type="hidden"
                    name="type"
                    value={data.type}
                />

                <div className="flex items-center justify-between mt-4">
                    <p className="flex items-center gap-2">
                        Already registered?
                        <Link
                            href={route("user.login")}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Log in
                        </Link>
                    </p>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
