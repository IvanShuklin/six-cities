# Six Cities

Учебное SPA-приложение сервиса аренды жилья, разработанное в рамках курса HTML Academy.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-8B5CF6?logo=redux)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)

## О проекте

Six Cities — приложение для поиска жилья в разных городах Европы. Пользователь может просматривать предложения, открывать подробную информацию о жилье, читать отзывы, авторизоваться и добавлять понравившиеся варианты в избранное.

## Возможности

- просмотр списка предложений
- фильтрация по городам
- сортировка предложений
- просмотр подробной информации об объекте
- карта с расположением жилья (Leaflet)
- авторизация пользователя
- добавление и удаление избранного
- просмотр и отправка отзывов
- обработка состояний загрузки и ошибок

## Стек технологий

- React
- TypeScript
- Redux Toolkit
- React Router
- Axios
- Leaflet
- Vite

## Демо

https://six-cities-seven.vercel.app/

## Запуск проекта

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

## Проверка линтером

```bash
npm run lint
```

## Структура проекта

```
src/
 ├── components/
 ├── pages/
 ├── hooks/
 ├── services/
 ├── store/
 ├── types/
 └── utils/
```

## Что было реализовано
- SPA на React
- маршрутизация приложения
- глобальное состояние через Redux Toolkit
- асинхронные запросы с createAsyncThunk
- работа с REST API
- защищенные маршруты
- типизация TypeScript
- адаптивный интерфейс
