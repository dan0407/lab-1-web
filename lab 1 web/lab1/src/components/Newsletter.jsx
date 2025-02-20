import './Newsletter.css'
const Newsletter = () => {
  return (
    <section className="newsletter">
      <h2>Stay Updated</h2>
      <p>Subscribe to our newsletter for the latest updates</p>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;
