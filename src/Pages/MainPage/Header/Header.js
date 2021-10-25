import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.scss';

const Header = ({ product }) => {
    const allPost = product.length
    return (
        <>
            <header>
                <div className="containeer">
                    <nav>
                        <ul>
                            <li>
                                <Link to='/Menu' className='Main-words'>
                                    Меню
                                </Link>
                            </li>
                            <li>
                                <Link to='/Stock' className='Main-words'>
                                    Акции
                                </Link>
                            </li>
                            <li>
                                <Link to='/About' className='Main-words'>
                                    О нас
                                </Link>
                            </li>

                            <Link to='/Главная'>
                                <div className='nav-logo'></div>
                            </Link>
                            <li>
                                <Link to='/Contacts' className='Main-words'>
                                    Контакты
                                </Link>
                            </li>
                            <li>
                                <Link to='/Login' className='Main-words'>
                                    <i class="fas fa-sign-in-alt"></i>
                                    Войти
                                </Link>
                            </li>
                            <li>
                                <Link to='/Basket' className='Main-words basket'>
                                    <div className='allpost'>{allPost}</div>
                                    <i class="fas fa-shopping-cart fa-1"></i>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;