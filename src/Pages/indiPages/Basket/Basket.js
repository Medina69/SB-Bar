import React, { useState } from 'react';
import BasketItems from './BasketItems';
import img from '../../../Items/Images/2.png';
import './../Basket/Basket.scss'
const Basket = ({ product, onDeleteProduct }) => {
    // const [modal, setModal] = useState(false)
    // const [buy, setbuy] = useState(false)
    // const onXbutton = () => {
    //     setModal(false)
    //     setbuy(false)
    // }
    // const modalWindow = () => {
    //     setModal(true)
    // }
    // const onBuy = () => {
    //     setbuy(true)
    //     setModal(false)
    // }
    const allPost = product.length
    return (
        <div className='container'>
            <div className="basket-title">
                <p className="basket-title-p">Карзина</p>
            </div>
            {
                product.map(({ cart }) => {
                    return (
                        <BasketItems
                            onDeleteProduct={() => onDeleteProduct(cart.id)}
                            key={cart.id}
                            img={cart.img}
                            title={cart.title}
                            price={cart.price}
                        />
                    )
                })
            }
            <div className="basket-result">
                <div className="basket-result-top">
                    <ul>
                        <li>Общая стоимость: <samp>2000сом</samp></li>
                        <li>Количество элементов: <samp>{allPost}</samp></li>
                    </ul>
                </div>
            </div>
            <div className="basket-result-bottom">
                <button>Оформить заказ</button>
            </div>
            {/* {
                modal ?
                    <div className="container2">
                        <div action='' className="box">
                            <div className="x_button">
                                <img src="" alt="" />
                            </div>
                            <h1>Оформления Заказа</h1>
                            <div className="name">
                                <p>Ваше имя</p>
                                <input required='required' className="input" style={{ marginBottom: '45px' }} type="text" placeholder='Введите ваше имя' />
                                <p>Ваш телефон</p>
                                <input required='required' className="input" style={{ marginBottom: '41px' }} type="text" placeholder="Введите ваш телефон" />
                                <div class="type">
                                    <h3 className="span">Тип заказа:</h3>
                                    <input required='required' type="checkbox" />
                                    <h3 className="span1">Доставка</h3>
                                    <input required='required' type="checkbox" />
                                    <h3 className="span1">Самовывоз</h3>
                                </div>
                            </div>
                            <div className="adress">
                                <div className="top">
                                    <div className="add">
                                        <p>Ваш адрес</p>
                                        <input required='required' type="text" placeholder="Введите ваш адрес" />
                                    </div>
                                    <div className="home">
                                        <p>Ваш дом</p>
                                        <input required='required' type="text" placeholder="Введите ваш дом" />
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="pod">
                                        <p>Ваш подьезд</p>
                                        <input required='required' type="text" placeholder="Введите ваш подъезд" />
                                    </div>
                                    <div className="kvar">
                                        <p>Номер вашей квартиры</p>
                                        <input required='required' type="text" placeholder="Введите номер квартиры" />
                                    </div>
                                </div>
                            </div>
                            <div className="comment">
                                <p>Комментарий к заказу</p>
                                <input required='required' className="input" type="text" placeholder="Введите ваш комментарий" />
                                <p>Промокод</p>
                                <input required='required' className="input1" type="text" placeholder="Введите промокод" />
                                <div className="type">
                                    <h3 className="span">Оплата: </h3>
                                    <input required='required' type="checkbox" />
                                    <h3 className="span1">Картой</h3>
                                    <input required='required' type="checkbox" />
                                    <h3 className="span1">Наличными</h3>
                                </div>
                            </div>
                            <div className="pay">
                                <div className="card">
                                    <div className="number_card">
                                        <p>Номер карты</p>
                                        <input required='required' type="text" placeholder="0000 0000 0000 0000" />
                                    </div>
                                    <div className="cvv_card"><p>CVV</p>
                                        <input required='required' type="text" placeholder="000" />
                                    </div>
                                    <div className="date_card">
                                        <p>Срок действия</p>
                                        <input required='required' type="text" placeholder="ММ/ГГ" />
                                    </div>
                                </div>
                                <p>Держатель карты</p>
                                <input required='required' className="input" type="text" placeholder="Введите имя и фамилию" />
                            </div>
                            <div className="money">
                                <span>Итоговая стоимость: </span>
                                <h2>6000 соммов</h2>
                            </div>
                            <div className="div">
                                <button className="button" onClick={onBuy}>
                                    Заказать
                                </button>
                            </div>
                        </div>
                    </div> : buy ? null : modal
            }
            {
                buy ?
                    <div className="container1">
                        <div className="box1">
                            <div className="x_button1" onClick={onXbutton}>
                                <img src="./Удалить.png" alt="" />
                            </div>
                            <h1>Ваш заказ оформлен!</h1>
                            <div className="img">
                                <img src="./Иллюстрация.png" alt="" />
                            </div>
                            <h2>Приятного аппетита!</h2>
                        </div>
                    </div> : modal === false ? null : false
            } */}
            <div className="basket-rec">
                <div className="basket-rec-title">
                    <p>С этим также подойдет</p>
                </div>
                <div className='df'>
                    <div className="basket-rec-box">
                        <div className="basket-rec-box-item">
                            <div className="basket-rec-box-item-top">
                                <img className='img' src={img} alt="" />
                            </div>
                            <div className="basket-rec-box-item-center">
                                <p>Форель с булгуром</p>
                                <p>Описание продукта, особенности, плюсы и минусы. </p>
                            </div>
                            <div className="basket-rec-box-item-bottom">
                                <samp>1000 сом</samp>
                                <button>В корзину</button>
                            </div>
                        </div>
                    </div>
                    <div className="basket-rec-box">
                        <div className="basket-rec-box-item">
                            <div className="basket-rec-box-item-top">
                                <img className='img' src={img} alt="" />
                            </div>
                            <div className="basket-rec-box-item-center">
                                <p>Форель с булгуром</p>
                                <p>Описание продукта, особенности, плюсы и минусы. </p>
                            </div>
                            <div className="basket-rec-box-item-bottom">
                                <samp>1000 сом</samp>
                                <button>В корзину</button>
                            </div>
                        </div>
                    </div>
                    <div className="basket-rec-box">
                        <div className="basket-rec-box-item">
                            <div className="basket-rec-box-item-top">
                                <img className='img' src={img} alt="" />
                            </div>
                            <div className="basket-rec-box-item-center">
                                <p>Форель с булгуром</p>
                                <p>Описание продукта, особенности, плюсы и минусы. </p>
                            </div>
                            <div className="basket-rec-box-item-bottom">
                                <samp>1000 сом</samp>
                                <button >В корзину</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Basket;