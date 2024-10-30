import { useEffect, useRef, useState } from 'react';
import styles from './Section.module.css';
import logo from "../../assets/img/logo.png";

const Section = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case it's already visible

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.sectionContainer} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.contentContainer}>
        <div className={styles.logoContainer}>
          <img ref={sectionRef} className={styles.logo} src={logo} alt="Company Logo" />
        </div>
        <div>
          <h2 className={styles.title}>About Us</h2>
          <p className={styles.description}>
            We are passionate about delivering quality and excellence...
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.learnMoreBtn}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
