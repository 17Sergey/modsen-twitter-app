# Tестовое задание приложение Modsen Twitter

## Содержание

- [Техническое задание](#Техническое-задание)
- [Необходимый функционал](#Необходимый-функционал)
- [Пример графического представления](#Пример-графического-представления)
- [Используемые технологии](#Используемые-технологии)
- [Тестирование](#Тестирование)
- [Полезные ссылки](#Полезные-ссылки)

## Техническое задание

Реализовать приложение, схожее по своей функциональности с платформой Twitter с использование server-side rendering(NextJS).

## Необходимый функционал:

- Авторизация пользователя;
- Регистрация пользователя;
- Просмотр постов пользователя и других пользователей;
- Возможность создания нового поста;
- Поиск и отображение постов и пользователей;
- Валидация введенных данных;
- Изменение данных пользователя;
- Смена темы приложения.

## Пример графического представления:

Ссылка на макет: [Макет "Modsen Twitter"](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=0%3A1&t=T3Vik0PUWZKXqlCN-0).

### Также проект предполагает:

- Организацию файловой структуры react приложения. Ссылка на структуру: [Cтруктура проекта](https://github.com/mkrivel/structure);
- Придерживаться требований по написанию и организации кода react приложения. Ссылка на требования: [Требования к тестовому заданию](https://github.com/annaprystavka/requirements);
- Деплой приложения на любые хостинговые сервисы (Netlify, vercel, и др.);
- Настроить конфигурации **_babel_**, **_eslint_**, **_prettier_**, **_husky_**, **_commitlint_**;
- Использование TypeScript для типизирования и уменьшения количества потенциальных багов;
- Обработку ошибок через паттерн **_Error Boundaries_**;
- Использование алиасов для импортирования файлов;
- Оптимизацию дизайна под мобильные устройства;
- Покрытие тестами всего приложения (cypress, unit);
- Анимацию при наведения, нажатии на кнопки, прокрутки карусели и слайдеров, появлении элементов на странице при рендере и скролле;
- Хранение данных о пользователе, твиты в firebase;
- Реализация Loader для отображения запасного UI при подгрузке данных;
- Запрет на использование стронних библиотек для стилей.

## Описание экранов

1. Экран [Sign Up](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=1%3A368&t=T3Vik0PUWZKXqlCN-0)(Страница Sign Up)

На данной странице пользователь может ввести свое имя, почту, дату рождения для того, чтобы зарегистрироваться. Все поля должны быть обязательными.
При нажатии на "Use Google" пользователя переходит на страницу [авторизации](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=1%3A869&t=T3Vik0PUWZKXqlCN-0).
На этой странице пользователь может зарегистрироваться с помощью google-аккаунта или перейти на страницу [регистрации](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=1%3A350&t=T3Vik0PUWZKXqlCN-0).

2. Экран [Log In](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Twitter?node-id=1%3A350&t=V0ikbnKD4YdfNcCd-0)(Страница Log In)

На данной странице пользователь может зайти в аккаунт введя свой логин. В случае того, если аккаунта не существует, оповестить об этом пользователя.
При нажатии на "Sign up to Twitter" пользователь переходит на страницу [авторизации](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=1%3A869&t=T3Vik0PUWZKXqlCN-0).

3. Экран [Profile](https://www.figma.вom/file/KaвuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=1%3A58&t=T3Vik0PUWZKXqlCN-0)(Страница Profile)

На странице профиля отображается информация о пользователе. При нажатии на "edit profile" открывается модальное окно в котором можно добавить/изменить данные о пользователе: имя, фамилия, пароль, пол, ссылка на телеграмм.
В категории "What’s happening" можно создать новый пост, также есть возможность добавить картинку, поставить лайк и удалить созданный пост. Необходимо добавить ограничение на ввод текста при создании поста и ограничение на размер и разрешение добавляемой картинки.
В категории Tweets отображаются созданные пользователем посты.
В поле ввода "Search Twitter" можно ввести название поста и в списке должен появиться пост, при нажатии на который он открывается в новом окне.
При нажатии на Tweet(в сайдбаре) открывается модальное окно, в котором можно также создать новый пост(также с добавлением картинки).
Предусмотрена возможность выхода из аккаунта при нажатии на "Log out".

4. Экран [Feed](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=1%3A465&t=T3Vik0PUWZKXqlCN-0)(Страница Home)

В шапке страницы есть возможность сменить общую тему приложения.
На странице есть возможность создать новый пост, который добавится на текущей странице и на странице самого пользователя, а также отображаются посты других пользователей. Сами посты должны подгружаться по 5 штук, чтобы сильно не подвисал пользовательский интерфейс из-за большого количества постов.
В поиске "Search Users" происходит список пользователей(поиск должен происходить на стороне firebase и была возможность у твитов поставить лайк).

5. Экран [icons](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=6%3A279&t=T3Vik0PUWZKXqlCN-0) содержит вспомогательные иконки для приложения.

## Используемые технологии

### Для react

- **_node.js_** - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код);
- **_nextJS_** - фреймворк на JavaScript, использующий React для построения server-side render;
- **_babel_** - транспайлер, преобразующий код из одного стандарта в другой;
- **_eslint_** - линтер для JavaScript кода;
- **_prettier_** - инструмент для автоформатирования кода;
- **_husky_** - современное решение для управления Git хуками;
- **_commitlint_** - инструмент, который проверяет сообщения commit-ов на соответствие общепринятым стандартам их описаний;
- **_firebase_** - платформа для разработки приложений, предоставляет облачное хранилище, аналитику и многое другое;
- **_yarn_** - менеджер пакетов;
- **_react-hook-forms_** - библиотека для обработки элементов ввода формы;
- **_SCSS_** - препроцессор, позволяющий писать код для стилей CSS;
- **_typescript_** - строго типизированный язык для уменьшения количества потенциальных багов;
- **_cypress_** — e2e тестирование для web-приложений;
- **_jest_** — фреймворк для unit-тестирования.

## Тестирование

Реализовать unit и e2e тестирование c полным покрытием функционала приложения:

- Модуль авторизации;
- Модуль регистрации;
- Модуль смены темы;
- Модуль поиска пользователей и твитов;
- Модуль создания нового твита;
- Модуль данных о пользователе.

### Для react native

Will be soon...

## Полезные ссылки

[React](https://react.dev/reference/react)

[React hooks](https://react.dev/reference/react/hooks)

[React router dom](https://reactrouter.com/en/main)

[NextJS](https://nextjs.org/docs)

[Firebase](https://firebase.google.com/docs/reference/js?hl=ru)

[Firebase emulator](https://firebase.google.com/docs/emulator-suite?hl=ru)

[Yup](https://www.npmjs.com/package/yup)

[Eslint](https://eslint.org/docs/user-guide/configuring)

[Babel](https://babeljs.io/docs/en/configuration)

[Тестирование Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

[Тестирование Jest](https://jestjs.io/ru/docs/getting-started)

[SCSS](https://sass-lang.com/documentation/)

[Redux-persist](https://github.com/rt2zz/redux-persist)

[Redux-saga](https://redux-saga.js.org/)

[Husky](https://dev.to/ivadyhabimana/setup-eslint-prettier-and-husky-in-a-node-project-a-step-by-step-guide-946)

[Commitlint](https://github.com/conventional-changelog/commitlint)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

