import React from 'react'
import style from './Admin.module.css'
import Key from '../../components/Key/Key'
import RemoteController from '../../components/RemoteController/RemoteController'
import Accessory from '../../components/Accessory/Accessory'


function Admin() {

  return (
    <div className={style['container']}>
      <Key />
      <RemoteController />
      <Accessory />
    </div>
  )
}

export default Admin