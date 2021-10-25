import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/MainPage/Header/Header';
import './App.css';
// import BigSlide from './Pages/MainPage/BigSlide/BigSlide';
import Menu from './Pages/Menu/Menu';
import { datas } from './Pages/Menu/Data';
import About from './Pages/MainPage/About/About';
import SmallSlide from './Pages/MainPage/SmallSlide/SmallSlide';
import Footer from './Pages/MainPage/Footer/Footer';
import Contacts from './Pages/indiPages/Contacts/Contacts';
import Basket from './Pages/indiPages/Basket/Basket';
import Stock from './Pages/indiPages/Stock/Stock';

const App = () => {
    const [product, setProduct] = useState(JSON.parse(localStorage.getItem('product')) || [])
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [oprice,setOprice] = useState(data.price)

    useEffect(() => {
        setData(datas)
        setShow(true)
        localStorage.setItem('product', JSON.stringify(product))
    }, [product, data]);

    const onAddProduct = (id) => {
        const check = product.every(item => item.cart.id !== id);
        if (check) {
            const item = data.find(item => item.id === id);
            const newItem = {
                cart: { ...item },
            }
            const newArr = [...product, newItem]
            setProduct(newArr)
        } else {
            alert('Вы уже заказали это блюдо')
        }
    }
    const onDeleteProduct = (id) => {
        const item = product.findIndex(item => item.cart.id === id);
        const newArr = [...product.slice(0, item), ...product.slice(item + 1)];
        setProduct(newArr)
    }
    return (
        <Router>
            <Header product={product} />
            <Switch>
                <Route path='/Главная'>
                    {/* <BigSlide /> */}
                    <Menu
                        data={data}
                        onAddProduct={onAddProduct}
                    />
                    <About />
                    <SmallSlide />
                </Route>
                <Route path='/About'>
                    <About />
                </Route>
                <Route path='/Menu'>
                    <Menu
                        data={data}
                        onAddProduct={onAddProduct}
                    />
                </Route>
                <Route path='/Stock'>
                    <Stock />
                </Route>
                <Route path='/Contacts'>
                    <Contacts data={data} />
                </Route>
                <Route path='/Basket'>
                    <Basket onDeleteProduct={onDeleteProduct} product={product} />
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}

export default App;
