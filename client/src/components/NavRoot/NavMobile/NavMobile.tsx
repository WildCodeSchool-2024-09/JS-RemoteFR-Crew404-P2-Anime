import "./NavMobile.css";
import { useState } from "react";
import Drapeau from "../DrapeauRoot";
import styles from "../DrapeauRoot.module.css";
import Search from "../Search";
import MenuBurger from "./MenuBurger";

function NavMobile() {
  const [active, setActive] = useState(false);
  const funcActive = () => {
    setActive(!active);
  };

  return (
    <div className="nav-mobile">
      <section className="NavBarre">
        <div>
          <img src="./data-img/GenkiAnimeLogo.webp" alt="#" className="Logo" />
        </div>
        <Search />
      </section>

      <h1 id="Autor">GenkiAnime</h1>

      <div className={`sideNav ${active ? "active" : ""}`} id="mySideNav">
        <div>
          <button
            id="closeBtn"
            className="ButtonClose"
            type="button"
            onClick={funcActive}
          >
            x
          </button>
        </div>

        <MenuBurger />

        <Drapeau
          moduleContainerDrapeau={styles.ContainerDrapeauMobile}
          moduleLanguageFR={styles.LanguageFRMobile}
          moduleLanguageEN={styles.LanguageENMobile}
          moduleImgDrapeau={styles.ImgDrapeauMobile}
        />
      </div>

      <button id="openBtn" type="button" onClick={funcActive}>
        <span className="menuBurger">
          <span />
          <span />
          <span />
        </span>
      </button>
    </div>
  );
}

export default NavMobile;

/*
<ContainerNav/>
<h1>GenkiAnime</h1>
<SideNav/>
*/
