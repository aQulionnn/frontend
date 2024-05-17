import React, { useEffect, useState } from 'react'
import style from './Keys.module.css'
import Header from '../../components/Header/Header'
import Item from '../../components/Item/Item'
import { getAllKeys } from '../../services/clueService'

function Keys() {

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
        {keys.map((key) => (
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

export default Keys