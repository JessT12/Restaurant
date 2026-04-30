import "./about.css";

function About() {
  return (
    <main className="body-about">
      {/* About Section */}
      <section className="section about-section">
        <div className="section-text">
          <p className="title">About Us</p>
          <p>
            Medi is a blend of many Mediterranean cultures providing a diverse
            food palette for all customers to enjoy. From the drinks to the
            chef's special, you can get a taste of the Mediterranean with just
            one bite. With authentic artwork and design, feel as if you are
            dining in the islands. Whether you’re here for a casual meal or a
            special celebration, Medi brings the heart of the Mediterranean
            straight to your table.
          </p>
        </div>

        <img
          src="https://wwd.com/wp-content/uploads/2016/06/cafe-medi-14.jpg?w=800"
          alt="Restaurant interior"
        />
      </section>

      {/* Mission Section */}
      <section className="section mission-section">
        <div className="section-text">
          <p className="title">Our Mission</p>
          <p>
            Our mission is to bring the vibrant spirit of Mediterranean dining
            to NYC. We focus on fresh ingredients, authentic recipes, and a
            welcoming environment that makes every visit feel special. We want
            all people to indulge in the delicious Mediterranean culture.
          </p>
        </div>

        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/04/d2/4d/medi-entrance.jpg?w=900&h=-1&s=1"
          alt="Restaurant entrance"
        />
      </section>
    </main>
  );
}

export default About;
