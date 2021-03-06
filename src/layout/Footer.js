import React from "react";
import styles from "../css/footer.module.css";
import links from "../constants/links";
import icons from "../constants/icons";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <AniLink fade key={index} to={item.path}>
              {item.text}
            </AniLink>
          );
        })}
      </div>
      <div className={styles.icons}>
        {icons.map((item, index) => {
          return (
            <a key={index} href={item.url} target="_blank">
              {item.icon}
            </a>
          );
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; Backroads travel compamy {new Date().getFullYear()}.
        all rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
