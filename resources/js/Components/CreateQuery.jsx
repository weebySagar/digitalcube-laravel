import React, { useState } from "react";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
import PrimaryButton from "./PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";

export default function CreateQuery() {
    const { data, setData, post, processing, errors, reset } = useForm({
        message: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("query.store"));
    };
    return (
        <div className="py-10">
            <div className="flex justify-center">
                <div className="query-container w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <p className="text-xl font-bold">Create Query</p>
                    <form onSubmit={submit}>
                        <div className="mt-3">
                            <InputLabel htmlFor="message">Message</InputLabel>
                            <TextInput
                                id="message"
                                value={data.message}
                                name="message"
                                onChange={(e) =>
                                    setData("message", e.target.value)
                                }
                                className="block mt-1 w-full"
                            />
                        </div>

                        <div className="mt-3">
                            <PrimaryButton disabled={processing}>
                                Create Query
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
