# Gestiones Proyecto Gluttonia (Base Node.js + Angular)

Este repositorio contiene la arquitectura base y el núcleo funcional para el sistema de gestión de órdenes y pedidos **GluttonIA**. 

### 📌 Nota de Origen y Propósito
El código actual fue desarrollado tomando como referencia y punto de partida una base estructural externa de gestión de empleados. El objetivo principal de este repositorio es **rediseñar, migrar y adaptar** toda esta lógica técnica moderna para integrarla por completo a los requerimientos de negocio de **GluttonIA**.

---

## 🚀 Arquitectura del Proyecto

El sistema está dividido bajo una arquitectura desacoplada de tipo **API REST**, facilitando el mantenimiento y la escalabilidad del software a futuro:

### 🌁 Backend (Node.js & Express)
Ubicado en la carpeta `/Backend`. Se encarga de la lógica de negocio, la conexión a la base de datos y la exposición de los endpoints.
* **Framework:** Express.js
* **Base de Datos:** MongoDB (mapeado a través de Mongoose).
* **Herramientas de desarrollo:** `morgan` (logger de peticiones) y `cors` (intercambio de recursos de origen cruzado).

### 🖥️ Frontend (Angular)
Ubicado en la carpeta `/frontend`. Controla la interfaz de usuario de forma dinámica como una Single Page Application (SPA).
* **Framework:** Angular (TypeScript).
* **Estilos y Componentes:** Estructura modular basada en componentes y servicios para consumir la API.

---

## 🛠️ Requisitos Previos

Para ejecutar este proyecto de forma local, necesitas tener instalado:
* [Node.js](https://nodejs.org) (Versión LTS recomendada)
* [MongoDB](https://mongodb.com) (Instancia local o cluster en la nube con MongoDB Atlas)
* [Angular CLI](https://angular.io) (Instalado de forma global mediante `npm install -g @angular/cli`)

---

## 🔧 Instalación y Despliegue Local

Sigue estos pasos para levantar el entorno de desarrollo en tu máquina:

### 1. Clonar el repositorio
```bash
git clone https://github.com
cd TU-REPOSITORIO
```

### 2. Configurar y levantar el Backend
1. Abre una terminal y navega a la carpeta del servidor:
   ```bash
   cd Backend
   ```
2. Instala las dependencias necesarias:
   ```bash
   npm install
   ```
3. Inicia el servidor en modo de desarrollo (utiliza `nodemon` para reinicios automáticos):
   ```bash
   npm run dev
   ```
   *El servidor correrá por defecto en el puerto `3000` y mostrará el mensaje `DB is connected`.*

### 3. Configurar y levantar el Frontend
1. Abre una segunda terminal y navega a la carpeta de la interfaz:
   ```bash
   cd frontend
   ```
2. Instala las dependencias del cliente:
   ```bash
   npm install
   ```
3. Levanta el servidor de desarrollo de Angular:
   ```bash
   ng serve
   ```
4. Abre tu navegador web e ingresa a `http://localhost:4200`.

---

## 🎯 Hoja de Ruta para la Adaptación (GluttonIA)
* [ ] Modificar los esquemas y modelos de Mongoose para soportar `Pedidos`, `Clientes` y `Menús` en lugar de empleados.
* [ ] Crear las nuevas rutas y controladores de la API REST correspondientes al flujo de un restaurante/comedor.
* [ ] Rediseñar los componentes visuales en Angular para adaptarlos a la identidad gráfica y flujos de usuario de GluttonIA.
* [ ] Implementar la autenticación y roles de usuario (Administrador, Cocina, Repartidor/Mesero).

---
Organizado por **Diego Efren Carrillo Gomez** (diegogeffen1306-creator) para el desarrollo tecnológico colaborativo.
