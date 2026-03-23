import Input from '../components/Form/Input';
import MainLayout from '../Layouts/MainLayout';
import Card from '../components/Card';

const Login = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const LoginForm = {
            email: formData.get("Email"),
            password: formData.get("Password"),
        };
        const { data, error } = await supabase.auth.signInWithPassword({
            email: LoginForm.email,
            password: LoginForm.password,
        });
        if (error) alert(error);
        if (data) console.log(data);

        console.log("LoginForm", LoginForm);
    }

    return (<MainLayout>
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-95">
                <Card>
                    <h2 className="text-2xl font-bold mb-4">Login</h2>
                    <Input label="Email" type="email" placeholder="Enter your email" />
                    <Input label="Password" type="password" placeholder="Enter your password" />
                    <button className="btn btn-primary mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5">Login</button>


                </Card>
            </div>
        </div>
    </MainLayout>
    )
}

export default Login