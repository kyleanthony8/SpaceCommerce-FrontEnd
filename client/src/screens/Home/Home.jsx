import React from "react";
import styles from "../../style";
import {
  Navbar,
  Card,
  Filter,
  Footer,
  Hero,
  Homecards,
  Clients,
} from "../../components";

const Home = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}></div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Homecards />
        <Clients />
        <Footer />
      </div>
    </div>
  </div>
);
export default Home;
