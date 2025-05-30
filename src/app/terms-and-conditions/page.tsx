import Link from "next/link";
import React, { FC } from "react";

const TermsAndConditions: FC = () => {
  return (
    <main className="max-w-3xl mx-auto py-30 px-4 text-base leading-relaxed text-gray-800">
      <div className="container">
        <h1 className="text-3xl font-bold mb-6">Умови використання</h1>
        <p className="mb-4">
          Ласкаво просимо до FlowerLab! Ці умови використання ("Умови")
          регулюють ваше використання нашого вебсайту та послуг. Продовжуючи
          користуватися нашим сайтом, ви погоджуєтеся з цими Умовами.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-4">1. Послуги</h2>
        <p className="mb-4">
          Ми надаємо послуги з продажу квітів, повітряних кульок та солодощів.
          Опис кожного товару чи послуги наведено на відповідних сторінках
          сайту.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-4">2. Замовлення</h2>
        <p className="mb-4">
          Щоб зробити замовлення, вам необхідно надати дійсні контактні дані.
          Підтвердження замовлення буде надіслано на вказану електронну адресу
          чи телефон.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-4">3. Оплата</h2>
        <p className="mb-4">
          Усі замовлення оплачуються у валюті, вказаній на сайті. Ми приймаємо
          різні способи оплати, зазначені на сторінці оформлення замовлення.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-4">4. Доставка</h2>
        <p className="mb-4">
          Доставка здійснюється відповідно до обраного вами способу доставки. Ми
          докладаємо всіх зусиль для своєчасної доставки, але не несемо
          відповідальності за затримки, які не залежать від нас.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-4">5. Відповідальність</h2>
        <p className="mb-4">
          Ми не несемо відповідальності за будь-які збитки, пов’язані з
          використанням наших послуг, за винятком випадків, передбачених
          законодавством.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-4">6. Зміни умов</h2>
        <p className="mb-4">
          Ми залишаємо за собою право змінювати ці Умови в будь-який час. Зміни
          набирають чинності з моменту їх публікації на цій сторінці.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-4">
          7. Контактна інформація
        </h2>
        <p className="mb-4">
          Якщо у вас є питання, будь ласка, зв’яжіться з нами:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            Телефон:
            <Link
              href="tel:+380934388466"
              className="text-blue-600 hover:underline ml-1"
            >
              +380 934 38 8466
            </Link>
          </li>
        </ul>
        <p className="mt-6 text-sm text-gray-500">
          Останнє оновлення: Травень 2025
        </p>
      </div>
    </main>
  );
};

export default TermsAndConditions;
