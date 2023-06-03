import ServicesStyle from '../styles/services.module.scss';
import homeicon from '../public/Images/homeicon.png';
import uicon from '../public/Images/uiicon.png';
import BA from '../public/Images/BA.png';

export default function Services(){
    return(
        <div className={ServicesStyle.main} >
             
             <div className={ServicesStyle.title} id='Services'>
               <p>My <span>Services</span> </p>
               <h1>What I Do</h1>
             </div>

             <div className={ServicesStyle.boxs}>
                <div>
                <img src={homeicon.src} />
                <h2>Front-end Developer</h2>
                <p>Development of custom web pages. using current technologies and libraries of the labor field.</p>
                </div>
                <div>
                <img src={uicon.src} />
                <h2>UI Developer</h2>
                <p>Development of custom web pages. using HTML,CSS,Sass,Js,typescript</p>
                </div>

                <div>
                <img src={BA.src} />
                <h2>Business Analyst</h2>
                <p>Gathering functional and non-functional requermints using BRD and SRS documents With the Desgin of UML diagrams.</p>
                </div>
             </div>


        </div>
    )
}