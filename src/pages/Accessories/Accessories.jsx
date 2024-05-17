import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header' 
import style from './Accessories.module.css'
import { getAllAccessories } from '../../services/accessoryService'
import Item from '../../components/Item/Item'

function Accessories() {

  const [accessories, setAccessories] = useState([{}])

  useEffect(() => {
    const fetch = async () => {
      const data = await getAllAccessories()
      setAccessories(data)
    }

    fetch()
  }, [])

  return (
    <div className={style['container']}>
      <Header />
      <content className={style['content']}>
        {accessories.map((accessory) => (
          <Item 
            name={accessory.name}
            image={accessory.image}
            price={accessory.price}
            type='Аксессуар'
          />
        ))}
      </content>
    </div>
  )
}

export default Accessories