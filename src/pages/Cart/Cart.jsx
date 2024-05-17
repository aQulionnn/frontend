import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import style from './Cart.module.css'
import CartItem from '../../components/CartItem/CartItem';

function Cart() {

  const [allItems, setAllItems] = useState([])
  const [totalSum, setTotalSum] = useState(0)

  const key = localStorage.key(0)
        const item = localStorage.getItem(key)
        const parsedItem = JSON.parse(item)

  useEffect(() => {
    const getAllItems = () => {
      const items = []
      let sum = 0
      for (let i=0; i<localStorage.length; i++){
        const key = localStorage.key(i)
        const item = localStorage.getItem(key)
        const parsedItem = JSON.parse(item)
        items.push({
          key: key,
          price: parsedItem.price,
          image: parsedItem.image,
          quantity: parsedItem.quantity,
          type: parsedItem.type
        })
        sum += parsedItem.price * parsedItem.quantity
      }
      setTotalSum(sum)
      setAllItems(items)
    }
    getAllItems()
  }, [allItems])

  return (
    <div className={style['container']}>
      <Header />
      <content className={style['content']}>
        <div className={style['cart-header']}>
          <p>Корзина</p>
          <span>Количество товаров: {localStorage.length}</span>
        </div>
        <div className={style['cart']}>
          {allItems.map((item) => (
            <CartItem
              name={item.key}
              image={item.image}
              price={item.price}
              type={item.type}
            />
          ))}
        </div>
        <div className={style['total-sum']}><p>Сумма:</p><span>{totalSum} Тг</span></div>
      </content>
    </div>
  )
}

export default Cart