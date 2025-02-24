import './Features.css'
const Features = () => {
  const features = [
    { title: "Fast", description: "Lightning quick delivery" },
    { title: "Secure", description: "Top-notch security" },
    { title: "Easy", description: "User-friendly interface" }
  ];

  return (
    <section className="features">
      {features.map((feature, index) => (
        <div key={index} className="feature-item">
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
