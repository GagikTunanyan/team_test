import React from "react";
import styles from "./navbar.module.scss";
import { NavigationPropTypes } from "../../types";
import { Link } from "../";

export const Navbar: React.FC<NavigationPropTypes> = (props) => {
  const { logo, left, right } = props;
  return (
    <nav className={styles.Navbar}>
      <ul>
        <li>
          <ul className={styles.Left}>
            <li className={styles.Logo}>
              <h3 className="mobile">{!!logo.text && logo.text}</h3>
            </li>
            {left?.map((nav) => (
              <li>
                <Link to={`/#${nav.hash}`} key={nav.hash}>
                  {nav.text}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <ul className={styles.Right}>
            {right?.map((nav) => (
              <li>
                <Link to={`/#${nav.hash}`} key={nav.hash}>
                  {!!nav.icon && (
                    <span className={styles.Icon}>{nav.icon}</span>
                  )}
                  {nav.text}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};
