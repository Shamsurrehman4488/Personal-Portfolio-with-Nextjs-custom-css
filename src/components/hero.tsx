"use client";
import "../style/hero.css";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import Link from "next/link";
export default function Hero (){
    return(
        <div className="header-container">
            <div className="header-box">
                {/**left div  */}
                <div className="hero-left-div">
 
                <h1 className="title1">I am Shams Ur Rehman <br />
                     </h1>

                     {/**Typewriter Effect */}

                     <h1 className="title2" >
                     <Typewriter
                     options={{
                     strings: [' a Full-Stack Developer', 'a Web Designer '],
                     autoStart: true,
                     loop: true,
                     
                     }}
                     />
                </h1>
                    <p className="para">I T Student || Doing Certified Web Developer, Agentic & Robotic Ai  Engineer from Governor It Initiative Program||</p>
                    
                    <Link href={"https://www.linkedin.com/in/shamsurrehman123/"}><button  className="btn" >HIRE ME</button></Link>
                 </div>
                     {/**right div  */}
                 <div className="hero-right-div">
                 <Image src={"/images/shams.png"} width={200} height={200} className="profile" alt="profile"/>   
                 </div>
        
            </div>
             
        </div>
    )
}