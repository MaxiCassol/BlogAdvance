# Blog Profesional

<br />

## **📌 OBJETIVOS**

-  Construir un Servidor utilizando las tecnologías: **Node** y **Express** .
-  Afirmar y conectar los conceptos aprendidos en la carrera.
-  Aprender mejores prácticas.
-  Aprender y practicar el workflow de GIT.

<br />

## **⚠️ IMPORTANTE**

Es necesario contar mínimamente con la última versión estable de NodeJS y NPM. Asegúrate de contar con ella para poder instalar correctamente las dependencias necesarias para correr el proyecto. Actualmente las versiones necesarias son:

-  **Node**: 18.16.0 o mayor
-  **NPM**: 6.14.16 o mayor

Para verificar que versión tienes instalada:

```bash
  node -v
  npm -v
```
<br />

## **📋 PARA COMENZAR...**

1. Clona el repositorio en tu computadora para comenzar a trabajar. 

2. Será necesario que crees, **desde mysql (shell o MySQL Workbench)**, una base de datos llamada **`blog`**. Si no realizas este paso de manera manual no podrás avanzar con la iniciación proyecto:

   ```bash
    CREATE DATABASE blog;
   ```

3. En la carpeta **principal del proyecto** deberás crear un archivo llamado: **`.env`** que tenga la siguiente forma:

   ```javascript
    DB_USER=usuarioDeMySQL
    DB_PASSWORD=passwordDeMySQL
    DB_HOST=localhost:3306
   ```

4. Reemplazar **`usuarioDeMySQL`** y **`passwordDeMySQL`** con tus propias credenciales para conectarte a MySQL. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

5. Instala las dependencias, ejecutando el comando **`npm install`** en la terminal.

6. Inicializa el servidor, ejecutando el comando **`npm run start`** en la terminal. Si el servidor está corriendo, deberías ver algo así:

   ```
    [nodemon] starting `node index.js`
    Server raised in PORT: 8800
   ```

<br />

## **🔍 ENDPOINTS**

En la ubicación **src\requests** encontrará archivos terminados en **`.rest`** con: el método, ruta y/o datos a enviar para las peticiones.
Recomendamos instalar la extension **REST Client**. Esta habilitara un botón (Send Request) en dichos archivos para realizar pruebas de petición rápidamente.

<br />

## **💻 EXTENSIONES PARA DESARROLLADORES!!**

1. **Code Spell Check** (ortografía)

2. **Spanish - Code Spell Checker** (necesita pequeña configuración)

3. **ESLint** (formato de código)

4. **Error Lens** (ver los errores en el código)

5. **Prettier** (se puede configurar para que al guardar formatee automáticamente siguiendo las reglas)

<br />

## **🔄 COMANDOS GIT**

- **git remote update origin --prune** estando en main actualiza las ramas

- **git add .** agrega todos los archivos guardados para hacer commit

- **git commit -m 'mensaje'** realiza un nuevo commit con un mensaje

- **git commit --amend** modifica el ultimo commit (cambiar archivos y mensaje, en rama propia)

- **git push** sube el commit a la nube 

- **git push --force** sube el commit a la nube de manera forzosa para luego de hacer un amend (cuidado! solo en rama propia)
