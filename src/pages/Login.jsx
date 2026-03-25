import Input from '../components/Form/Input';
import MainLayout from '../Layouts/MainLayout';
import Card from '../components/Card';
import { supabase } from '../utils/supabase';
import { useContext, useEffect } from 'react';
import { SessionContext } from '../Contexts/SessionContext';
import { useNavigate } from 'react-router';

const Login = () => {
    // Access the session context to check if the user is already logged in
    const { session, profile } = useContext(SessionContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (profile?.role === "user") {
            navigate("/HomePage");
        }
        else if (profile?.role === "admin") {
            navigate("/manage-events");
        }
    },

        [profile, navigate])

    // Handle form submission for logging in
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const loginForm = {
            email: formData.get("Email"),
            password: formData.get("Password"),
        };

        // Call the Supabase sign-in function with the form data
        const { data, error } = await supabase.auth.signInWithPassword({
            email: loginForm.email,
            password: loginForm.password,
        });
        if (error) alert(error);
        if (data) console.log(data);

        console.log("loginForm", loginForm);
    }

    // Render the login form inside the main layout
    return (<MainLayout>
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-95">
                <Card>
                    <h1 className="text-2xl font-bold mb-4">Login</h1>
                    <form onSubmit={handleSubmit}>

                        <Input
                            label="Email"
                            name="Email"
                            placeholder="Enter your Email"
                            type="Email"
                        />
                        <Input
                            label="Password"
                            name="Password"
                            placeholder="Enter your Password"
                            type="Password"
                        />
                        <button className="btn btn-primary mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5">
                            Submit</button>
                    </form>
                </Card>
            </div>
        </div>

    </MainLayout>
    )
}

export default Login