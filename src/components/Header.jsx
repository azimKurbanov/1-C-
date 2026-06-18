import React from 'react'
import Logo from '../assets/logo.png'
import Icon1 from '../assets/icon1.png'

const Header = () => {
  return (
    <div>
      <header className="mt-[20px]">
        <nav className="flex justify-around items-center">
          <img src={Logo} alt="Logo" />
          <ul className="flex justify-center items-center gap-[30px]">
            <li><a className="text-[#2C2B35] hover:text-[green] duration-[0.5s]" href="#">Как это работает</a></li>
            <li><a className="text-[#2C2B35] hover:text-[green] duration-[0.5s]" href="#">Инструкции</a></li>
            <li><a className="text-[#2C2B35] hover:text-[green] duration-[0.5s]" href="#">Продукты</a></li>
            <li><a className="text-[#2C2B35] hover:text-[green] duration-[0.5s]" href="#">База знаний </a></li>
            <li><a className="text-[#2C2B35] hover:text-[green] duration-[0.5s]" href="#">О нас</a></li>
            <li><button>Вход</button></li>
          </ul>
        </nav>
        <div className="flex justify-around items-center">
          <div className="flex flex-col justify-center items-start gap-[30px] mt-[100px]">
            <h2 className="text-[#2C2B35] text-[60px] font-bold">Управление запасами
              <br></br>розничного магазина</h2>
            <p>Использование сервиса 1С-Товары позволяет значительно
              <br></br> упростить работу по формированию заявок поставщику.</p>
            <button className="bg-[#4db952] rounded-[30px] h-[42px] w-[249px] text-[#ffff]">Заказать демонстрацию</button>
          </div>
          <div className='mt-[100px]'>
            <img src={Icon1} alt="Icon1" />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header