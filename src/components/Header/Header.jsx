import logo from "@/assets/logo.svg";
import style from "./Header.module.css";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logoContainer}>
        <img src={logo} alt="logo" width={40} height={40} />
        <p>Order Calculator 2</p>
      </div>
      {/* <div className={style.elementsContainer}>
      </div> */}
    </header>
  );
};
