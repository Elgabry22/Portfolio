import aboutStyle from '../styles/about.module.scss'; 
import myimg from '../public/Images/myimg.jpg';

export default function About(){
    return(
        <div className={aboutStyle.main}>

            <div className={aboutStyle.imgdiv} id='about'>
                <img src={myimg.src} />
            </div>

            <div className={aboutStyle.content}>
               <h6>My <span>Info</span> </h6>
               <h2>About Me</h2>

               <p><span className={aboutStyle.title}> Name:</span> Mohammed Elsayed Elgabry. <br></br>
               <span className={aboutStyle.title}> Number:</span> +201150243139. <br></br>
               <span className={aboutStyle.title}> Age:</span>  22. <br></br>
               <span className={aboutStyle.title}> Adress:</span>  Zahraa Maadi. <br></br>
               <span className={aboutStyle.title}> Unversity:</span>  Helwan. <br></br>
               <span className={aboutStyle.title}> Faculty:</span>  English Commerce and Business Adminstartion. <br></br>
               <span className={aboutStyle.title}> Department:</span>  Business Information System. <br></br>
               <span className={aboutStyle.title}> Degree:</span> Excellent. <br></br>
               <span className={aboutStyle.title}> GBA:</span>  3.58.
                </p>

                <h1>My <span>Skills</span></h1>
                <p className={aboutStyle.skills}>NextJs frameWork,Typescript,ReactJs,<br></br>JavaScript,Sass,BootStrap,HTML,Css.</p>

                <button>Contact Me</button>
            </div>

        </div>
    )
}