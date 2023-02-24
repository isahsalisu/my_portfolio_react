
import MyImage from "../assets/images/salis2.jpg"

function Landing (props){
    return (

       
         
         <header className="masthead">
             <div className="container h-100">
                 <div className="row about h-100">
                     <div className="col-lg-7 my-auto">
                         <div className="header-content mx-auto">
                             <h1 className="mb-5">I am a Front-End Developer creating world class websites </h1>
                             <a href="#about" className="btn btn-outline btn-xl js-scroll-trigger">More about me!</a>
                         </div>
                     </div>
                     <div className="col-lg-5 my-auto">
                         <div className="device-container">
                             <img src={MyImage} className="img-fluid" alt="Salisu" />
                         </div>
                     </div>
                 </div>
             </div>
         </header>
    )
}
export default Landing;


