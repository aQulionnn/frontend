import React, { useState } from 'react'
import style from './Item.module.css'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function Item({name, image, price, type}) {

  const navigate = useNavigate()
  const [count, setCount] = useState(0)

  function addToCart() {
    toast.success('Добавлено')
    setCount(count + 1)
    const itemObj = {
      price: price,
      image: `https://localhost:7079/api/Image/${image}`,
      quantity: 1,
      type: type       
    }
    const itemStr = JSON.stringify(itemObj)
    localStorage.setItem(`${name}`, itemStr)
  }

  return (
    <div className={style['container']}>
      <div className={style['image']}>
        <img src={'https://localhost:7079/api/Image/' + image} alt="image" />
      </div>
      <div className={style['name']}><p>{name}</p></div>
      <div className={style['bottom-section']}>
      <div className={style['price']} onClick={addToCart}>
        <p>{price}.0 Тг</p>
      </div>
      <ShoppingCartCheckoutIcon 
        className={count == 0 ? style['cart'] : style['cart-check']}
        onClick={() => navigate('/cart')}
      />
      <Toaster />
      </div>
    </div>
  )
}

export default Item