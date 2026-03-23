import Input from '../components/Form/Input';
import MainLayout from '../Layouts/MainLayout';
import Card from '../components/Card';

const Login = () => {
    return (<MainLayout>
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-95">
                <Card>
                    <h2 className="text-2xl font-bold mb-4">Login</h2>
                    <Input label="Email" type="email" placeholder="Enter your email" />
                    <Input label="Password" type="password" placeholder="Enter your password" />
                </Card>
            </div>
        </div>
    </MainLayout>
    )
}

export default Login