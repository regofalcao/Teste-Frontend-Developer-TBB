import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Home.module.css";

const Menu = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div onClick={() => setClicked(!clicked)}>
      {!clicked ? (
        <Image src="./ic.menu.svg" width={24} height={24} className={styles.menuicon} />
      ) : (
        <div>
          <Image src="./xicon.svg" width={24} height={24} className={styles.menuicon} />
          <div className={styles.menu}>
            <ul className={styles.list}>
              <li>brand philosophy</li>
              <li>product technology</li>
              <li>all products</li>
              <li>intibiome wellness</li>
              <li>intibiome active</li>
              <li>intibiome agecare</li>
              <li>article 1</li>
              <li>article 2</li>
              <li>article 3</li>
              <li>faq</li>
              <li>contact us</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
