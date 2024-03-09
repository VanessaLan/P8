import React from 'react';
import logo_footer from "../assets/logo_footer.png"

const Footer = () => {
    return (
        <div className="footer">
            <img src={logo_footer} alt="Logo de Kasa sur fond noir" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;