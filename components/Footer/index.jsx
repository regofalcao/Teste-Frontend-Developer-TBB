import Image from "next/image";
import styles from "../../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles}>
        <ul className={styles.list2}>
          <li>contact us </li>
          <li>faq </li>
          <li>site map </li>
          <li>privacy policy </li>
          <li>cookies policy </li>
          <li>legal notice</li>
        </ul>
      </div>

      <div id="footer" className={styles.footericons}>
        <span>
          <Image src="/image 1@2x.png" width={116} height={29} />
        </span>

        <span>
          <Image src="/instagram.svg" width={43} height={43} />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
