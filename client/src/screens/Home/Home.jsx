import React from 'react'
import styles from "./style";
import { Navbar,
  Card,
  Filter,
  Footer,
  Hero, Body } from '../../components'


  const Home = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
  
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Filter />
          <Body />
          <p className='heading2' Body goes here />
          <Footer />
        </div>
      </div>
      </div>
      );
  export default Home;