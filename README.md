# ConsorcioApp

Es una pequeña aplicación desarrollada usando Node, Express y TypeScript

## Requisitos

- Node.js ^20

## Instalación

1. Clona este repositorio en tu máquina local.

    ```
    git clone https://github.com/D4VA/ConsorcioApi.git
    ```

2. Accede al directorio del proyecto.

    ```
    cd ConsorcioApi
    ```

3. Instala las dependencias utilizando npm.

    ```
    npm install
    ```
4. Genera el cliente de prisma.

    ```
    npx prisma generate
    ```

## Uso

Para ejecutar la aplicación localmente, puedes utilizar el siguiente comando:

    ```
    npm run start
    ```

Esto iniciará el servidor de la aplicación en tu navegador en [http://localhost:3000](http://localhost:3000).

## Scripts disponibles

En el archivo `package.json`, encontrarás varios scripts que puedes ejecutar:

- `start`: Inicia el servidor de desarrollo.
- `build`: Construye la aplicación para producción.
