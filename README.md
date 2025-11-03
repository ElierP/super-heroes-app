# 🦸‍♂️ Super Heroes App

Aplicación **Full Stack JavaScript** desarrollada como prueba técnica.  
Permite listar varios héroes y consultar sus detalles de forma dinámica.

---

## 🚀 Tecnologías utilizadas

### Backend
- Node.js + Express
- TypeScript
- Jest (para pruebas unitarias)
- Nodemon (para desarrollo)

### Frontend
- React + TypeScript
- React Router DOM
- Axios
- Bootstrap 5

---

## 🧩 Estructura del proyecto

```
super-heroes-app
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


---

## ⚙️ Cómo ejecutar el proyecto

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/marvel-heroes-app.git
cd super-heroes-app

cd backend
npm install
npm run dev


cd ../frontend
npm install
npm start

🧠 Funcionalidades

Listado de héroes (/)
Página de detalle (/heroes/:id)
Navegación entre páginas sin recargar
Estilos responsivos (Bootstrap)

🧪 Pruebas unitarias

Ejecutar las pruebas del backend:
cd backend
npm test
