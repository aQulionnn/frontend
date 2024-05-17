import React, { useEffect, useState } from 'react'
import Header from '../../../components/Header/Header'
import { getAllKeys } from '../../../services/clueService'
import Item from '../../../components/Item/Item'
import style from './HouseKeys.module.css'

function HouseKeys() {

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
        {keys.filter(key => key.type == 'house').map(key => (
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

export default HouseKeys