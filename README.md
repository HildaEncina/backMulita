# 🚛 La Mulita - Sistema de Gestión de Carga de Camiones

**La Mulita** es una aplicación de logística diseñada para mejorar la gestión de camiones, paquetes y rutas de una empresa de transporte. Este sistema ayuda a organizar la carga según peso, destino y disponibilidad de camiones, optimizando así el proceso logístico.

## 💠 Tecnologías utilizadas

* 🔡️ **Frontend**: React
* ⚙️ **Backend**: Node.js + Express
* 📔️ **Base de datos**: MongoDB
* 🌐 **API RESTful**
* 🧪 Jest (futuro agregado para pruebas)

## 📦 Funcionalidades principales

* Carga de paquetes con destino y peso.
* Asignación de camiones a provincias.
* Validación de capacidad del camión.
* Registro de paquetes pendientes por falta de camión o capacidad.
* Reincorporación automática de paquetes pendientes.
* CRUD de provincias, camiones y paquetes.

## 🤩 Estructura del proyecto

```
/la-mulita-backend
├── controllers/
├── models/
├── routes/
├── services/
├── config/
├── .env
├── server.js
└── README.md
```

## ⚙️ Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/hildaEncina/la-mulita-backend.git
cd la-mulita-backend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crear un archivo `.env` en la raíz con las siguientes variables:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/laMulitaDB
```

### 4. Ejecutar el servidor

```bash
npm start
```

## 🔧 Próximas mejoras

* Desarrollo del frontend en React.
* Panel administrativo para visualizar camiones, paquetes y pendientes.
* Autenticación y roles.
* Documentación Swagger para la API.
* Testing unitario y de integración.

## 💡 Motivación del proyecto

Este proyecto nace como iniciativa personal para fortalecer mis habilidades Full Stack y demostrar capacidad de resolución de problemas reales en el área de logística. Es parte de mi portfolio como desarrolladora junior.

## 👩‍💻 Autor

Desarrollado con ❤️ por **[Hilda Encina](https://github.com/hildaEncina)**
*Analista de Sistemas | Desarrolladora Full Stack *

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).





