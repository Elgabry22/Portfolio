import HomeStyle from '../styles/main.module.scss';
import myimg from '../public/Images/myimg.jpg';
import linkedinimg from '../public/Images/icons.png';
import faceicon from '../public/Images/faceicon.png';
import github from '../public/Images/github.png';
 

export default function Main(){
    return(
        <div className={HomeStyle.main} id='home'>
            <div className={HomeStyle.content}>
              <h3>Hello, <span>I'm</span></h3>
              <h1>Mohammed Elgabry</h1>
              <h2>Front-end Developer</h2>
              <p>With knowledge in web development and desgin, i offer <br></br>the best projects resulting in quality work.</p>
              
              <button>Let's Talk</button>

              <div className={HomeStyle.logos}>
                <img src={faceicon.src} />
                <img src={github.src} />
                <img src={linkedinimg.src} />
              </div>

            </div>

            <div className={HomeStyle.imgdiv}>
              <img src={myimg.src} />
            </div>
        </div>
    )
}