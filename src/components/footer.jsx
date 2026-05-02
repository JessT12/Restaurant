import "./footer.css";

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-item">
                    <p>Business Hours</p>
                    <p>Mon-Fri: 8am - 10pm</p>
                    <p>Sat-Sun: 11am - 11pm</p>
                </div>

                <div className="footer-item">
                    <p>Social Media</p>
                    <a href="https://www.facebook.com/medinyc" target="_blank"><i className="fa fa-facebook-square"></i> @medinewyork</a>
                    <a href="https://www.instagram.com/medinyc/" target="_blank"><i className="fa fa-instagram"></i> @medirestaurantnyc</a>
                </div>

                </div>
        </footer>
    )
}

export default Footer;