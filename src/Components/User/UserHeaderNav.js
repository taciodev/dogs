import React from "react";

import styles from "./UserHeaderNav.module.css";

import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";

import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const [ mobileDropdown, setMobileDropdown ] = React.useState(false);
  const { userLogout } = React.useContext(UserContext);

  const mobile = useMedia("(max-width: 40rem)");

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileDropdown(false);
  }, [pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileDropdown && styles.mobileButtonActive
          }`}
          onClick={() => setMobileDropdown(!mobileDropdown)}
        ></button>
      )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileDropdown && styles.navMobileDropdownActive}`}>
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarFoto />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
