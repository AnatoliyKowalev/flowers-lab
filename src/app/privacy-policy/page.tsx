import React, { FC } from "react";
import Link from "next/link";
import { YEAR } from "@/lib/constants";

const PrivacyPolicyPage: FC = () => (
  <main className="max-w-3xl mx-auto p-6 py-30 text-base leading-relaxed text-gray-800">
    <div className="container">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Політика конфіденційності FlowerLab ({YEAR})
      </h1>
      <p className="mb-4">
        У FlowerLab ми цінуємо вашу конфіденційність і дбаємо про захист ваших
        персональних даних. Ця політика конфіденційності описує, як ми збираємо,
        використовуємо та зберігаємо інформацію, яку ви надаєте нам при
        користуванні нашим сайтом та сервісами.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">1. Збір інформації</h2>
      <p className="mb-4">Ми можемо збирати такі дані:</p>
      <ul className="list-disc list-inside ml-4">
        <li>
          Ваше ім’я та контактні дані (номер телефону, електронна пошта тощо).
        </li>
        <li>
          Інформацію про замовлення (товари, адреса доставки, коментарі тощо).
        </li>
        <li>Інформацію, яку ви надаєте добровільно, звертаючись до нас.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Використання інформації
      </h2>
      <p className="mb-4">Ми використовуємо зібрану інформацію, щоб:</p>
      <ul className="list-disc list-inside ml-4">
        <li>Обробляти ваші замовлення та доставляти товари.</li>
        <li>Відповідати на ваші запитання та звернення.</li>
        <li>Поліпшувати наші сервіси та ваш досвід користування.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">3. Захист даних</h2>
      <p className="mb-4">
        Ми застосовуємо технічні та організаційні заходи для захисту вашої
        інформації від несанкціонованого доступу, зміни або знищення.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">4. Ваші права</h2>
      <p className="mb-4">Ви маєте право:</p>
      <ul className="list-disc list-inside ml-4">
        <li>Отримати інформацію про обробку ваших даних.</li>
        <li>Виправити неточності або видалити ваші дані.</li>
        <li>Відкликати згоду на обробку (у випадках, коли вона потрібна).</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">5. Зв'язок з нами</h2>
      <p className="mb-4">
        Якщо у вас виникли питання або ви хочете скористатися своїми правами,
        будь ласка,
        <Link href="tel:+380934388466" className="text-blue-600 underline ml-1">
          зв’яжіться з нами
        </Link>
        .
      </p>
      <p className="text-sm text-gray-500 mt-6">
        Останнє оновлення: Травень 2025 року
      </p>
    </div>
  </main>
);

export default PrivacyPolicyPage;
