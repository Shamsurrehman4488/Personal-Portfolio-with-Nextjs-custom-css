import "../style/header.css";
import Link from "next/link";
import Image from "next/image";
 
export default function Header (){
    return(
        <div className="header">
            {/**left div  */}
            <div className="logo">
                <div>
                <Image src={"/images/shams7.png"} alt="shams" width={50} height={50}></Image>
                </div> 
                </div>
            {/**right div  */}
            <div className="header-right-div">
             <ul className="header-links">
                <li>
                    <Link className="nav-links" href={"/"}>Home</Link>
                    
                </li>
                <li>
                    <Link className="nav-links" href={"/about"}>About</Link>
                    
                </li>
                
                <li>
                    <Link className="nav-links" href={"/contact"}>Contact</Link>
                    
                </li>
                
             </ul>
            </div>
        </div>
    )
}