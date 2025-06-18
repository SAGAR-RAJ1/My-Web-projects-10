import { useState } from "react"
import './Lottery.css'
import { generateNumber,sum } from "./helper"
// import { sum } from "./helper"

export default function Lottery(){
    const [ticket, setticket] = useState(generateNumber(3))
    // 
    let win = sum(ticket)===15;
    function refresh(){
        setticket(generateNumber(3))
    }

    return(<>
      <div className="tickets">

        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
        
       
      </div>
      <br /><br /> <h3>{win && "Congrats! You WON"}</h3><br /><br />
      <button onClick={refresh}  style={{backgroundColor:"smokewhite"}}>Buy New Ticket</button>
   
      </>
    )
}