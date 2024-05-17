import React from 'react'
import style from './Header.module.css'
import { useNavigate } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {

  const navigate = useNavigate()

  return (
    <header className={style['container']}>
      <div className={style['logo']} onClick={() => navigate('/')}>
        <img src="/assets/logo.png" alt="logo" />
      </div>
      <ul>
        <li>
          <a href="" onClick={() => navigate('/keys')}>КЛЮЧИ</a>
          <ul className={style['dropdown']}>
            <li><a href="" onClick={() => navigate('/keys/car')}>АВТОМОБИЛЬНЫЕ</a></li>
            <li><a href="" onClick={() => navigate('/keys/house')}>КВАРТИРНЫЕ</a></li>
          </ul>
        </li>
        <li><a href="" onClick={() => navigate('/remote-controllers')}>ПУЛЬТЫ</a></li>
        <li><a href="" onClick={() => navigate('/accessories')}>АКСЕССУАРЫ</a></li>
      </ul>
      <ShoppingCartIcon className={style['cart']} onClick={() => navigate('/cart')}/>
    </header>
  )
}

export default Header
