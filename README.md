# Donde Curso - Universidad Nacional de Hurlingham (UNAHUR)

## Descripción

**Donde Curso** es una aplicación web independiente diseñada para ayudar a los estudiantes de la Universidad Nacional de Hurlingham (UNAHUR) a encontrar sus aulas de manera rápida y sencilla. Esta aplicación está inspirada en la [web oficial de la universidad](http://dondecurso.unahur.edu.ar/reservas2k/web/classroom_horary.php), pero con mejoras en la experiencia de usuario y un enfoque en la simplicidad y eficiencia.

## Características principales
- Búsqueda de aulas: Permite a los estudiantes buscar aulas específicas según el instituto, la fecha y el horario.

- Interfaz intuitiva: Diseño limpio y fácil de usar, optimizado para una experiencia de usuario fluida.

- Información detallada: Muestra datos como el código del aula, la actividad, el docente, el edificio y más.

- Open Source: Código abierto para que la comunidad pueda contribuir y mejorar la aplicación.
---
## Tecnologías utilizadas
- Frontend:

  - Next.js - Framework de React para renderizado del lado del servidor y generación de sitios estáticos.

  - Tailwind CSS - Framework de CSS para estilos rápidos y personalizables.

  - TypeScript - Para un código más seguro y mantenible.

- Backend:

  - Node.js - Entorno de ejecución para JavaScript del lado del servidor.

  - Express - Framework para construir APIs RESTful.

- Otras herramientas:

  - Vercel - Plataforma de despliegue para aplicaciones Next.js.

  - Git - Control de versiones.
---

## Instalación y configuración
Sigue estos pasos para configurar el proyecto en tu entorno local:

 1. **Clona el repositorio:**

```bash
git clone https://github.com/tu-usuario/donde-curso.git
cd donde-curso
```
 2. **Instala las dependencias:**

```bash
npm install
# o
yarn install
```
 3. **Configura las variables de entorno:** <br>
Crea un archivo .env en la raíz del proyecto y agrega las variables:

```env
ENDPOINT_DONDECURSO = http://dondecurso.unahur.edu.ar/reservas2k/web/classroom_horary.php
```
 4. **Inicia el servidor de desarrollo:**

```bash
npm run dev
# o
yarn dev
```

 5. **Abre la aplicación:** <br>
Visita http://localhost:3000 en tu navegador.

---
## Estructura del proyecto
```
donde-curso/
├── public/            # Archivos estáticos (favicon, imágenes, etc.)
├── src/
│   ├── components/    # Componentes reutilizables de React
│   ├── services/      # Lógica para consumir APIs
│   ├── styles/        # Estilos globales y de Tailwind
│   ├── pages/         # Rutas de la aplicación
│   └── utils/         # Funciones auxiliares
├── .env.local         # Variables de entorno
├── next.config.js     # Configuración de Next.js
├── tailwind.config.js # Configuración de Tailwind CSS
└── README.md          # Este archivo

```
## Cómo contribuir
¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, sigue estos pasos:

 1. Haz un **fork** del repositorio.

 2. Crea una rama para tu feature o corrección:

```bash
git checkout -b nombre-de-tu-rama
```

 3. Realiza tus cambios y haz commit:

```bash
git commit -m "Descripción de tus cambios"
```

 4. Envía un **pull request** a la rama master.
   
---

## Licencia
Este proyecto está bajo la licencia MIT. Siéntete libre de usarlo, modificarlo y distribuirlo.
---
## Créditos
**Inspiración:** Basado en la web oficial de la UNAHUR.

**Desarrollado por:** Branko Muruaga.

