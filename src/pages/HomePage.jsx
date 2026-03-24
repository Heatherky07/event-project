import MainLayout from '../Layouts/MainLayout';
import Hero from '../components/Hero';
import Status from '../components/Status';
import Countdown from '../components/Countdown';
const HomePage = () => {
    return <MainLayout> <Hero /> <Countdown /> <Status /> </MainLayout>
};

export default HomePage;