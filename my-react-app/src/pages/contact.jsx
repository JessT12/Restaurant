import "./contact.css";

function Contact() {
  return (
    <div className="body-contact">
    <div className="contact-page">
          <p className="text">Find Us!</p>

          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8548.050651629663!2d-73.98301526628872!3d40.757795246628575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25859e0a76abf%3A0xcc56da9feb6dde51!2sMedi%20Wine%20Bar%20%26%20Restaurant!5e0!3m2!1sen!2sus!4v1773082465967!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>

        <form className="contact-form">
          <p className="text">Contact Us</p>
          <label>Name:</label>
          <input type="text" />

          <label>Email:</label>
          <input type="email" />

          <label>Message:</label>
          <textarea rows="5"></textarea>

          <button type="submit">Send Message</button>
        </form>
        </div>
      </div>
  );
}

export default Contact;
