# React Ecommerce

Proyecto creado como parte del curso de ReactJS. 

Este proyecto utiliza una API estática montada en api.myjson.com, la cual tiene el siguiente formato: 

```
[
  {
    "id": 1,
    "name": "Helado sándwich",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/69/IceCreamSandwich.jpg",
    "extraInfo": "Caja 6 ud. (600 ml)",
    "price": 4990
  }
]

```

El manejo del carro de comras se hace a través del Local Storage del navegador.

## Dependencias

* react-bootstrap
* react-toastify


Para inicializar el proyecto, sigue las siguientes instrucciones: 

1. Clona este repositorio
2. Ejecuta `yarn install`
3. Crea el archivo .env con los datos solicitados en `utils/constants.js`
4. Ejecuta `yarn start` para iniciar el servidor