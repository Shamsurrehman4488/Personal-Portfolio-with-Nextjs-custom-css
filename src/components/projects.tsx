import "../style/projects.css";
import Image from "next/image";

export default function Projects (){
    return(
        <div className="main-div">
            <div className="box1">
                <h1 className="title">My Projects</h1>
                <p className="para2">Building this project was a journey filled with learning, patience, and a few debugging challenges that taught me the importance of perseverance in coding. </p>
            </div>

            <div className="box2">

              <div className="name1">
                <h1 className="a1">Facebook login form</h1>
                <h1 className="a2">Food Website</h1>
                <h1 className="a3">Atrective Login form</h1>
              </div>

            <div className="div-1">
             <Image className="image"src={"/images/shams1.png"} alt="shams" width={200} height={150}></Image>
             <Image className="image"src={"/images/shams3.png"} alt="shams" width={200} height={150}></Image>
             <Image className="image"src={"/images/shams2.png"} alt="shams" width={200} height={150}></Image>
          </div>
          <div className="name2">
                <h1 className="a4">Solar System</h1>
                <h1 className="a5">Resume Builder</h1>
                <h1 className="a6">Facebook Login form</h1>
              </div>
           <div className="div-2">
             <Image className="image"src={"/images/shams4.png"} alt="shams" width={200} height={150}></Image>
             <Image className="image"src={"/images/shams5.png"} alt="shams" width={200} height={150}></Image>
             <Image className="image"src={"/images/shams1.png"} alt="shams" width={200} height={150}></Image>
           </div>

            </div>
          

        </div>
    )
}