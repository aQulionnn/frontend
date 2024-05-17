import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import style from './RemoteControllers.module.css'
import { getAllRemoteControllers } from '../../services/remoteControllerService'
import Item from '../../components/Item/Item'

function RemoteControllers() {

  const [remoteControllers, setRemoteController] = useState([{}])

  useEffect(() => {
    const fetch = async () => {
      const data = await getAllRemoteControllers()
      setRemoteController(data)
    }

    fetch()
  }, [])

  return (
    <div className={style['container']}>
      <Header />
      <content className={style['content']}>
        {remoteControllers.map((rcu) => (
          <Item 
            name={rcu.name}
            image={rcu.image}
            price={rcu.price}
            type='Пульт'
          />
        ))}
      </content>
    </div>
  )
}

export default RemoteControllers