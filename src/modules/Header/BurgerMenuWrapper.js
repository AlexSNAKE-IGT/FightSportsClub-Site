import React, { useState, useEffect } from "react";
import BurgerSVG from '../../assets/icon/burger.svg'

function BurgerMenuWrapper({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenuOnOutsideClick = (event) => {
        const menu = document.getElementById("myTopNav");
        if (menu && !menu.contains(event.target)) {
            setMenuOpen(false);
        }
    }

    const myFunction = (event) => {
        event.stopPropagation();
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
        document.addEventListener("click", closeMenuOnOutsideClick);

        return () => {
            document.removeEventListener("click", closeMenuOnOutsideClick);
        }
    }, []);



    return (
        <div className={`topnav ${menuOpen ? "responsive" : ""}`} id="myTopNav">
            {children}
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="icon">
                <img onClick={myFunction} className="icon" src={BurgerSVG} alt={"Menu"} />
            </a>
        </div>
        );
}

export default BurgerMenuWrapper;