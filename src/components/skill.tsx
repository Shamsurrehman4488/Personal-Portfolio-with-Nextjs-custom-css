import "../style/skill.css";

export default function Skill (){
    return(
      <main className="main">
        <div className="container">
          {/** top div */}
          <div className="top-div">
            <h1 className="title-skill"> Programming Languages</h1>
            <p className="para-skill">
            i have a solid foundation in web development , <b className="ok">specializing</b> in <b>HTML,CSS</b>,and <b>Javascript</b> .My experience extends to using framework like <b>React</b> and <b>next.js</b> to create dynamic and 
            user-friendly applications. I am also proficient in tailwind css for efficient styling and design. with a passion for learning, I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.
            </p>
          </div>

          {/** bottom div */}
          <div className="boxes">

           <div className="small-box"><h2 className="yes-yes">HTML</h2> <h6 className="h6">90%</h6> </div>
           <div className="small-box"><h2 className="yes-yes">CSS</h2> <h6 className="h6">90%</h6></div>
           <div className="small-box"><h2 className="yes-yes">JAVASCRIPT</h2> <h6 className="h6">80%</h6></div>
           <div className="small-box"><h2 className="yes-yes">TYPESCRIPT</h2> <h6 className="h6">80%</h6></div>
           <div className="small-box"><h2 className="yes-yes">NEXT.JS</h2> <h6 className="h6">90%</h6></div>
           <div className="small-box"><h2 className="yes-yes">REACT.JS</h2><h6 className="h6">90%</h6></div>

          </div>

        </div>
      </main> 
    )
}

