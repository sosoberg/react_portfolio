import React from "react";

import Resume from "../components/Resume"

function Contact() {
  return (
    <aside className="contactGrid">
        <div className="contactModal">
            
            <h3 className="modalHeaders">Contact Me</h3>
            <form action="action_page.php">

                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                <label for="lname">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Subject line.." />

                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                <input type="submit" value="Submit" />

            </form>

                <div>
                    <p className="phone">Phone: 509-885-6067</p>
                    <p className="phone">Email: <a href="mailto:samuelcoberg@gmail.com">samuelcoberg@gmail.com</a></p>
                </div>
        </div>
        
        <Resume />
    </aside>
  );
}

export default Contact;