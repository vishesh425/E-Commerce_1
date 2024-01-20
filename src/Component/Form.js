import React from "react";
import { Link } from 'react-router-dom'

function Props1(props) {

  return (
    <div className="what_we_do_section layout_padding">
      <div className="container">
        <h1 className="what_taital Serviceanim">  Contact US</h1>
        <p className="what_text">It is a long established fact that a reader will be distracted by the readable content of a </p>
        <div className="what_we_do_section_3">
          <div  className="mail_section">
           <input className="mail_text_1" type="text" placeholder="Name" name="Name"/>
           <input className="mail_text_1" type="text" placeholder="Name" name="Name"/>
           <input className="mail_text_1" type="text" placeholder="Name" name="Name"/>
           <textarea className="massage_text" placeholder="Message" name="Message"/>
          </div>
          <div class="send_bt"><a href="#">send</a></div>
        </div>
      </div>
    </div>
  )
}
export default Props1;