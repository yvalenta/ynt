# 🚀 Megaplex POC: Portafolio Técnico de Alto Rendimiento

Este documento define el alcance para construir desde cero el proyecto **Megaplex**. El objetivo es crear un **Portafolio Técnico de Alto Impacto** que demuestre el dominio de arquitecturas modernas y la integración de lenguajes de bajo nivel para performance.

---

## 🎯 1. Objetivo General
Construir un portafolio personal que actúe como una vitrina técnica avanzada, utilizando **Rails 8** como backend orquestador, **React 19** para una UX fluida, y **Rust** (Wasm/Native) para resolver problemas de cómputo intensivo y visualización de datos.

---

## 🏗️ 2. Stack Tecnológico
| Capa | Tecnologías | Propósito |
| :--- | :--- | :--- |
| **Backend** | Rails 8 (Headless) + Postgres | CMS de contenido, API de proyectos. |
| **Frontend** | React 19 + Vite + TypeScript | SPA interactiva, routing instantáneo. |
| **Performance** | Rust + Wasm + WebGL/Canvas | Visualizaciones 60 FPS y procesamiento cliente. |
| **Estilos** | CSS Vanilla / Tailwind v4 | Diseño minimalista "Dev-First". |

---

## 🗺️ 3. Fases del Proyecto y Definición de Tareas

A continuación se desglosan las fases en tareas explícitas diseñadas para ser trasladadas directamente a un sistema de tickets (Notion/GitHub Issues).

### Fase 1: Inicialización y Modelado de Datos (Día 1-2)

**Ticket #1: Estructura de Datos Base**
- **Descripción:** Configurar la base de datos para el Portafolio Técnico.
- **Tareas:**
  - [ ] Crear tabla `projects`: `title:string`, `description:text`, `tech_stack:string`, `repo_url:string`, `live_url:string`, `image_url:string`.
  - [ ] Crear tabla `experiences`: `company:string`, `role:string`, `description:text`, `start_date:date`, `end_date:date`.
- **Criterio de Aceptación:** `rails db:migrate` ejecutado exitosamente y modelos funcionales.

**Ticket #2: API Headless Inicial**
- **Descripción:** Configurar controladores para servir los datos del portafolio en formato JSON.
- **Criterio de Aceptación:** GET a `/api/projects` e `/api/experiences` retornan JSON válido.

### Fase 2: UI/UX "Vibe Terminal" (Día 3-5)

**Ticket #3: Layout Base y Diseño Visual**
- **Descripción:** Implementar la estética visual base inspirada en `portfolio.dev` (Dark mode, tipografía mono, espaciado amplio).
- **Criterio de Aceptación:** Navbar funcional y estructura de scroll suave implementada con Tailwind v4.

**Ticket #4: Hidratación de Secciones desde API**
- **Descripción:** Conectar los componentes React con los datos de Rails usando TanStack Query.
- **Criterio de Aceptación:** Las secciones "Proyectos" y "Experiencia" muestran datos reales de la base de datos.

### Fase 3: El Componente Rust - Showcase (Día 6-9)

**Ticket #5: Configuración Toolchain Rust/Wasm**
- **Descripción:** Integrar el entorno de compilación de Rust en el flujo de Vite.
- **Criterio de Aceptación:** El código Rust se compila a `.wasm` y se carga en el frontend.

**Ticket #6: Visualización Interactiva (Rust + Canvas)**
- **Descripción:** Crear un componente interactivo en el Hero que ejecute una simulación física en Rust.
- **Criterio de Aceptación:** Renderizado fluido a 60 FPS manejando miles de elementos.

### Fase 4: El Módulo "PDF Benchmark" (Día 10-12)

**Ticket #7: Generador de CV PDF (Wasm)**
- **Descripción:** Lógica en Rust para generar un PDF del CV directamente en el cliente.
- **Criterio de Aceptación:** Descarga instantánea de un PDF generado localmente.

**Ticket #8: UI de Benchmarking**
- **Descripción:** Componente comparativo de performance entre JS y Rust (Wasm).
- **Criterio de Aceptación:** Visualización clara de métricas de tiempo.

---

## 🚀 4. Guía Paso a Paso Inmediata

1. **New App:** Inicializa tu proyecto Rails 8 y Vite (si aún no lo has hecho).
2. **Setup:** Configura PostgreSQL en `database.yml`.
3. **Migrate:** Genera las tablas básicas del Ticket #1.
4. **Design:** Crea tu primer componente React para el Layout.
5. **Start:** Arranca el servidor `bin/dev` y comienza con el desarrollo.
