import { useNavigate } from "react-router-dom";
import { Button, Link } from "../";
import { navigations } from "../../utils/contsants";
import styles from "./footer.module.scss";

export const Footer = () => {
    const navigate = useNavigate()
  return (
    <footer className={styles.Footer}>
      <div>
        <section className={styles.Contacts}>
          <div className={styles.Left}>
            <div>
              <h4>Санкт-Петербург</h4>
              <p className="p-l">Большой Проспект П. С., 5, 55</p>
            </div>
            <div>
              <h4>mail@yandex.ru</h4>
              <p className="p-l p-bold">+7 (981) 131-64-98</p>
            </div>
          </div>
          <div className={styles.Right}>
            <Button mode="outline" onClick={() => navigate("/")}>Написать нам</Button>
          </div>
        </section>
        <section className={styles.Nav}>
            {navigations.footer.map((nav) => (
                <Link to={`#${nav.hash}`} key={`footer-${nav.hash}`}>{nav.text}</Link>
            ))}
            <p className={`p-s ${styles.Prod}`}>© 2009-2020 Vasya.inc</p>
        </section>
      </div>
    </footer>
  );
};
