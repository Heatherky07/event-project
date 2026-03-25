import MainLayout from "../Layouts/MainLayout"
import { useContext, useEffect } from "react";
import { SessionContext } from "../Contexts/SessionContext";
import { supabase } from "../utils/supabase";
import { Link } from "react-router";
import Card from "../components/Card";
import Input from "../components/Form/Input";
import CheckIcon from "../components/Icons/CheckIcon";
import { useNavigate } from "react-router";



const Edit = () => {
    const { session, profile, setProfile } = useContext(SessionContext);
    const Navigate = useNavigate();

    useEffect(() => { }, [session, navigate])
    if (session) {
        navigate("/Profile");
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const signupForm = {
            firstname: formData.get("firstname"),
            lastname: formData.get("lastname"),
            email: formData.get("email"),
            password: formData.get("password"),
        };

        const { data: profileData, error: profileError } = await supabase
            .from("profiles")
            .update({
                firstname: signupForm.firstname,
                lastname: signupForm.lastname,
                email: signupForm.email,
            })
            .eq("id", session.user.id)
            .select()
            .single();

        if (profileError) alert(profileError);
        if (profileData) {
            navigate("/profile");
            setProfile(profileData);
        }
    };
    console.log("profile test", profile);

    return (
        <MainLayout>
            <div className="min-h-screen flex flex-col">
                <div className="flex justify-center items-center flex-1">
                    <Card>
                        <h1 className="text-xl font-bold">Edit Profile</h1>
                        <form onSubmit={handleSubmit}>
                            <Input
                                name="firstname"
                                placeholder="Enter your First Name"
                                label="Firstname"
                                type="text"
                                defaultValue={profile?.firstname}
                            />
                            <Input
                                name="lastname"
                                placeholder="Enter your Last Name"
                                label="Lastname"
                                type="text"
                                defaultValue={profile?.lastname}
                            />
                            <Input
                                name="email"
                                placeholder="Enter your Email"
                                label="Email"
                                type="email"
                                defaultValue={profile?.email}
                            />
                            <button className="btn btn-primary rounded-full mt-5">
                                <CheckIcon className="text-sm" />
                                Submit
                            </button>
                        </form>
                    </Card>
                </div>
            </div>
        </MainLayout>

    );
};

export default Edit;