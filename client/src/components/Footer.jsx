import styles from "../style";

import { footerLinks, socialMedia } from "../constants";
import Logo from "../assets/logo.png";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={Logo}
          alt="MySpace"
          className="w-[90px] h-[124px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          An easy way to conduct intergalactic commerce.
        </p>
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 NYC GA SEI.
      </p>
    </div>
  </section>
);

export default Footer;
