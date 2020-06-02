import React from 'react'
import {Link} from 'react-router-dom'

const Menu =()=>{
return (

    <div className="col-md-8">
    <nav>
      <ul className="menu row">
        <li className="menu_list"><Link to="url">Главная</Link>{" "}</li>
        <li><Link to="url">Продвижение в ВКонтакте</Link>
        <ul className="submenu">
          <li><Link to="url">ВКонтакте Standart</Link></li>
          <li><Link to="url">ВКонтакте Business</Link></li>
          <li><Link to="url">ВКонтакте Pro+</Link></li>
          </ul>
        </li>
        <li>
          <Link to="url">Продвижение в Facebook</Link>
          <ul className="submenu">
            <li><Link to="url">Facebook Standart</Link></li>
            <li><Link to="url">Facebook Business</Link></li>
            <li><Link to="url">Facebook Pro+</Link></li>
          </ul>
        </li>
        <li>
          <Link to="url">Продвижение в Одноклассники</Link>
          <ul className="submenu">
            <li><Link to="url">Одноклассники Standart</Link></li>
            <li><Link to="url">Одноклассники Business</Link></li>
            <li><Link to="url">Одноклассники Pro+</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="url">Продвижение в Instagram</Link>
          <ul className="submenu">
            <li><Link to="url">Instagram Standart</Link></li>
            <li><Link to="url">Instagram Business</Link></li>
            <li><Link to="url">Instagram Pro+</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
)

}

export default Menu