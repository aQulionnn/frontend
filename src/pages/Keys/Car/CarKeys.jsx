import React, { useEffect, useState } from 'react'
import Header from '../../../components/Header/Header'
import style from './CarKeys.module.css'
import { getAllKeys } from '../../../services/clueService'
import Item from '../../../components/Item/Item'

function CarKeys() {

  const [keys, setKeys] = useState([{}])

  useEffect(() => {
    const fetch = async () => {
      const data = await getAllKeys()
      setKeys(data)
    }

    fetch()
  }, [])

  return (
    <div className={style['container']}>
      <Header /> 
      <content className={style['content']}>
        {keys.filter(key => key.type == 'car').map(key => (
          <Item
          name={key.name}
          image={key.image}
          price={key.price}
          type='Ключ'
          />
        ))}
      </content>
    </div>
  )
}

export default CarKeys