import Input from '../components/Form/Input';
import MainLayout from '../Layouts/MainLayout';
import Card from '../components/Card';
import CheckIcon from '../components/Icons/CheckIcon';
import { supabase } from '../utils/supabase';
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import { SessionContext } from '../Contexts/SessionContext';

const SignUp = () => {
  // Access the session context to check if the user is already logged in
  const session = useContext(SessionContext);
  // Redirect to homepage if user is already logged in
  const navigate = useNavigate();

  // If there is a session, navigate to the homepage
  useEffect(() => { }, [session, navigate])
  if (session) {
    navigate("/HomePage");
  }

  // Handle form submission for signing up
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const signupForm = {
      firstname: formData.get("Firstname"),
      lastname: formData.get("Lastname"),
      email: formData.get("Email"),
      password: formData.get("Password"),
    };

    // Call the Supabase sign-up function with the form data
    const { data, error } = await supabase.auth.signUp({
      email: signupForm.email,
      password: signupForm.password,
    });
    if (error) alert(error);
    if (data) console.log(data);

    console.log("signupForm", signupForm);
  }

  // Render the sign-up form inside the main layout
  return (
    <MainLayout>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-95">
          <Card>
            <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <Input
                label="Firstname"
                name="Firstname"
                placeholder="Enter your First Name"
                type="text"
              />
              <Input
                label="Lastname"
                name="Lastname"
                placeholder="Enter your Last Name"
                type="text"
              />
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
                <CheckIcon /> Submit</button>
            </form>
          </Card>
        </div>
      </div>

    </MainLayout>
  );
};

export default SignUp;