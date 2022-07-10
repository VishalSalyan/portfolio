import React from "react";
import Button from "react-bootstrap/Button";
import "../App.css";

class ContactMe extends React.Component {
  openMail = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=vishal.salyan@gmail.com&su=&cc=&bcc=&body="
    );
  };

  render() {
    return (
      <div className="contact-me" id="contactme">
        <div>
          <h4 className="contact-me-say-hello">SAY HELLO</h4>
        </div>
        <div style={{ display: "flex" }}>
          <h1 className="contact-me-heading">
            Have a new project in mind? Let's collaborate and build something
            awesome. Let's turn that idea to an even greater product :)
          </h1>
          <div className="contact-me-email">
            <h4 style={{ color: "grey" }}>Email</h4>
            <a
              style={{ textDecoration: "none" }}
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vishal.salyan@gmail.com&su=&cc=&bcc=&body="
            >
              <h4 className="contact-me-mail">vishal.salyan@gmail.com</h4>
            </a>
            {/* <h4 style={{ color: "grey", marginTop: 40 }}>Phone No.</h4>
            <a style={{ textDecoration: "none" }} href="tel:9050630051">
              <h4 className="contact-me-phone">9050630051</h4>
            </a> */}
            <Button
              style={{ marginTop: 40 }}
              size="lg"
              variant="info"
              onClick={() => this.openMail}
              title="vishal.salyan@gmail.com"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactMe;
