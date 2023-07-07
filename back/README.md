# API clientes

- API para listar usuarios

## Instalar

- Crear una base de datos vacía en una instancia de MySQL local.

- Guardar el archivo `.env.example` como `.env` y cubrir los datos necesarios.

- Ejecutar el comando `npm install` o `npm i` para instalar las dependencias.

- Ejecutar `npm run initDB` para crear las tablas necesarias en la base de datos anteriormente creada.

- Ejecutar `npm run dev` o `npm start` para lanzar el servidor.

## Base de datos

- **`users:`** id, name`*`, age, profession`*`, created_at, modified_at.

## Endpoints del usuario

- **GET** - [`/api/users`] - Lista a todos los usuarios.
