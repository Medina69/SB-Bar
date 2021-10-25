import React from 'react';
import './Stock.scss';
import stake from '../../../Items/Images/1.png'
import file from '../../../Items/Images/2.png'
import baby from '../../../Items/Images/3.png'
import burger from '../../../Items/Images/4.png'
import salmon from '../../../Items/Images/5.png'
import buffalo from '../../../Items/Images/6.png'

const Stock = () => {
    return (
        <div className='container'>
            <div className="box">
                <h1>Акции</h1>
                <div className="food_card">
                    <img src={stake} alt="" />
                    <div className="text">
                        <h4>Фирменный стейк</h4>
                        <p>Описание продукта, особенности, плюсы и минусы. Описание продукта, особенности, плюсы и минусы.</p>
                        <div className="sale">
                            <p className='p1'>1000 Сом</p>
                            <p className='p2'>500 Сом</p>
                        </div>
                        <div className="busket">В КОРЗИНУ</div>
                    </div>
                </div>
                <div className="food_card1">
                    <div className="text1">
                        <h4 >Филе с бургуром</h4>
                        <p >Описание продукта, особенности, плюсы и минусы. Описание продукта, особенности, плюсы и минусы.</p>
                        <div className="sale1">
                            <p className='p1'>1000 Сом</p>
                            <p className='p2'>500 Сом</p>
                        </div>
                        <div className="busket1">В КОРЗИНУ</div>
                    </div>
                    <img src={file} alt="" />
                </div>
                <div className="food_card">
                    <img src={baby} alt="" />
                    <div className="text">
                        <h4>Цыпленок с бобами</h4>
                        <p>Описание продукта, особенности, плюсы и минусы. Описание продукта, особенности, плюсы и минусы.</p>
                        <div className="sale">
                            <p className='p1'>1000 Сом</p>
                            <p className='p2'>500 Сом</p>
                        </div>
                        <div className="busket"> В КОРЗИНУ </div>
                    </div>
                </div>
                <div className="food_card1">
                    <div className="text1">
                        <h4>Mega Burger</h4>
                        <p>Описание продукта, особенности, плюсы и минусы. Описание продукта, особенности, плюсы и минусы.</p>
                        <div className="sale1">
                            <p
                                style={{ color: 'red', textDecoration: 'line-through', marginRight: '40px' }}
                            >1000 Сом</p>
                            <p
                                style={{ color: 'green' }}>500 Сом</p>
                                </div>
                                <div className="busket1" style={{ width: '224px', height: '60px', border: '1px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    В КОРЗИНУ
                                </div>
                            </div>
                            <img src={burger} alt="" />
                        </div>
                        <div className="food_card">
                            <img src={salmon} alt="" />
                            <div className="text">
                                <h4>Филе Salmon</h4>
                                <p>Описание продукта, особенности, плюсы и минусы. Описание продукта, особенности, плюсы и минусы.</p>
                                <div className="sale">
                                    <p
                                        style={{ color: 'red', textDecoration: 'line-through', marginRight: '40px' }}
                                    >1000 Сом</p>
                                    <p
                                        style={{ color: 'green' }}
                                    >500 Сом</p>
                                </div>
                                <div className="busket" style={{ width: '224px', height: '60px', border: '1px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    В КОРЗИНУ
                                </div>
                            </div>
                        </div>
                        <div className="food_card1">
                            <div className="text1">
                                <h4>Куринные крылья Buffalo</h4>
                                <p>Описание продукта, особенности, плюсы и минусы. Описание продукта, особенности, плюсы и минусы.</p>
                                <div className="sale1">
                                    <p
                                        style={{ color: 'red', textDecoration: 'line-through', marginRight: '40px' }}
                                    >1000 Сом</p>
                                    <p
                                        style={{ color: 'green' }}
                                    >500 Сом</p>
                                </div>
                                <div className="busket1" style={{ width: '224px', height: '60px', border: '1px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    В КОРЗИНУ
                                </div>
                            </div>
                            <img src={buffalo} alt="" />
                        </div>
                    </div>
                </div>
            );
        };
        
        export default Stock;     