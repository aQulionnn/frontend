import React, { useEffect, useState } from 'react'
import style from './CartItem.module.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import toast, { Toaster } from 'react-hot-toast';

function CartItem({name, image, price, type}) {

  const [quantity, setQuantity] = useState(1)
  const [total, setTotal] = useState(price)

  function update() {
    const itemObj = {
      price: price,
      image: image,
      quantity: quantity,
      type: type       
    }
    const itemStr = JSON.stringify(itemObj)
    localStorage.setItem(`${name}`, itemStr)
  }

  function removeItem() {
    toast.error('Удалено')
    localStorage.removeItem(name)
  }

  function increment() {
    setQuantity(quantity+1)
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity-1)
    }
  }

  useEffect(() => {
    setTotal(price*quantity)
    update()
  }, [quantity])

  return (
    <div className={style['container']}>
      <div className={style['image']}>
        <img src={image} alt="" />
      </div>
      <div className={style['item']}>
        <span className={style['name']}>{name}</span>
        <span className={style['type']}>{type}</span>
        <span className={style['remove']} onClick={removeItem}>Удалить</span>
        <Toaster />
      </div>
      <div className={style['quantity']}>
        <RemoveIcon onClick={decrement} className={style['decrement']}/>
        <div className={style['quantity-number']}>{quantity}</div>
        <AddIcon onClick={increment} className={style['increment']}/>
      </div>    
      <span className={style['price']}>{price} Тг</span>
      <span className={style['price-total']}>{total} Тг</span>
    </div>
  )
}

export default CartItem