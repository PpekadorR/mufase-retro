# MuFase Retro FX Suite — Web de canje para GitHub Pages

Web estática, responsive y sin dependencias externas. **Versión 2.0: 15 fichas técnicas HTML individuales** con función, controles y aplicaciones habituales, además de descripciones técnicas en el catálogo. Usa los logos oficiales y **capturas reales** de los 15 plugins Retro. Incluye un canje de 15 códigos mediante SHA-256 y una imagen PNG como archivo de descarga temporal.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo (por ejemplo `mufase-retro-redeem`).
2. Sube **los archivos y las carpetas de este ZIP** a la raíz del repositorio (`index.html`, `css/`, `js/`, `assets/`, `downloads/`). No subas una carpeta envolvente adicional.
3. En GitHub, abre **Settings → Pages**. En **Build and deployment**, selecciona **Deploy from a branch**, rama `main` y carpeta `/(root)`, luego guarda.
4. La página quedará accesible en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`. La URL exacta aparecerá en GitHub Pages.
5. Para probar el canje usa alguno de los códigos del archivo **privado que se entrega por separado**. Los códigos están en un `.txt` que no pertenece a este ZIP.

No uses el botón «Download ZIP» del propio repositorio como método de proteger la suite: todo lo publicado será accesible al público.

## Cambiar la descarga temporal por tu instalador

Abre **`js/config.js`** y cambia:

```js
window.MUFASE_DOWNLOAD = {
  url: 'downloads/MuFase_Retro_Instalador.exe',
  fileName: 'MuFase_Retro_Instalador.exe',
  label: 'Descargar MuFase Retro FX Suite',
  isDemo: false
};
```

Después coloca el archivo real en `downloads/MuFase_Retro_Instalador.exe`, conserva la misma ruta, confirma que no exceda los límites de GitHub y vuelve a publicar. Si el instalador es grande, mejor usa un enlace de descarga a GitHub Releases (o almacenamiento con descargas directas) en `url`. Para enlaces externos, el navegador puede ignorar el atributo `download` y seguir el enlace en su lugar.

**La imagen de prueba incluida NO es un programa VST3 ni un instalador ejecutable.**

## Códigos y protección

- Los **15 códigos válidos** se proporcionan en un archivo `.txt` separado. **No lo subas a GitHub, ni siquiera en un directorio que no salga en el sitio:** si el repositorio es público, todo su contenido se puede leer.
- `js/access.js` solo contiene el **hash SHA-256** de cada código. No publica los códigos legibles.
- La comprobación es **local, en el navegador**. Los códigos pueden reutilizarse y la descarga se puede obtener conociendo su URL. No ofrece uso único, contadores globales, autenticación real, licencias ni protección contra compartir el archivo.
- Para códigos de un solo uso con descarga protegida debes usar un backend (por ejemplo Cloudflare Worker + KV/D1 o similar) y almacenamiento privado; **GitHub Pages por sí solo no puede hacerlo**.

## Probar en Visual Studio Code

Con la extensión Live Server, abre `index.html`, o inicia un servidor local en esta carpeta:

```bash
python -m http.server 8000
```

Y entra en `http://localhost:8000/` (o publícalo en GitHub Pages, que usa HTTPS). El acceso directo `file://` puede impedir la API criptográfica usada para validar códigos en algunos navegadores.

## Personalización

- `css/style.css`: paleta, dimensiones, paneles y tipografía.
- `assets/plugins/`: 15 capturas completas en WebP + miniaturas ligeras.
- `js/catalog.js`: nombres, categorías y descripciones de cada plugin.
- `js/access.js`: hashes de los códigos autorizados.
- `js/config.js`: archivo de descarga y modo demostración/instalador.
- `downloads/`: PNG de prueba; reemplazar por el archivo correcto cuando corresponda.

## Validación realizada

Se probaron el catálogo de 15 plugins, filtrado de dinámica, galería ampliada, respuesta ante un código incorrecto, canje correcto y descarga PNG; las capturas de escritorio y móvil se generaron desde la interfaz programada. Para probar el flujo con Web Crypto se necesita un contexto seguro HTTPS o localhost.

## Fichas técnicas

Se agregaron `plugins/MuEQ.html`, `plugins/MuComp.html`, etc. (15 fichas independientes, una por plugin). Cada tarjeta del catálogo ahora abre su página. Para editar el texto descriptivo de una ficha, modifica su archivo HTML y actualiza `js/catalog.js` si quieres cambiar también la descripción corta de la tarjeta. Se conservan sin cambios los archivos de canje, sus hashes y la descarga PNG.

**Nota:** las fichas describen la finalidad y controles habituales de cada tipo de procesador; no certifican comportamiento, prestaciones ni compatibilidad del VST3 sin ensayos en un DAW.
