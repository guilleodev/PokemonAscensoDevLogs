# Pokemon Ascenso Devlog

Sitio de desarrollo de `Pokemon Ascenso`, construido con React y Vite.

## Scripts

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Estructura

- `src/data/devlogs.js`: versiones publicas, titulos, resumenes y media.
- `src/data/site.js`: textos globales de la web.
- `public/media/`: capturas, videos y materiales visuales.

## Media automatica

No hace falta editar el codigo para empezar a ver imagenes o videos.

### Home

Hero de portada:

- `public/media/home/hero/01.png`
- `public/media/home/hero/02.jpg`
- `public/media/home/hero/03.webp`

Galeria de capturas de la Home:

- `public/media/home/captures/01.png`
- `public/media/home/captures/02.png`
- `public/media/home/captures/03.jpg`
- etc.

### Devlogs

Cada entrada de `Devlogs` busca automaticamente media dentro de:

- `public/media/versions/<numero-version>/`

Ejemplos:

- `public/media/versions/0.8.0/01.png`
- `public/media/versions/0.8.0/02.jpg`
- `public/media/versions/0.8.0/03.mp4`
- `public/media/versions/0.7.0/01.webp`

La web intenta cargar automaticamente los slots `01` a `04`.

### Videos de fondo para los heroes

- `public/media/home/hero-video/01.mp4`
- `public/media/devlogs/hero-video/01.mp4`

### Logo del juego

- `public/media/brand/logo/01.png`

El logo se usa automaticamente en la cabecera y en los heroes.

### Captura del archivo original de carpetas

- `public/media/devlogs/archive/01.png`

Se muestra al principio de la pagina `Devlogs` para explicar el origen real de las 200+ versiones internas.

## Despliegue

### Netlify

Usa estos valores:

- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages

La configuracion de Vite usa `base: "./"` para que el build estatico funcione bien tambien en despliegues desde subcarpeta.
