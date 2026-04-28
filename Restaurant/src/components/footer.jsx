import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">

      <div className="footer-item">
        <p>Business Hours</p>
        <p>
          Mon-Fri: 8am - 10pm<br />
          Sat-Sun: 11am - 11pm
        </p>
      </div>

      <div className="footer-item">
        <p>Social Media</p>

        <a
          href="https://www.facebook.com/medinyc"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline" }}
        >
          <i className="fa fa-facebook-square" style={{ fontSize: "20px" }}></i>
          {" "}@medinewyork
        </a>

        <br />

        <a
          href="https://www.instagram.com/medinyc/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline" }}
        >
          <i className="fa fa-instagram" style={{ fontSize: "20px" }}></i>
          {" "}@medirestaurantnyc
        </a>
      </div>

    </div>
  );
}

export default Footer;