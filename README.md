# Ana Toledo · Web de servicios

Web one-page para servicios de estrategia digital, marketing y social media.
Stack: React + TypeScript + Vite + Tailwind CSS.

## Empezar

```bash
npm install
npm run dev
```

Abre http://localhost:5173.

## Imagen de fondo (skyline de Madrid)

El hero usa la imagen `public/madrid.jpg` como fondo a pantalla completa.
Guarda ahí la imagen del skyline de Madrid que quieras usar (la que adjuntaste
en el chat sirve perfectamente). Mientras el archivo no exista, el hero muestra
un degradado de respaldo en tonos cielo / atardecer.

```
public/
  madrid.jpg   ← coloca aquí tu imagen
```

## Estructura

- `src/components/Hero.tsx` — hero a pantalla completa con animación de letras
- `src/components/Navbar.tsx` — navbar con efecto liquid-glass
- `src/components/InicioExtra.tsx` — Problema/Solución, resumen de servicios, prueba social
- `src/components/Servicios.tsx` — los tres pilares
- `src/components/CasosExito.tsx` — portafolio
- `src/components/SobreMi.tsx` — historia, filosofía y valores
- `src/components/Contacto.tsx` — formulario, WhatsApp, Calendly y redes

## Personalización

Antes de publicar, revisa estos valores en `src/components/Contacto.tsx`:

- `WHATSAPP_URL` — sustituye `34600000000` por tu número
- `CALENDLY_URL` — pon tu enlace real de Calendly
- `INSTAGRAM_URL`, `LINKEDIN_URL`, `EMAIL`

Y los datos en:
- `src/components/CasosExito.tsx` (casos reales)
- `src/components/InicioExtra.tsx` (logos y testimonios)

## Build

```bash
npm run build
npm run preview
```

## Deploy en GitHub Pages (lo que tienes que hacer tú)

El workflow `.github/workflows/deploy.yml` ya está configurado. Para activarlo:

1. **Sube la imagen del skyline de Madrid** al repo en `public/madrid.jpg`.
   Lo más fácil: en la web de GitHub, abre la carpeta `public/`, click en
   "Add file" → "Upload files" y arrastra la imagen.

2. **Activa Pages**: en el repo de GitHub → Settings → Pages →
   "Build and deployment" → Source: **GitHub Actions**.

A partir de ahí, cada push a `main` o a `claude/build-services-website-7fkiu`
construye y despliega automáticamente.

URL final: **https://anniezpt.github.io/ana-toledo/**

(La primera vez tarda 1-2 min. Las siguientes, segundos.)
