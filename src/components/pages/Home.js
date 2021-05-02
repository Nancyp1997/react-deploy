//import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards'
import Footer from '../Footer';
import Skills from '../Skills';
import Experience from '../Experience';


function Home() {
    return (
        <>
            <HeroSection />
            <Experience />
            <Cards />
            <Skills />
            <Footer />
        </>
    );
}

export default Home;