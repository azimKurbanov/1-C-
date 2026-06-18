import React from 'react';
import Logo from '../assets/logo.png';
import Icon1 from '../assets/icon1.png';

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
            <li><button className="px-5 py-2 border border-gray-300 rounded-full hover:bg-gray-100">Вход</button></li>
          </ul>
        </nav>

        {/* Hero Section */}
        <div className="flex justify-around items-center">
          <div className="flex flex-col justify-center items-start gap-[30px] mt-[100px]">
            <h2 className="text-[#2C2B35] text-[60px] font-bold leading-tight">
              Управление запасами<br />розничного магазина
            </h2>
            <p className="text-lg text-gray-600 max-w-lg">
              Использование сервиса 1С-Товары позволяет значительно<br />
              упростить работу по формированию заявок поставщику.
            </p>
            <button className="bg-[#4db952] hover:bg-[#3fa244] rounded-[30px] h-[42px] w-[249px] text-white font-medium transition">
              Заказать демонстрацию
            </button>
          </div>
          <div className='mt-[100px]'>
            <img src={Icon1} alt="Icon1" />
          </div>
        </div>
      </header>

      {/* === SERVICES BLOCK (с разными размерами) === */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-center text-4xl font-bold text-[#2C2B35] mb-12">
          Наши возможности
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          
          {/* Управление запасами - большая карточка */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition">
            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-3xl">
              ⚙️
            </div>
            <h3 className="text-2xl font-semibold mb-4">Управление запасами</h3>
            <p className="text-gray-600 leading-relaxed">
              Сервис 1С-Товары позволяет рассчитать необходимое количество товаров на полках (уровень запасов), помогает организовать систему контроля за остатками товаров, а также вовремя и в нужном количестве закупать у поставщиков.
            </p>
            <button className="mt-8 border border-[#4db952] text-[#4db952] hover:bg-[#4db952] hover:text-white px-8 py-3 rounded-full text-sm font-medium transition">
              Подробнее
            </button>
          </div>

          {/* Автозаказ товаров */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 text-2xl">
              📦
            </div>
            <h3 className="text-xl font-semibold mb-3">Автозаказ товаров</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Сервис позволяет рассчитать прогноз спроса. Работает с равномерным и редким спросом для разных видов товаров. Автоматически подбирает подходящий метод расчета.
            </p>
            <button className="mt-8 bg-[#4db952] hover:bg-[#3fa244] text-white px-6 py-2.5 rounded-full text-sm font-medium transition w-full">
              Подробнее
            </button>
          </div>

          {/* Анализ магазина */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-2xl">
              📊
            </div>
            <h3 className="text-xl font-semibold mb-3">Анализ магазина</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Система контроля упущенных продаж позволяет увеличить выручку. Средний чек, минимальный и максимальный чек — это пример показателей, которые анализирует сервис.
            </p>
            <button className="mt-8 border border-[#4db952] text-[#4db952] hover:bg-[#4db952] hover:text-white px-6 py-2.5 rounded-full text-sm font-medium transition w-full">
              Подробнее
            </button>
          </div>

          {/* Прогнозирование спроса */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 text-2xl">
              📈
            </div>
            <h3 className="text-xl font-semibold mb-3">Прогнозирование спроса</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Сервис 1С-Товары позволяет рассчитать прогноз спроса. Работает с равномерным и редким спросом для разных видов товаров.
            </p>
            <button className="mt-8 border border-[#4db952] text-[#4db952] hover:bg-[#4db952] hover:text-white px-6 py-2.5 rounded-full text-sm font-medium transition w-full">
              Подробнее
            </button>
          </div>

          {/* Управление поставками */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4 text-2xl">
              🚚
            </div>
            <h3 className="text-xl font-semibold mb-3">Управление поставками</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Сервис 1С-Товары позволяет рассчитать прогноз спроса для разных видов товаров. Автоматически подбирает подходящий метод расчета.
            </p>
            <button className="mt-8 border border-[#4db952] text-[#4db952] hover:bg-[#4db952] hover:text-white px-6 py-2.5 rounded-full text-sm font-medium transition w-full">
              Подробнее
            </button>
          </div>

          {/* Управление ассортиментом - широкая */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition">
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-3xl">
              📋
            </div>
            <h3 className="text-2xl font-semibold mb-4">Управление ассортиментом</h3>
            <p className="text-gray-600 leading-relaxed">
              Сервис 1С-Товары позволяет определять ассортиментную матрицу. Быстро и просто принять решение о том какие товары вывести из ассортимента, а какие увеличить на полках магазина.
            </p>
            <button className="mt-8 border border-[#4db952] text-[#4db952] hover:bg-[#4db952] hover:text-white px-8 py-3 rounded-full text-sm font-medium transition">
              Подробнее
            </button>
          </div>

          {/* Управление продажами */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4 text-2xl">
              💰
            </div>
            <h3 className="text-xl font-semibold mb-3">Управление продажами</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Система контроля упущенных продаж позволяет увеличить выручку. Анализирует средний чек и предлагает инструменты для управления ценой и торговой наценкой.
            </p>
            <button className="mt-8 border border-[#4db952] text-[#4db952] hover:bg-[#4db952] hover:text-white px-6 py-2.5 rounded-full text-sm font-medium transition w-full">
              Подробнее
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Header;