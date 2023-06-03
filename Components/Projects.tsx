import ProjectStyle from '../styles/project.module.scss';
import pc1 from '../public/Images/pc1.jpg';
import pc2 from '../public/Images/pc2.jpg';
import pc3 from '../public/Images/pc3.jpg';
import pc4 from '../public/Images/pc4.jpg';
import pc5 from '../public/Images/pc5.jpg';
import pc6 from '../public/Images/pc6.jpg';

export default function Projects(){
    return(
        <div className={ProjectStyle.main} id='projects'>
             
             <div className={ProjectStyle.title} id='Services'>
               <p>My <span>Jobs</span> </p>
               <h1>Recent projects</h1>
             </div>

             <div className={ProjectStyle.boxs}>
               <a href='https://elgabry22.github.io/Restaurant-singup-login-home/'>
                <img src={pc1.src} className={ProjectStyle.imgs} />
                <h5>web</h5>
                <h2>Restaurant app</h2>
               </a>
               
               <a href='https://elgabry22.github.io/Clock-app/'>
                <img src={pc2.src} className={ProjectStyle.imgs} />
                <h5>web</h5>
                <h2>Digital Clock </h2>
               </a>

               <a href='https://elgabry22.github.io/XO-GAME/'>
                <img src={pc6.src} className={ProjectStyle.imgs} />
                <h5>web</h5>
                <h2>Tic Tac Game</h2>
               </a>

               <a href='https://elgabry22.github.io/weather-app/'>
                <img src={pc3.src} className={ProjectStyle.imgs} />
                <h5>web</h5>
                <h2>Weather App</h2>
               </a>

               <a>
                <img src={pc4.src} className={ProjectStyle.imgs} />
                <h5>web</h5>
                <h2>Todo list App</h2>
               </a>

               <a href='https://elgabry22.github.io/Calculator/'>
                <img src={pc5.src} className={ProjectStyle.imgs} />
                <h5>web</h5>
                <h2>Simple Calculator</h2>
               </a>

               
             </div>

            
        </div>
    )
}