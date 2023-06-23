import React from "react";
import styles from "./navbar.module.scss";
import { NavigationPropTypes } from "../../types";
import { Link } from "../";
import { useNavigate } from "react-router-dom";

export const Navbar: React.FC<NavigationPropTypes> = (props) => {
  const { logo, left, right } = props;
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate("/");
  };

  return (
    <nav className={styles.Navbar}>
      <ul>
        <li>
          <ul className={styles.Left}>
            <li className={styles.Logo} onClick={handleClickLogo}>
              {!!logo.text && <h3 className="mobile">{logo.text}</h3>}
            </li>
            {left?.map((nav) => (
              <li key={nav.hash}>
                <Link to={`/#${nav.hash}`}>{nav.text}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <ul className={styles.Right}>
            {right?.map((nav) => (
              <li key={nav.hash}>
                <Link to={`/#${nav.hash}`}>
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
