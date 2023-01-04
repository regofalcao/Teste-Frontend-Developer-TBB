import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Menu from "../Menu";

const Header = () => {
  return (
    <div className={styles.header}>
      <Menu />
      <div>
        <Image src="/headermobile2.png" width={143} height={58} />
      </div>
      <div>
        <Image src="./ic.search.svg" width={24} height={24} />
      </div>
    </div>
  );
};

export default Header;
