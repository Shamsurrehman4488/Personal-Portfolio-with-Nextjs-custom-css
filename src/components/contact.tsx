import "../style/contact.css";

 


export default function ContactPage(){
    return(
        <main className="contact-main">
             <div className="form">
                <h1 className="hdr">Contact us</h1>
                <form action="" className="form1">
                    <input type="text" placeholder="Enter your name" />
                    <input type="email" placeholder="abc@gmail.com" />
                    <input className="msg" type="text" placeholder="Your message" />
                   
                </form>
                <button className="btn-form">Submit</button>
                <div className="Email-Phone">
                    <label className="color" htmlFor="Email"> Email : Shamsblogger4488@gmail.com</label><br />
                    <label className="color" htmlFor="Phone"> Phone : (+92) 3489542401</label>
                   
                </div>
             </div>
        </main>
    )
}