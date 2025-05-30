# 🚛 La Mulita - Sistema de Gestión de Carga de Camiones

**La Mulita** es una aplicación de logística diseñada para mejorar la gestión de camiones, paquetes y rutas de una empresa de transporte. Este sistema ayuda a organizar la carga según peso, destino y disponibilidad de camiones, optimizando así el proceso logístico.

## 🛠️ Tecnologías utilizadas

- 🖥️ **Frontend**: React  
- ⚙️ **Backend**: Node.js + Express  
- 🗄️ **Base de datos**: MongoDB  
- 🌐 **API RESTful**  
- 🧪 Jest (futuro agregado para pruebas)

## 📦 Funcionalidades principales

- Carga de paquetes con destino y peso.
- Asignación de camiones a provincias.
- Validación de capacidad del camión.
- Registro de paquetes pendientes por falta de camión o capacidad.
- Reincorporación automática de paquetes pendientes.
- CRUD de provincias, camiones y paquetes.

## 🧩 Estructura del proyecto

/la-mulita-backend
├── controllers/
├── models/
├── routes/
├── services/
├── config/
├── .env
├── server.js
└── README.md

bash
Copiar
Editar

## ⚙️ Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/hildaEncina/la-mulita-backend.git
cd la-mulita-backend
2. Instalar dependencias
bash
Copiar
Editar
npm install
3. Configurar variables de entorno
Crear un archivo .env en la raíz con las siguientes variables:

env
Copiar
Editar
PORT=3000
MONGO_URI=mongodb://localhost:27017/laMulitaDB
4. Ejecutar el servidor
bash
Copiar
Editar
npm start
📌 Próximas mejoras
Desarrollo del frontend en React.

Panel administrativo para visualizar camiones, paquetes y pendientes.

Autenticación y roles.

Documentación Swagger para la API.

Testing unitario y de integración.

💡 Motivación del proyecto
Este proyecto nace como iniciativa personal para fortalecer mis habilidades Full Stack y demostrar capacidad de resolución de problemas reales en el área de logística. Es parte de mi portfolio como desarrolladora junior.

🧑‍💻 Autor
Desarrollado con ❤️ por Hilda Encina
Analista de Sistemas | Desarrolladora Full Stack en formación

📄 Licencia
Este proyecto está bajo la licencia MIT.

yaml
Copiar
Editar

---

✅ Este formato está diseñado para que puedas **copiar todo de una sola vez**, sin ajustes extra. Si más adelante querés también el README del frontend o documentación de endpoints, avisame y lo armamos.





Dijiste:
lo seguis haciendo por partes, dame todo junto


ChatGPT dijo:
¡Gracias por tu paciencia, Hilda! Acá tenés el README completo, en un solo bloque, todo seguido, para que lo copies y pegues directamente sin dividir ni partes sueltas:

markdown
Copiar
Editar
# 🚛 La Mulita - Sistema de Gestión de Carga de Camiones

**La Mulita** es una aplicación de logística diseñada para mejorar la gestión de camiones, paquetes y rutas de una empresa de transporte. Este sistema ayuda a organizar la carga según peso, destino y disponibilidad de camiones, optimizando así el proceso logístico.

## 🛠️ Tecnologías utilizadas

- 🖥️ **Frontend**: React  
- ⚙️ **Backend**: Node.js + Express  
- 🗄️ **Base de datos**: MongoDB  
- 🌐 **API RESTful**  
- 🧪 Jest (futuro agregado para pruebas)

## 📦 Funcionalidades principales

- Carga de paquetes con destino y peso.
- Asignación de camiones a provincias.
- Validación de capacidad del camión.
- Registro de paquetes pendientes por falta de camión o capacidad.
- Reincorporación automática de paquetes pendientes.
- CRUD de provincias, camiones y paquetes.

## 🧩 Estructura del proyecto

/la-mulita-backend
├── controllers/
├── models/
├── routes/
├── services/
├── config/
├── .env
├── server.js
└── README.md

bash
Copiar
Editar

## ⚙️ Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/hildaEncina/la-mulita-backend.git
cd la-mulita-backend
2. Instalar dependencias
bash
Copiar
Editar
npm install
3. Configurar variables de entorno
Crear un archivo .env en la raíz con las siguientes variables:

env
Copiar
Editar
PORT=3000
MONGO_URI=mongodb://localhost:27017/laMulitaDB
4. Ejecutar el servidor
bash
Copiar
Editar
npm start
📌 Próximas mejoras
Desarrollo del frontend en React.

Panel administrativo para visualizar camiones, paquetes y pendientes.

Autenticación y roles.

Documentación Swagger para la API.

Testing unitario y de integración.

💡 Motivación del proyecto
Este proyecto nace como iniciativa personal para fortalecer mis habilidades Full Stack y demostrar capacidad de resolución de problemas reales en el área de logística. Es parte de mi portfolio como desarrolladora junior.

🧑‍💻 Autor
Desarrollado con ❤️ por Hilda Encina
Analista de Sistemas | Desarrolladora Full Stack 



