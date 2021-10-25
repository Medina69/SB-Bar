import React from 'react';
import './Contacts.scss';

const Contacts = () => {
    return (
        <div className='body'>
        <h1 className='contact-h1'>
                Контакты
            </h1>
        <div className='Contacts-body'>
            
            <div class="contacts">
        <div class="contacts-left">
            <div class="contacts-left-worktime">
                <p>Режим работы</p>
                <ul>
                    <li>c 10:00 до 20:00</li>
                    <li>Сб, Вс - выходной</li>
                </ul>
            </div>
            <div class="contacts-left-phone">
                <p>Телефон</p>
                <ul>
                    <li>+996 (0553) 577-575</li>
                    <li>+996 (0773) 577-575</li>
                </ul>
            </div>
            <div class="contacts-left-address">
                <p>Адрес</p>
                <ul>
                    <li>г. Бишкек, Медерова, 50/2</li>
                </ul>
            </div>
            <div class="contacts-left-icons">
                <ul>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fab fa-whatsapp"></i></a></li>
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="contacts-right">
            <div class="contacts-right-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251.12459204616047!2d74.6111492172095!3d42.85201396758227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb6303dd54d5b%3A0x830c38b93052ebe3!2z0YPQuy4g0JzQtdC00LXRgNC-0LLQsCwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1633179463780!5m2!1sru!2skg" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    </div>
        </div>
        </div>
    );
};

export default Contacts;