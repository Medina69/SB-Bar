import React, { useState } from 'react';
import './MenuCards.scss';

const MenuCards = ({ img, title, dis, price, index, onAddProduct }) => {
    const [count, setCount] = useState(1);
    const [cost, setCost] = useState(price)

    const onPlus = () => {
        setCount(count + 1)
        setCost(cost + cost)
    }
    const onCount = () => {
        setCount(count - 1)
        setCost(cost - 1000)
        if (count === 0) {
            setCount(count)
            setCost(cost)
        }
    }

    return (
        <div key={index} className='card'>
            <img className='Images' src={img} />
            <h1>{title}</h1>
            <p>{dis}</p>
            <div className='card_third_line'>
                <span>{cost} сом</span>
                <div className='minus-plus'>
                    <span className='minus' onClick={onCount}>-</span>
                    <span>{count}</span>
                    <span className='plus' onClick={onPlus}>+</span>
                </div>
                <button className='btn btn-outline-light' onClick={onAddProduct}>В КОРЗИНУ</button>
            </div>

        </div>
    );
};

export default MenuCards;