# ConsorcioApi

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


## Uso del API
## URL BASE
    ```
    /api/order
    ```
    
# POST /api/order/
Crea una orden de compra con la información del cliente y los productos seleccionados.
```javascript
{
  "customerName": "Persona01",
  "customerEmail": "Persona01@example.com",
  "items": [
    {
      "productId": 1,
      "productName": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "category": "men's clothing",
      "quantity": 1
    }
  ]
}
```

| Campo                 | Tipo     | Requerido | Descripción                                             |
| --------------------- | -------- | --------- | ------------------------------------------------------- |
| `customerName`        | `string` | ✅         | Nombre del cliente que realiza la orden.                |
| `customerEmail`       | `string` | ✅         | Correo del cliente.                                     |
| `items`               | `array`  | ✅         | Lista de productos incluidos en la orden.               |
| `items[].productId`   | `number` | ✅         | Identificador único del producto.                       |
| `items[].productName` | `string` | ✅         | Nombre del producto comprado.                           |
| `items[].price`       | `number` | ✅         | Precio unitario del producto.                           |
| `items[].category`    | `string` | ✅         | Categoría del producto (por ejemplo: “men’s clothing”). |
| `items[].quantity`    | `number` | ✅         | Cantidad de unidades compradas.                         |

Respuesta Exitosa - 201 Created

```javascript
{
      "totalBeforeDiscount": 109.95.,
      "totalDiscount": 0.00,
      "totalAfterDiscount": 109.95
}
```

| Código | Descripción                                 |
| ------ | ------------------------------------------- |
| 400    | Faltan campos requeridos o formato inválido |
| 500    | Error interno al crear la orden             |

# GET /api/order/
Devuelve un listado de todas las órdenes registradas en el sistema.

    ```
    /api/order/
    ```

| Código | Descripción                          |
| ------ | ------------------------------------ |
| 500    | Error interno al obtener las órdenes |


# GET /api/order/:id
Devuelve los detalles completos de una orden específica, incluyendo los ítems comprados
Ejemplo:
    ```
        GET /api/order/39
    ```
    
| Nombre | Tipo     | Requerido | Descripción                |
| ------ | -------- | --------- | -------------------------- |
| `id`   | `number` | ✅         | ID de la orden a consultar |


| Código | Descripción                |
| ------ | -------------------------- |
| 404    | Orden no encontrada        |
| 500    | Error interno del servidor |


## Scripts disponibles

En el archivo `package.json`, encontrarás varios scripts que puedes ejecutar:

- `start`: Inicia el servidor de desarrollo.
- `build`: Construye la aplicación para producción.
