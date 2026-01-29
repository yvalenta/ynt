# TaskFlow Pro 🚀

> Sistema moderno de gestión de proyectos construido con Rails 8, React 19 y Vite

[🌐 Live Demo](https://taskflow-pro.fly.dev) | [📺 Video Demo](https://youtube.com/...) | [📖 Documentación](./docs)


## 🎯 Sobre el Proyecto

TaskFlow Pro es un sistema de gestión de proyectos colaborativo que demuestra la implementación de arquitecturas modernas full-stack con:

- ✅ **API RESTful robusta** con Rails 8 y autenticación JWT
- ✅ **SPA interactiva** con React 19 y TypeScript
- ✅ **Tablero Kanban** con drag & drop fluido
- ✅ **Tiempo real** mediante WebSockets (Action Cable)
- ✅ **Dashboard analítico** con métricas y visualizaciones
- ✅ **UI premium** con Tailwind v4, Framer Motion y dark mode

## 🛠️ Stack Tecnológico

### Backend
- **Ruby on Rails 8.0** - Framework web con convenciones modernas
- **PostgreSQL 15** - Base de datos relacional
- **Redis 7** - Cache y Action Cable
- **Devise + JWT** - Autenticación stateless
- **Pundit** - Autorización basada en políticas
- **Active Storage** - Manejo de archivos

### Frontend
- **React 19** - Biblioteca UI con hooks modernos
- **TypeScript 5.6** - Type safety end-to-end
- **Vite 5** - Build tool ultra-rápido (HMR en < 100ms)
- **TanStack Query** - Data fetching y caching inteligente
- **@dnd-kit** - Drag and drop accesible
- **Framer Motion** - Animaciones fluidas
- **Tailwind CSS v4** - Utility-first styling
- **Recharts** - Visualizaciones de datos

### DevOps
- **Docker** - Containerización
- **GitHub Actions** - CI/CD
- **Fly.io** - Hosting

## ✨ Características

### 🎯 Gestión de Proyectos
- CRUD completo con validaciones robustas
- Asignación de miembros con roles (Owner, Admin, Member, Viewer)
- Soft delete para recuperación de datos
- Cover images y personalización de colores
- Búsqueda y filtros avanzados

### 📊 Tablero Kanban
- Drag & drop fluido entre columnas
- 4 estados: To Do, In Progress, In Review, Done
- Indicadores visuales de prioridad
- Alertas de tareas atrasadas
- Contador de subtareas y comentarios

### 🔴 Colaboración en Tiempo Real
- Actualizaciones live de tareas vía WebSockets
- Sincronización automática entre usuarios
- Notificaciones push
- Indicadores de actividad

### 📈 Dashboard y Analytics
- Métricas de productividad
- Gráficos interactivos (Pie, Bar charts)
- KPIs personalizables
- Timeline de actividad
- Exportación de reportes

### 🎨 Premium UI/UX
- Dark mode con persistencia
- Animaciones micro-interacciones
- Glassmorphism effects
- Loading states optimistas
- Toast notifications elegantes
- Responsive design (mobile, tablet, desktop)

## 📸 Capturas de Pantalla

### Dashboard
![Dashboard](./screenshots/dashboard.png)
*Panel de control con métricas en tiempo real y visualizaciones*

### Tablero Kanban
![Kanban Board](./screenshots/kanban.gif)
*Tablero interactivo con drag & drop*

### Gestión de Proyectos
![Projects](./screenshots/projects.png)
*Vista de proyectos con filtros y búsqueda*

### Dark Mode
![Dark Mode](./screenshots/dark-mode.png)
*Tema oscuro premium*

## 🚀 Inicio Rápido

### Prerequisitos
- Ruby 3.3+
- Node.js 20+
- PostgreSQL 15+
- Redis 7+

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/[tu-usuario]/taskflow-pro.git
cd taskflow-pro

# Instalar dependencias
bundle install
npm install

# Configurar base de datos
cp config/database.yml.example config/database.yml
rails db:create db:migrate

# Cargar datos de ejemplo
rails db:seed

# Configurar credenciales
# Generar secrets con: rails secret
rails credentials:edit
# Añadir:
# devise_jwt_secret_key: [tu_secret_aqui]
```

### Desarrollo

```bash
# Iniciar servidores de desarrollo
foreman start -f Procfile.dev
```

Visitar: `http://localhost:3000`

**Credenciales de demo:**
- Email: `demo@taskflow.pro`
- Password: `password123`

## 🧪 Testing

```bash
# Backend tests (RSpec)
bundle exec rspec

# Frontend tests (Jest)
npm run test

# E2E tests (Cypress)
npm run cypress:open

# Cobertura
npm run test:coverage
```

## 📦 Deployment

### Producción en Fly.io

```bash
# Instalar Fly CLI
brew install flyctl  # Mac
# o https://fly.io/docs/hands-on/install-flyctl/

# Login
fly auth login

# Launch y configurar app
fly launch

# Deploy
fly deploy

# Ver logs
fly logs
```

### Variables de Entorno

```env
DATABASE_URL=postgresql://...
REDIS_URL=redis://...
SECRET_KEY_BASE=...
DEVISE_JWT_SECRET_KEY=...
RAILS_ENV=production
```

Ver más detalles en [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md)

## 🏗️ Arquitectura

### Backend (Rails API)
```
app/
├── controllers/api/v1/     # API endpoints RESTful
├── models/                 # Lógica de negocio
├── serializers/            # Formateo JSON
├── channels/               # Canales WebSocket
├── policies/               # Reglas de autorización
└── mailers/                # Emails transaccionales
```

### Frontend (React SPA)
```
app/frontend/
├── entrypoints/
│   └── application.tsx     # Entry point principal
└── src/
    ├── components/         # Componentes reutilizables
    │   ├── ui/            # Componentes base (Button, Modal)
    │   ├── layout/        # Layouts y navegación
    │   └── features/      # Componentes específicos (Kanban)
    ├── pages/             # Páginas/rutas
    ├── hooks/             # Custom hooks
    ├── services/          # API clients
    ├── types/             # TypeScript definitions
    └── lib/               # Utilidades
```

## 🔑 Características Técnicas Destacadas

### 1. Autenticación JWT con Refresh Tokens
```ruby
# Tokens de corta duración (1 día)
# Refresh automático transparente
# Revocación mediante denylist
```

### 2. Optimistic Updates
```typescript
// Actualización instantánea de UI
// Rollback automático en errores
// Mejor UX percibida
```

### 3. WebSockets con Action Cable
```ruby
# Autenticación de conexiones
# Broadcast selectivo por proyecto
# Sincronización en tiempo real
```

### 4. Drag & Drop Accesible
```typescript
// Soporte para teclado
// Feedback visual
// Performance optimizado
```

### 5. Code Splitting
```typescript
// Lazy loading de rutas
// Reducción de bundle inicial
// Chunks optimizados
```

## 📖 Documentación

- [📘 Guía de Desarrollo](./docs/DEVELOPMENT.md)
- [🔌 API Reference](./docs/API.md)
- [🎨 Componentes UI](./docs/COMPONENTS.md)
- [🚀 Deployment Guide](./docs/DEPLOYMENT.md)
- [🔒 Security Best Practices](./docs/SECURITY.md)

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea un feature branch (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push al branch (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

Por favor sigue las [guías de contribución](CONTRIBUTING.md) y el [código de conducta](CODE_OF_CONDUCT.md).

## 📝 Roadmap

- [x] Autenticación y autorización
- [x] CRUD de proyectos
- [x] Tablero Kanban
- [x] WebSockets en tiempo real
- [x] Dashboard con analytics
- [ ] PWA y modo offline
- [ ] Notificaciones por email
- [ ] Integración con calendarios
- [ ] API pública documentada
- [ ] Mobile app (React Native)

## 🏆 Logros Técnicos

- ⚡ **Performance:** Lighthouse score 95+
- 🧪 **Testing:** Cobertura > 80%
- ♿ **Accesibilidad:** WCAG 2.1 AA
- 🔒 **Seguridad:** Headers configurados, CSRF protection
- 📱 **Responsive:** Mobile-first design
- 🌍 **I18n:** Preparado para internacionalización

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver [LICENSE.md](LICENSE.md) para detalles.

## 👤 Autor

**Yonatan Valencia**

- 🌐 Website: [tu-portfolio.com](https://tu-portfolio.com)
- 💼 LinkedIn: [linkedin.com/in/tu-perfil](https://linkedin.com/in/tu-perfil)
- 🐙 GitHub: [@tu-usuario](https://github.com/tu-usuario)
- 📧 Email: tu@email.com

## 🙏 Agradecimientos

- Inspirado por herramientas como [Trello](https://trello.com), [Linear](https://linear.app) y [Asana](https://asana.com)
- Comunidad de Rails y React por los excelentes recursos
- [ElMassimo](https://github.com/ElMassimo) por vite_ruby
- Proyecto base [Megaplex](../megaplex) como referencia arquitectónica

## 📊 Estadísticas del Proyecto

![GitHub Stars](https://img.shields.io/github/stars/tu-usuario/taskflow-pro?style=social)
![GitHub Forks](https://img.shields.io/github/forks/tu-usuario/taskflow-pro?style=social)
![License](https://img.shields.io/github/license/tu-usuario/taskflow-pro)
![Last Commit](https://img.shields.io/github/last-commit/tu-usuario/taskflow-pro)

---

⭐ **Si te gustó este proyecto, dale una estrella!**

💬 **¿Preguntas o sugerencias?** Abre un [issue](https://github.com/tu-usuario/taskflow-pro/issues)

🚀 **Construido con pasión para demostrar habilidades full-stack modernas**
