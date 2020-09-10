# poster
Заповнення та оновлення сторінки
Написати клієнт-серверне застосування, в якому:
- серверна частина забезпечує зберігання деякої інформації (наприклад, набір статей або блог);
- інтерфейс адміністратора забезпечує можливість додавання нових одиниць інформації;
- клієнтський інтерфейс забезпечує можливість перегляду сторінки: клієнтський скрипт на основі JS отримує від сервера наявну інформацію у вигляді JSON-даних та забезпечує форматоване відображення цих даних на веб-сторінці. Заповнення сторінки здійснювати шляхом формування відповідних елементів на основі DOM.
Реалізувати AJAX: після додавання нової інформації за допомогою адміністративного інтерфейсу сторінка перегляду має оновлюватися без явної ініціації з боку користувача.
Серверна частина має бути реалізована на Node.js.
Формат зберігання даних на сервері: база даних MongoDB.