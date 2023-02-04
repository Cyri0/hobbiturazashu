import React, { useState, useEffect } from "react";
import "./scss/Navbar.scss";
import { Link } from "react-router-dom";
import "./scss/Hamburger.scss";

let menu_items = [
  { name: "Kezdőlap", link: "/", current: true },
  { name: "Hazai túrák", link: "/domestic", current: false },
  { name: "Külföldi túrák", link: "/foreign", current: false },
  { name: "Utazások", link: "/journeys", current: false },
  { name: "Rólam", link: "/#about", current: false },
  //{ name: "Kapcsolat", link: "", current: false },
];

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(true);
  const [mobile, setDeviceChange] = useState(window.innerWidth < 768);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setNavbarBg(window.scrollY > 50 ? true : false);
    });
  }, []);

  const changeDevice = () => {
    if (window.innerWidth < 768) {
      setDeviceChange(true);
    } else {
      setDeviceChange(false);
    }
  };
  window.addEventListener("resize", changeDevice);

  return (
    <nav className={navbarBg || mobile ? "background" : ""}>
      <div className="container">
        {mobile ? <MobileNavbar /> : <DesktopNavbar />}
      </div>
    </nav>
  );
};

const DesktopNavbar = () => {
  let generated_list = [];

  menu_items.forEach((item, index, array) => {
    generated_list.push(
      <li key={index}>
        <Link
          className={item.current ? "actual" : ""}
          to={item.link}
          onClick={() => {
            array.forEach((resetitem) => {
              resetitem.current = false;
            });
            item.current = true;
          }}
        >
          {item.name}
        </Link>
      </li>
    );
  });

  return <ul>{generated_list}</ul>;
};

const MobileNavbar = () => {
  let [openMobileNavbar, switchMobileNavbar] = useState(false);
  let generated_list = [];

  menu_items.forEach((item, index, array) => {
    generated_list.push(
      <li key={index}>
        <Link
          onClick={() => {
            array.forEach((resetitem) => {
              resetitem.current = false;
            });
            item.current = true;
            switchMobileNavbar(false);
          }}
          to={item.link}
        >
          {item.name}
        </Link>
      </li>
    );
  });
  return (
    <div id="my-mobile-navbar">
      <HamburgerIcon
        xhamburger={openMobileNavbar}
        onChange={switchMobileNavbar}
      />
      <div className={"mobile-navbar " + (openMobileNavbar ? "open" : "close")}>
        <ul>{generated_list}</ul>
      </div>
    </div>
  );
};

function HamburgerIcon(props) {
  return (
    <div
      onClick={() => {
        props.onChange(!props.xhamburger);
      }}
      className={props.xhamburger ? "hamburger x-hamburger" : "hamburger"}
    >
      <div></div>
    </div>
  );
}

export default Navbar;
