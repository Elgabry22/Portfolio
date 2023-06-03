import StyleNav from '../styles/nav.module.scss';

import menuimg from '../public/Images/menu (1).png';
import { useRef, useState } from 'react';



export default function Nav(){

    //Define States
    let [btnstate,setbtnstate] = useState(false);

    let navigationref = useRef<HTMLUListElement>(null!);

    let open = () => {
        setbtnstate(btnstate => !btnstate);
    }

    let togglenav = btnstate ? 'navigation' : 'hidden';

     return(
        
        <div className={StyleNav.navbar}>
              
             <p>Mohammd<span> Elgabry </span></p>
                      
             <ul className={StyleNav.ulist}>
                 <li> <a href="#home"> Home </a> </li>
                 <li> <a href="#about"> About </a> </li>
                 <li> <a href="#Services"> Services </a> </li>
                 <li> <a href="#projects"> Projects </a> </li>
                 <li> <a href=""> Contact </a> </li>
             </ul>

             
             <img className={StyleNav.menu} src={menuimg.src} onClick={open}/>

            <ul className={togglenav} ref = {navigationref}>
                <li> <a href="#home"> Home </a> </li>
                <li> <a href="#about"> About </a> </li>
                <li> <a href="#Services"> Services </a> </li>
                <li> <a href="#projects"> Projects </a> </li>
                <li> <a href=""> Contact </a> </li>
            </ul>



        </div>
     )
}