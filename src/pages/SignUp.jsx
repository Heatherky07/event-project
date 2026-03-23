import Input from '../components/Form/Input';
import MainLayout from '../Layouts/MainLayout';
import Card from '../components/Card';
import CheckIcon from '../components/Icons/CheckIcon';
import { supabase } from '../utils/supabase';

const SignUp = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const signupForm = {
      firstname: formData.get("Firstname"),
      lastname: formData.get("Lastname"),
      email: formData.get("Email"),
      password: formData.get("Password"),
    };

    const { data, error } = await supabase.auth.SignUp({
      email: signupForm.email,
      password: signupForm.password,
    });
    if (error) alert(error);
    if (data) console.log(data);

    console.log("signupForm", signupForm);
  }
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