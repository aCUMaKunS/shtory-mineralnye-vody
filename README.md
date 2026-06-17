# Шторы Минеральные Воды — лендинг

Одностраничный сайт на чистых HTML/CSS/JS (без фреймворков и сборщиков).

Репозиторий: https://github.com/aCUMaKunS/shtory-mineralnye-vody
Сайт (GitHub Pages): https://acumakuns.github.io/shtory-mineralnye-vody/

## Структура

- `index.html` — разметка страницы
- `styles.css` — стили
- `script.js` — плавный скролл по якорям, текущий год в подвале
- `images/` — фото штор (jpg/webp) и фон hero (пока SVG-заглушка)

## Что заменить перед публикацией

Памятка также продублирована HTML-комментарием в начале `index.html`.

1. **Телефон и WhatsApp** уже заполнены реальным номером +7 (938) 311-11-71.
2. **Telegram** — заменить ссылки `https://t.me/username` на ваш юзернейм.
3. **Фото фона hero** — `images/hero-bg.svg` пока SVG-заглушка, замените на фото интерьера. Фото штор в карточках (`images/классические.jpg`, `римские.jpg`, `рулон.webp`, `блэкаут.jpg`, `тюль.jpg`) уже реальные.

Быстрый поиск всех мест: ищите в `index.html` строки `79383111171`, `username`, `images/`.

## Как посмотреть локально

Просто откройте `index.html` в браузере — никакой сборки не требуется.

## Как опубликовать

### Вариант 1 — GitHub Pages (уже включён для этого репозитория)
Сайт уже опубликован: https://acumakuns.github.io/shtory-mineralnye-vody/
После каждого `git push` в ветку `master` сайт обновится автоматически через 1–2 минуты.

### Вариант 2 — Netlify
1. Зайдите на [netlify.com](https://www.netlify.com) и войдите через GitHub.
2. Нажмите **Add new site → Import an existing project**, выберите репозиторий.
3. Поля сборки можно оставить пустыми (Build command: `-`, Publish directory: `/`).
4. После деплоя сайт будет доступен по адресу вида `https://<random-name>.netlify.app` — домен можно изменить в настройках.
