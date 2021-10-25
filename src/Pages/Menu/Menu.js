import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';
import MenuCards from './MenuCards/MenuCards';

const Menu = ({data, onAddProduct }) => {
    return (
        <div>
            <div className="container-Menu">
                
                <nav className='menu'>
                    <ul>
                        <li>
                            <Link to='/Главная'>
                                <h1 className='Big-word'>Меню</h1>
                            </Link>
                        </li>
                        <li>
                            <Link to='/MenuCards' className='main-words'>
                                Новинки
                            </Link>
                        </li>
                        <li>
                            <Link to='/Population' className='main-words'>
                                Популярное
                            </Link>
                        </li>

                        <li>
                            <Link to='/' className='main-words'>
                                Акции
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='main-words'>
                                Стейки
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='main-words'>
                                Гарниры
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='main-words'>
                                Салаты
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='main-words'>
                                Напитки
                            </Link>
                        </li>

                    </ul>
                </nav>
                
                <div className='cardsMommy'>
                {
                    data.map((v,i) =>{
                        return(
                            <MenuCards 
                            img={v.img} 
                            index={i} 
                            title={v.title} 
                            price={v.price} 
                            dis={v.dis}
                            onAddProduct={()=> onAddProduct(v.id)}
                            />
                        ) 
                    })
                }
            </div>
            <button className='btn btn-outline-light btnload'>Загрузить ещё</button>

            </div>
        </div>
    );
};

export default Menu;

