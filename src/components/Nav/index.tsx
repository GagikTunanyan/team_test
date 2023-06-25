import React, { useState } from "react";
import styles from "./navbar.module.scss";
import { NavigationPropTypes } from "../../types";
import { Link } from "../";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useNavigate } from "react-router-dom";

export const Navbar: React.FC<NavigationPropTypes> = (props) => {
  const { logo, left, right } = props;
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const [openMobile, setOpenMobile] = useState(false);

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
            {width > 750 &&
              left?.map((nav) => (
                <li key={nav.hash}>
                  <Link to={`/#${nav.hash}`}>
                    {!!nav.icon && (
                      <span className={styles.Icon}>{nav.icon}</span>
                    )}
                    <span>{nav.text}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </li>
        <li>
          <ul className={styles.Right}>
            {width > 750 &&
              right?.map((nav) => (
                <li key={nav.hash}>
                  <Link to={`/#${nav.hash}`}>
                    {!!nav.icon && (
                      <span className={styles.Icon}>{nav.icon}</span>
                    )}
                    <span>{nav.text}</span>
                  </Link>
                </li>
              ))}
            {width <= 750 && (
              <>
                <li className={styles.Thumb} onClick={() => setOpenMobile(!openMobile)}>☰</li>
                {openMobile && (
                  <ul className={styles.MobileMenu}>
                    {left?.map((nav) => (
                      <li key={nav.hash}>
                        <Link to={`/#${nav.hash}`}>
                          {!!nav.icon && (
                            <span className={styles.Icon}>{nav.icon}</span>
                          )}
                          <span>{nav.text}</span>
                        </Link>
                      </li>
                    ))}
                    {right?.map((nav) => (
                      <li key={nav.hash}>
                        <Link to={`/#${nav.hash}`}>
                          {!!nav.icon && (
                            <span className={styles.Icon}>{nav.icon}</span>
                          )}
                          <span>{nav.text}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </ul>
        </li>
      </ul>
    </nav>
  );
};
