import "./App.css";
import Button from "./components/Button";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Vector from  "./assets/Vector.png"
import Message from './assets/Message.png'
import Girl from './assets/girl.svg'
import { useState , useRef} from "react";
function App() {

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [text, settext] = useState("")

  const [show, setshow] = useState(false)
const onSubmit = (event) => {

  event.preventDefault();

  setname(event.target[0].value)
  setemail(event.target[1].value)
  settext(event.target[2].value)
  setshow(true)
}
console.log("working")


  
  return (
    <>
      <Navbar />
      <Contact />

<br />
<br />
      <div className="Contact">
        <div className="btn">

          <div className="btn-top">

               <Button  text="VIA SUPPORT CHAT" icon={Vector}/>
    <Button  text="VIA CALL" icon={Message}/>
          </div>
          <div className="lbtn">
             <Button  text="VIA EMAIL FORM" icon={Message}  />
          </div>
          {/* //form */}
          <form onSubmit={onSubmit}>
            <div className="kmkj">
               <label htmlFor="Name">Name</label>
            <input type="text" name="Name" />
            </div>
            <div className="kmkj">
               <label htmlFor="Email">Email</label>
            <input type="text" name="Email" />
            </div>
            <div className="kmkj">
               <label htmlFor="Text">Text</label>
            <textarea type="text" name="Text" rows={5}/>
            </div>
            <br />
           <div className="submit">
            <Button text="Submit" />
           </div>
         
           {show?           <div className="show" style={{display:"flex", flexDirection:"column"}}>
  Name={name};
  Email={email};
  Text={text};
</div>:"submit to get your details below:"}

     </form>   </div> 
        <div className="img-girl" style={{marginLeft:'8rem'}}>
          <img src={Girl} alt="Girl-img" />
        </div>
      </div>
    </>
  );
}

export default App;
