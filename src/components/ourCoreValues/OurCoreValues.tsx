import "./OurCoreValues.css";
const OurCoreValues = () => {
  return (
    <div className="our-core-values">
      <div className="container-sm">
        <h2 className="header">Our Core Values</h2>
        <p>
          The core values are the beliefs, philosophies, and principles which
          reflect the company culture and impact the employees’ experience, as
          well as the relationship with customers, partners, and shareholders.
        </p>
        <div className="our-core-values-container">
          <h3> Promoting Mental Wellbeing</h3>
          <p>
            Many of our important values fall under this crucial category,
            reflecting our mission, by promoting:
          </p>
          <ul className="our-core-values-list-container">
            <li className="our-core-values-list">
              Opportunity For Growth (Learning and Accomplishment)
            </li>
            <li className="our-core-values-list">
              Mattering At Work (Dignity and Meaning)
            </li>
            <li className="our-core-values-list">
              Work-Life Harmony (Autonomy and Flexibility)
            </li>
            <li className="our-core-values-list">
              Connection and Community (Belonging and Social Support)
            </li>
          </ul>
        </div>
        <div className="our-core-values-container">
          <h3>Mutual Respect</h3>
          <p>
            Mutual respect is the bedrock of any healthy relationship and serves
            as a fundamental pillar of humane and ethical behavior. It entails
            deeply valuing an individual’s right to exist, be heard, and enjoy
            equal opportunities as others. Respect extends beyond overlooking or
            merely tolerating differences; instead, it encompasses the
            recognition of these differences, understanding their significance,
            and responding with genuine interest, politeness, and care.
          </p>
        </div>

        <div className="our-core-values-container">
          <h3>Social Justice</h3>
          <p>
            We believe in fairness and equality in the distribution of mental
            health resources and services. This value is rooted in the idea that
            everyone should have access to the care they need regardless of
            their financial status or other factors.
          </p>
        </div>

        <div className="our-core-values-container">
          <h3>Diversity</h3>
          <p>
            We are committed to upholding diversity and inclusiveness in our
            hiring and promotion processes, ensuring that every individual has
            equal access to opportunities and advancement within our company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurCoreValues;
