import React from "react";
import MainLayout from "../Layouts/MainLayout";
import Input from "../components/Form/Input";

const AddEvent = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
        // Handle form submission logic here
    };

    return (
        <MainLayout>
            <div className="pt-5">
                <form onSubmit={handleSubmit}>
                    <div className="flex">
                        <div className="w-1/3">
                            {/* title, start date, end date, start time, end time, location */}
                            <Input
                                type="text"
                                label="Title"
                                placeholder="Enter Title"
                                name="title"
                            />
                            <Input
                                type="date"
                                label="Start Date"
                                placeholder="Select Start Date"
                                name="start_date"
                            />
                            <Input
                                type="date"
                                label="End Date"
                                placeholder="Select End Date"
                                name="end_date"
                            />
                            <Input
                                type="time"
                                label="Start Time"
                                placeholder="Select Start Time"
                                name="start_time"
                            />
                            <Input
                                type="time"
                                label="End Time"
                                placeholder="Select End Time"
                                name="end_time"
                            />
                            <Input
                                type="text"
                                label="Location"
                                placeholder="Enter Location"
                                name="location"
                            />
                        </div>
                        <div className="flex-1">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Description</legend>
                                <textarea
                                    className="textarea h-full w-full"
                                    placeholder="Bio"
                                    rows={20}
                                    name="description"
                                ></textarea>
                            </fieldset>
                        </div>
                    </div>
                    <button className="btn btn-primary mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5">
                        Save Event</button>
                </form>
            </div>
        </MainLayout>
    );
};

export default AddEvent;