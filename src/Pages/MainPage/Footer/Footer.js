import React from 'react';
import bigLogo from '../../../Items/logo/BigLogo.png';
import instagram from '../../../Items/icons/instagram.png';
import whatsapp from '../../../Items/icons/Vector.png';
import facebook from '../../../Items/icons/facebook.png';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='daddy'>
                <div><img src={bigLogo} /></div>
                <div>
                    <h1> Режим работы</h1>
                    <p>c 10:00 до 20:00</p>
                    <p>Сб, Вс - выходной</p>
                </div>
                <div>
                    <h1>Телефон</h1>
                    <p>+996 (0553) 577-575</p>
                    <p>+996 (0773) 577-575</p>
                </div>
                <div>
                    <h1>Адреc</h1>
                    <p>г. Бишкек, Медерова, 50/2</p>
                </div>
                <div className='icons'>
                    <a href="#"><img src={instagram} /></a>
                    <img src={whatsapp} />
                    <img src={facebook} />
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;