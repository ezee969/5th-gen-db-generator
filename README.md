# Aplicación Web para la Generación de Bases de Datos

## Autores
- Tobias Irastorza
- Ezequiel Olivero

Aplicación web desarrollada con Next.js y TypeScript que te permite crear y modelar una base de datos. Ofrece una interfaz sencilla para definir modelos de bases de datos, propiedades, tipos, relaciones y generar automáticamente modelos Sequelize.

### Prerrequisitos

- Node.js
- Docker (para contenerizar la base de datos)

### Instalación

1. Clona el repositorio utilizando Git:
   ```bash
   git clone git@github.com:ezee969/5th-gen-db-generator.git
   ```
   
2. Navega al directorio del proyecto:
   ```bash
   cd 5th-gen-db-generator
   ```
   
3. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```
   
4. Levantar el contenedor de Docker para tu base de datos:
   ```bash
   make up
   ```
   
5. Inicia la aplicación web:
   ```bash
   npm run start
   ```
   
6. Ejecuta el watcher de `json-server` para la funcionalidad de API:
   ```bash
   npm run watch-db
   ```

### Acceso a la Aplicación

Visita `http://localhost:3000` en tu navegador para comenzar a modelar tu base de datos.

## Contribuciones

Si deseas contribuir a este proyecto, por favor abre un problema o crea una solicitud de extracción.

¡Feliz modelado!
