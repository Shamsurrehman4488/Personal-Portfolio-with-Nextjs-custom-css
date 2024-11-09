"use client";
import "../style/about.css";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

export default function About (){
    return(
        <div className="header1">
            <div className="header2">
                {/**left div  */}
                <div className="hero1">
 
                <h1 className="h-1">About us </h1>

                 
                    <p className="para1"> I am a student at GIAIC,pursuing a course in Artificial Intelligence,Web 3.0 & Metaverse.
                    Passionate about technology and constantly learning new skills to stay up-to-date with the latest innovations.</p>
                    
                 </div>
                     {/**right div  */}
                 <div className="hero2">
                 <Image src={"/images/shams.png"} width={200} height={200} className="profile1" alt="profile"/>   
                 <div className="icon">
                 <Link href={"https://www.facebook.com/profile.php?id=100081084192923&mibextid=ZbWKwL"}><FaFacebook  className="facebook" /></Link>
                 <Link href={"https://www.youtube.com/@CodinginUrdu"}><FaYoutube className="youtube" /></Link>
                 <Link href={"https://www.linkedin.com/in/shamsurrehman123/"}><FaLinkedin className="linkden" /></Link>
                 </div>
                 </div>
                 
                 
            </div>
             
        </div>
    )
}