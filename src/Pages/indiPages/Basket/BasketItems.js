import React, { useState } from 'react';
import './BasketItems.scss'

const BasketItems = ({ img, title, price, onDeleteProduct }) => {
    const [count, setCount] = useState(1);
    const [cost, setCost] = useState(price)

    const onPlus = () => {
        setCount(count + 1)
        setCost(cost + cost)
    }
    const onCount = () => {
        setCount(count - 1)
        setCost(cost - cost)
        if (count === 0) {
            setCount(count)
            setCost(cost)
        }
    }
    return (
        <div>
            <div className="basket-box">

                <div className="basket-item">
                    <div className="basket-item-left">
                        <img src={img} alt="" className="basket-img" />
                    </div>
                    <div className="basket-item-right">
                        <div className="basket-item-right-top">
                            <div className="basket-item-right-top-title">
                                {title}
                            </div>
                            <div className="basket-item-right-top-x">
                                <i onClick={onDeleteProduct} class="fas fa-times"></i>
                            </div>
                        </div>
                        <div className="basket-item-right-price">
                            <ul>
                                <li>Количество</li>
                                <li>
                                    <span onClick={onCount}>
                                        -
                                    </span>
                                    <samp>{count}</samp>
                                    <span onClick={onPlus}>
                                        +
                                    </span>
                                </li>
                            </ul>
                            <ul>
                                <li>Цена</li>
                                <li>{cost} сом</li>
                            </ul>
                            <ul>
                                <li>Конечная цена</li>
                                <li>{cost} сом</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasketItems;