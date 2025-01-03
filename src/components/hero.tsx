"use client";
import "../style/hero.css";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export default function Hero (){
    
    return(
        <div className="header-container">
            
            <div className="header-box">
                 {/**right div  */}
                 <div className="hero-right-div">
                 <Image src={"/images/shams.png"} width={300} height={300} className="profile" alt="profile"/>   
                 </div>
        
                {/**left div  */}
                <div className="hero-left-div">
 
                <h1 className="title1"> Hi, It&apos;s <a className="title3">Shams Ur Rehman</a>  <br />
                     </h1>

                     {/**Typewriter Effect */}

                     <h1 className="title2"  >
                      <h3 className="h3"> I&apos;m a</h3> 
                     <Typewriter 
                     options={{
                     strings: [  ' Front-end Developer', 'Web Designer ','Typescript Developer','Javascript Developer'],
                     autoStart: true,
                     loop: true,
                     
                     }}
                     />
                </h1>
                    <p className="para">Hi, My name is Shams, and I am a hardworking and passionate individual on the path to becoming a web developer. I have always been interested in technology and creativity, which is why I am excited about building a career in web development. I believe in continuous learning and am always ready to embrace new challenges that help me grow both personally and professionally. Besides coding, I enjoy exploring new technologies, solving problems, and working on projects that highlight my creativity. </p>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/shamsurrehman123/" className="social-icons"><FaLinkedin /></a>
                        <a href="https://github.com/Shamsurrehman4488" className="social-icons"><FaGithub /></a>
                        <a href="https://www.facebook.com/profile.php?id=100081084192923" className="social-icons"><FaFacebook /></a>
                        <a href="https://www.youtube.com/@Shamsi-vlog" className="social-icons"><FaYoutube /></a>
                
                    </div>
                    
                    <Link href={"https://www.linkedin.com/in/shamsurrehman123/"}><button  className="btn" >HIRE ME</button></Link>
                 </div>
                    
            </div>
             
        </div>
    )
}