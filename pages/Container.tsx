import Nav from '@/Components/Nav';
import Main from '@/Components/Home';
import About from '@/Components/About';
import Services from '@/Components/Services';
import Projects from '@/Components/Projects';

export default function Container(){
    return(
        <div>
            <Nav />
            <Main />
            <About />
            <Services />
            <Projects />
        </div>
    )
}