import Input from '../components/Form/Input';
import MainLayout from '../Layouts/MainLayout';
const SignUp = () => {
 return (
    <MainLayout>
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
    </MainLayout>
  );
};

export default SignUp;