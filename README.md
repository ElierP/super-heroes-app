# 🦸‍♂️ Super Heroes App

Aplicación Full Stack JavaScript desarrollada como prueba técnica.
Permite listar héroes y consultar sus detalles individuales de forma dinámica, conectando un backend en Node.js + Express con un frontend en React + TypeScript.

# 🚀 Tecnologías utilizadas

## 🧱 Backend
- Node.js + Express
- TypeScript
- Jest (pruebas unitarias)
- Nodemon (modo desarrollo)

## 🎨 Frontend
- React + TypeScript
- React Router DOM (ruteo entre vistas)
- Axios (consumo del backend)
- Bootstrap 5 (estilos y diseño responsivo)
- LocalStorage (persistencia offline básica)

## 🧩 Estructura del proyecto
```
marvel-heroes-app
├──backend
│   ├──data
│   │   └──db.json
│   ├──src
│   │   ├──controllers
│   │   │   └──superHeroesC.ts
│   │   ├──routes
│   │   │   └──superHeroesR.ts
│   │   ├──app.ts
│   │   └──server.ts
│   ├──test
│   │   └──heroes.test.ts
│   ├──jest.config.ts
│   ├──nodemon.json
│   ├──package-lock.json
│   ├──package.json
│   └──tsconfig.json
├──frontend
│   ├──public
│   │   ├──favicon.ico
│   │   └──index.html
│   ├──src
│   │   ├──components
│   │   │   ├──Footer.tsx
│   │   │   └──Header.tsx
│   │   ├──pages
│   │   │   ├──HeroDetail.tsx
│   │   │   └──Home.tsx
│   │   ├──services
│   │   │   └──api.ts
│   │   ├──App.tsx
│   │   ├──index.css
│   │   └──index.tsx
│   ├──package-lock.json
│   ├──package.json
│   ├──tsconfig.json
│   └──.gitignore
├──package-lock.json
├──README.md
└──.gitignore
```
# ⚙️ Cómo ejecutar el proyecto localmente
El proyecto está dividido en **backend** y **frontend**, por lo que deben iniciarse en **dos terminales separadas**.

### 1️⃣ Clonar el repositorio
```
git clone https://github.com/ElierP/super-heroes-app.git
cd super-heroes-app
```
### 2️⃣ Iniciar el Backend
```
cd ../super-heroes-app/backend
npm i
npm run dev
```
El servidor se iniciará en http://localhost:8090
### 3️⃣ Iniciar el Frontend
```
cd ../super-heroes-app/frontend
npm i
npm start
```
La aplicación se iniciará en http://localhost:3000 y se comunicará automáticamente con el backend.
## 🧠 Funcionalidades principales

- 📜 Listado general de héroes (/) con imágenes y nombres.
- 🔍 Detalle individual de cada héroe (/heroes/id/:id), mostrando información biográfica y de atributos.
- 🔄 Navegación sin recargar gracias a React Router.
- 📱 Diseño responsivo implementado con Bootstrap 5.
- 💾 Persistencia local mediante localStorage:
    - Si no hay conexión a internet, la app muestra los datos almacenados localmente.

## 🧪 Pruebas unitarias
```
cd backend
npm run test
```
# 🧑‍💻 Autor

Elier Efren Mata Piña

Prueba técnica — Desarrollador Full Stack JavaScript

GitHub: https://github.com/ElierP
