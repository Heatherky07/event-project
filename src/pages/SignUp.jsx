import Input from '../components/Form/Input';
import MainLayout from '../Layouts/MainLayout';
import Card from '../components/Card';
import CheckIcon from '../components/Icons/CheckIcon';
const SignUp = () => {
 return (
    <MainLayout>
      <div className="flex justify-center items-center min-h-screen">
      <div className="w-95">
      <Card>
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      
      <Input 
      label="Firstname" 
       name="Firstname" 
      placeholder="Enter your First Name"
      type= "text" 
      />
       <Input 
      label="Lastname" 
       name="Lasttname" 
      placeholder="Enter your Last Name" 
      type= "text" 
      />
       <Input 
      label="Email" 
       name="Email" 
      placeholder="Enter your Email" 
      type= "email" 
      />
       <Input 
      label="Password" 
       name="Password" 
      placeholder="Enter your Password" 
      type= "password" 
      />
      <button className="btn btn-primary mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5">
       <CheckIcon /> Submit</button>
      
      </Card>
      </div>
      </div>
      
    </MainLayout>
  );
};

export default SignUp;