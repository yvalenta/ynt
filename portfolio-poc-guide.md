# 🚀 Guía Completa: POC Portfolio - Sistema de Gestión de Proyectos Moderno

> **Proyecto:** TaskFlow Pro - Sistema de gestión de proyectos con Rails 8 + React 19 + Vite  
> **Objetivo:** Crear un POC impresionante para portafolio profesional  
> **Stack:** Rails 8, React 19, Vite, TypeScript, Tailwind v4, PostgreSQL  
> **Fecha:** Enero 2026

---

## 📋 Índice

1. [Visión del Proyecto](#visión-del-proyecto)
2. [Stack Tecnológico](#stack-tecnológico)
3. [Funcionalidades del POC](#funcionalidades-del-poc)
4. [Configuración Inicial](#configuración-inicial)
5. [Backend - Rails API](#backend-rails-api)
6. [Frontend - React + Vite](#frontend-react-vite)
7. [Funcionalidades Avanzadas](#funcionalidades-avanzadas)
8. [Optimizaciones y Performance](#optimizaciones-y-performance)
9. [Deployment](#deployment)
10. [Showcase en Portafolio](#showcase-en-portafolio)

---

## 🎯 Visión del Proyecto

### ¿Qué es TaskFlow Pro?

Un **sistema de gestión de proyectos** moderno y colaborativo que demuestra dominio en:
- Arquitectura full-stack moderna
- APIs RESTful robustas
- UI/UX premium con animaciones
- WebSockets y tiempo real
- State management avanzado
- TypeScript y type safety
- Testing automatizado
- Performance optimization

### ¿Por qué impresiona en un portafolio?

✅ **Stack moderno** (Rails 8, React 19, Vite)  
✅ **Funcionalidades complejas** (drag & drop, tiempo real, auth)  
✅ **Design premium** (Tailwind v4, Framer Motion, glassmorphism)  
✅ **Best practices** (TypeScript, TanStack Query, testing)  
✅ **Production-ready** (optimizaciones, deployment, monitoring)

---

## 🛠️ Stack Tecnológico

### Backend
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Ruby | 3.3+ | Lenguaje base |
| Rails | 8.0.2+ | Framework backend |
| PostgreSQL | 15+ | Base de datos |
| Redis | 7+ | Cache y Action Cable |
| Devise | 4.9+ | Autenticación |
| JWT | 2.8+ | Tokens API |
| Pundit | 2.3+ | Autorización |
| Active Storage | Built-in | Upload de archivos |
| Action Cable | Built-in | WebSockets |
| Sidekiq | 7+ | Background jobs |

### Frontend
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| React | 19.1+ | UI framework |
| TypeScript | 5.6+ | Type safety |
| Vite | 5.4+ | Build tool |
| TanStack Query | 5.85+ | Data fetching |
| React Router | 7.8+ | Routing |
| Zustand | 4.5+ | State management global |
| React Hook Form | 7.62+ | Formularios |
| Zod | 3.23+ | Validación schemas |
| Framer Motion | 12+ | Animaciones |
| @dnd-kit | 8+ | Drag & drop |
| Recharts | 2.15+ | Gráficos |
| Date-fns | 4+ | Manejo de fechas |
| React Hot Toast | 2.4+ | Notificaciones |
| Tailwind CSS | 4.1+ | Estilos |

### DevOps
- Docker & Docker Compose
- GitHub Actions (CI/CD)
- Render / Fly.io (Hosting)
- Cloudinary (Assets CDN)

---

## 🎨 Funcionalidades del POC

### Módulo 1: Autenticación y Usuarios
- [x] Registro de usuarios con validaciones
- [x] Login con JWT tokens
- [x] Perfil de usuario editable
- [x] Avatar upload con Active Storage
- [x] Recuperación de contraseña
- [x] Refresh tokens automático

### Módulo 2: Proyectos
- [x] CRUD completo de proyectos
- [x] Categorías y tags
- [x] Cover images
- [x] Asignación de miembros
- [x] Roles (Owner, Admin, Member, Viewer)
- [x] Búsqueda y filtros avanzados

### Módulo 3: Tareas (Kanban Board)
- [x] Tablero Kanban interactivo
- [x] Drag & drop de tareas entre columnas
- [x] Estados personalizables
- [x] Asignación de tareas
- [x] Prioridades (Low, Medium, High, Urgent)
- [x] Fechas de vencimiento
- [x] Subtareas (checklist)
- [x] Comentarios en tareas
- [x] Adjuntos de archivos

### Módulo 4: Dashboard y Analytics
- [x] Gráficos de productividad
- [x] Métricas en tiempo real
- [x] Tareas por estado
- [x] Proyectos activos vs completados
- [x] Timeline de actividad
- [x] KPIs personalizados

### Módulo 5: Colaboración en Tiempo Real
- [x] Notificaciones push con Action Cable
- [x] Indicadores de "quién está viendo"
- [x] Actualizaciones live de cambios
- [x] Chat de equipo (bonus)

### Módulo 6: Extras Premium
- [x] Dark mode con persistencia
- [x] Exportación a PDF
- [x] Atajos de teclado
- [x] Modo offline (PWA)
- [x] Internacionalización (i18n)
- [x] Animaciones micro-interacciones

---

## 🔧 Configuración Inicial

### Paso 1: Crear el Proyecto Rails

```bash
# Navegar a tu directorio de proyectos
cd ~/Documents/developer

# Crear nuevo proyecto Rails con PostgreSQL
rails new taskflow-pro --database=postgresql --api-only=false

cd taskflow-pro
```

### Paso 2: Configurar Gemfile

```ruby
# Gemfile
source "https://rubygems.org"

ruby "3.3.0"

gem "rails", "~> 8.0.2"
gem "pg", "~> 1.1"
gem "puma", ">= 5.0"

# Frontend
gem "vite_rails"
gem "js_from_routes"

# Autenticación y Autorización
gem "devise", "~> 4.9"
gem "devise-jwt", "~> 0.12"
gem "pundit", "~> 2.3"

# API
gem "jsonapi-serializer"
gem "rack-cors"

# Background Jobs
gem "sidekiq", "~> 7.0"
gem "redis", "~> 5.0"

# File Upload
gem "image_processing", "~> 1.2"
gem "aws-sdk-s3", require: false # o Cloudinary

# Utilities
gem "friendly_id", "~> 5.5"
gem "paranoia", "~> 2.6" # Soft delete
gem "kaminari", "~> 1.2" # Paginación

# Seed Data
gem "faker", "~> 3.2"

# Performance
gem "bootsnap", require: false
gem "solid_cache"
gem "solid_queue"
gem "solid_cable"

group :development, :test do
  gem "debug", platforms: %i[ mri windows ]
  gem "rspec-rails", "~> 6.1"
  gem "factory_bot_rails", "~> 6.4"
  gem "shoulda-matchers", "~> 6.0"
  gem "database_cleaner-active_record"
end

group :development do
  gem "web-console"
  gem "annotate" # Comentarios de schema en modelos
  gem "bullet" # N+1 queries detector
end
```

```bash
bundle install
```

### Paso 3: Instalar Vite Rails

```bash
bundle exec vite install
```

Esto crea:
- `config/vite.json`
- `vite.config.ts`
- `app/frontend/`

### Paso 4: Configurar Base de Datos

```bash
# Crear bases de datos
rails db:create

# Nota: las migraciones las haremos en pasos posteriores
```

### Paso 5: Instalar Dependencias de Node.js

```bash
# Inicializar package.json si no existe
npm init -y

# Core React y TypeScript
npm install react react-dom
npm install -D @types/react @types/react-dom @types/node

# Vite y Plugins
npm install -D vite @vitejs/plugin-react vite-plugin-rails vite-plugin-ruby

# Routing y State
npm install react-router-dom @tanstack/react-query zustand

# Forms y Validación
npm install react-hook-form zod @hookform/resolvers

# UI y Animaciones
npm install framer-motion @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities
npm install recharts date-fns react-hot-toast

# Tailwind CSS v4
npm install -D tailwindcss @tailwindcss/vite postcss autoprefixer

# Icons
npm install lucide-react

# Rails Integration
npm install @js-from-routes/client @rails/request.js @rails/actioncable

# Dev Dependencies - Types
npm install -D @types/rails__actioncable @types/rails__request.js
```

### Paso 6: Configurar Vite

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import { resolve } from 'path'
import ViteRails from 'vite-plugin-rails'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    ViteRails(),
    react({
      jsxImportSource: 'react',
      babel: {
        plugins: [
          ['@babel/plugin-proposal-decorators', { legacy: true }]
        ]
      }
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './app/frontend/src'),
      '@components': resolve(__dirname, './app/frontend/src/components'),
      '@pages': resolve(__dirname, './app/frontend/src/pages'),
      '@hooks': resolve(__dirname, './app/frontend/src/hooks'),
      '@lib': resolve(__dirname, './app/frontend/src/lib'),
      '@services': resolve(__dirname, './app/frontend/src/services'),
      '@types': resolve(__dirname, './app/frontend/src/types'),
    }
  },
  root: './app/frontend',
  publicDir: 'public',
  build: {
    outDir: '../../public/vite',
    emptyOutDir: true,
    manifest: true,
    sourcemap: true,
    rollupOptions: {
      input: 'app/frontend/entrypoints/application.tsx'
    }
  },
  server: {
    port: 3036,
    hmr: {
      host: 'localhost',
      protocol: 'ws'
    }
  }
})
```

### Paso 7: Configurar TypeScript

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,

    /* Path Mapping */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./app/frontend/src/*"],
      "@components/*": ["./app/frontend/src/components/*"],
      "@pages/*": ["./app/frontend/src/pages/*"],
      "@hooks/*": ["./app/frontend/src/hooks/*"],
      "@lib/*": ["./app/frontend/src/lib/*"],
      "@services/*": ["./app/frontend/src/services/*"],
      "@types/*": ["./app/frontend/src/types/*"]
    }
  },
  "include": ["app/frontend/**/*"],
  "exclude": ["node_modules", "public", "vendor"]
}
```

### Paso 8: Configurar Tailwind CSS

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/frontend/**/*.{js,jsx,ts,tsx}',
    './app/views/**/*.html.erb',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
```

```bash
# Instalar plugins de Tailwind
npm install -D @tailwindcss/forms @tailwindcss/typography
```

### Paso 9: Crear Estructura de Directorios Frontend

```bash
# Crear estructura completa
mkdir -p app/frontend/entrypoints
mkdir -p app/frontend/src/{components,pages,hooks,lib,services,types,store,constants}
mkdir -p app/frontend/src/components/{ui,layout,features}
mkdir -p app/frontend/src/pages/{auth,projects,tasks,dashboard}
```

### Paso 10: Configurar Procfile.dev

```yaml
# Procfile.dev
vite: bin/vite dev
web: bin/rails server -p 3000
worker: bundle exec sidekiq
redis: redis-server
```

---

## 🗄️ Backend - Rails API

### Fase 1: Configurar Devise y JWT

#### 1.1 Instalar Devise

```bash
rails generate devise:install
rails generate devise User
```

#### 1.2 Modificar el modelo User

```ruby
# db/migrate/XXXXXX_devise_create_users.rb
class DeviseCreateUsers < ActiveRecord::Migration[8.0]
  def change
    create_table :users do |t|
      ## Database authenticatable
      t.string :email,              null: false, default: ""
      t.string :encrypted_password, null: false, default: ""

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at

      ## Rememberable
      t.datetime :remember_created_at

      ## Trackable
      t.integer  :sign_in_count, default: 0, null: false
      t.datetime :current_sign_in_at
      t.datetime :last_sign_in_at
      t.string   :current_sign_in_ip
      t.string   :last_sign_in_ip

      ## Custom fields
      t.string :first_name
      t.string :last_name
      t.string :username, null: false
      t.text :bio
      t.string :role, default: 'member'
      t.string :timezone, default: 'UTC'
      t.jsonb :preferences, default: {}

      t.timestamps null: false
    end

    add_index :users, :email,                unique: true
    add_index :users, :reset_password_token, unique: true
    add_index :users, :username,             unique: true
  end
end
```

#### 1.3 Configurar JWT

```ruby
# config/initializers/devise.rb
Devise.setup do |config|
  config.mailer_sender = 'noreply@taskflowpro.com'
  config.jwt do |jwt|
    jwt.secret = Rails.application.credentials.devise_jwt_secret_key!
    jwt.dispatch_requests = [
      ['POST', %r{^/api/auth/login$}]
    ]
    jwt.revocation_requests = [
      ['DELETE', %r{^/api/auth/logout$}]
    ]
    jwt.expiration_time = 1.day.to_i
  end
end
```

```bash
# Generar secret key
rails credentials:edit
# Añadir: devise_jwt_secret_key: <tu_secret_generado>
```

#### 1.4 Configurar modelo User

```ruby
# app/models/user.rb
class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :trackable, :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

  has_one_attached :avatar

  has_many :project_memberships, dependent: :destroy
  has_many :projects, through: :project_memberships
  has_many :owned_projects, class_name: 'Project', foreign_key: 'owner_id'
  has_many :assigned_tasks, class_name: 'Task', foreign_key: 'assignee_id'
  has_many :created_tasks, class_name: 'Task', foreign_key: 'creator_id'
  has_many :comments, dependent: :destroy

  validates :username, presence: true, uniqueness: true, 
            length: { minimum: 3, maximum: 30 },
            format: { with: /\A[a-zA-Z0-9_]+\z/ }
  validates :first_name, :last_name, presence: true
  validates :email, presence: true, uniqueness: true

  enum role: { member: 'member', admin: 'admin', super_admin: 'super_admin' }

  def full_name
    "#{first_name} #{last_name}"
  end

  def avatar_url
    avatar.attached? ? Rails.application.routes.url_helpers.url_for(avatar) : nil
  end
end
```

#### 1.5 Crear JwtDenylist

```bash
rails generate model JwtDenylist jti:string:index exp:datetime
rails db:migrate
```

```ruby
# app/models/jwt_denylist.rb
class JwtDenylist < ApplicationRecord
  include Devise::JWT::RevocationStrategies::Denylist

  self.table_name = 'jwt_denylists'
end
```

### Fase 2: Crear Modelos Principales

#### 2.1 Generar Migraciónes

```bash
# Proyectos
rails generate model Project name:string description:text status:string owner:references color:string archived:boolean --no-test-framework

# Membresías de Proyecto
rails generate model ProjectMembership user:references project:references role:string --no-test-framework

# Categorías
rails generate model Category name:string color:string project:references --no-test-framework

# Tareas
rails generate model Task title:string description:text status:string priority:string due_date:datetime completed_at:datetime project:references assignee:references creator:references category:references position:integer --no-test-framework

# Subtareas
rails generate model Subtask title:string completed:boolean task:references position:integer --no-test-framework

# Comentarios
rails generate model Comment content:text user:references task:references --no-test-framework

# Adjuntos
rails generate model Attachment name:string file_type:string task:references user:references --no-test-framework

# Actividad/Log
rails generate model Activity action:string trackable:references user:references project:references metadata:jsonb --no-test-framework
```

#### 2.2 Configurar Migraciones

```ruby
# db/migrate/XXXXXX_create_projects.rb
class CreateProjects < ActiveRecord::Migration[8.0]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.text :description
      t.string :status, default: 'active'
      t.references :owner, null: false, foreign_key: { to_table: :users }
      t.string :color, default: '#3B82F6'
      t.boolean :archived, default: false
      t.string :slug
      t.jsonb :settings, default: {}
      t.datetime :deleted_at

      t.timestamps
    end

    add_index :projects, :slug, unique: true
    add_index :projects, :status
    add_index :projects, :archived
    add_index :projects, :deleted_at
  end
end
```

```ruby
# db/migrate/XXXXXX_create_tasks.rb
class CreateTasks < ActiveRecord::Migration[8.0]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.text :description
      t.string :status, default: 'todo'
      t.string :priority, default: 'medium'
      t.datetime :due_date
      t.datetime :completed_at
      t.references :project, null: false, foreign_key: true
      t.references :assignee, foreign_key: { to_table: :users }
      t.references :creator, null: false, foreign_key: { to_table: :users }
      t.references :category, foreign_key: true
      t.integer :position, default: 0
      t.integer :estimated_hours
      t.jsonb :metadata, default: {}
      t.datetime :deleted_at

      t.timestamps
    end

    add_index :tasks, :status
    add_index :tasks, :priority
    add_index :tasks, :due_date
    add_index :tasks, :position
    add_index :tasks, :deleted_at
  end
end
```

```bash
# Ejecutar migraciones
rails db:migrate
```

#### 2.3 Configurar Modelos con Validaciones y Asociaciones

```ruby
# app/models/project.rb
class Project < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  acts_as_paranoid

  belongs_to :owner, class_name: 'User'
  has_many :project_memberships, dependent: :destroy
  has_many :members, through: :project_memberships, source: :user
  has_many :tasks, dependent: :destroy
  has_many :categories, dependent: :destroy
  has_many :activities, dependent: :destroy

  has_one_attached :cover_image

  validates :name, presence: true, length: { minimum: 3, maximum: 100 }
  validates :status, inclusion: { in: %w[active on_hold completed archived] }

  enum status: {
    active: 'active',
    on_hold: 'on_hold',
    completed: 'completed',
    archived: 'archived'
  }

  scope :active, -> { where(archived: false) }
  scope :by_owner, ->(user_id) { where(owner_id: user_id) }

  def completion_percentage
    return 0 if tasks.count.zero?
    ((tasks.where(status: 'done').count.to_f / tasks.count) * 100).round
  end

  def member?(user)
    owner == user || members.include?(user)
  end
end
```

```ruby
# app/models/task.rb
class Task < ApplicationRecord
  acts_as_paranoid

  belongs_to :project
  belongs_to :creator, class_name: 'User'
  belongs_to :assignee, class_name: 'User', optional: true
  belongs_to :category, optional: true

  has_many :subtasks, -> { order(position: :asc) }, dependent: :destroy
  has_many :comments, -> { order(created_at: :desc) }, dependent: :destroy
  has_many :attachments, dependent: :destroy

  has_many_attached :files

  validates :title, presence: true, length: { minimum: 3, maximum: 200 }
  validates :status, inclusion: { in: %w[todo in_progress in_review done] }
  validates :priority, inclusion: { in: %w[low medium high urgent] }

  enum status: {
    todo: 'todo',
    in_progress: 'in_progress',
    in_review: 'in_review',
    done: 'done'
  }

  enum priority: {
    low: 'low',
    medium: 'medium',
    high: 'high',
    urgent: 'urgent'
  }

  scope :by_status, ->(status) { where(status: status) }
  scope :by_assignee, ->(user_id) { where(assignee_id: user_id) }
  scope :overdue, -> { where('due_date < ?', Time.current).where.not(status: 'done') }
  scope :due_soon, -> { where(due_date: Time.current..3.days.from_now).where.not(status: 'done') }

  before_save :set_completed_at

  def overdue?
    due_date.present? && due_date < Time.current && status != 'done'
  end

  def completion_percentage
    return 0 if subtasks.count.zero?
    ((subtasks.where(completed: true).count.to_f / subtasks.count) * 100).round
  end

  private

  def set_completed_at
    self.completed_at = status == 'done' ? Time.current : nil
  end
end
```

```ruby
# app/models/project_membership.rb
class ProjectMembership < ApplicationRecord
  belongs_to :user
  belongs_to :project

  validates :role, inclusion: { in: %w[owner admin member viewer] }
  validates :user_id, uniqueness: { scope: :project_id }

  enum role: {
    owner: 'owner',
    admin: 'admin',
    member: 'member',
    viewer: 'viewer'
  }
end
```

### Fase 3: Crear Controladores API

#### 3.1 Estructura de API

```bash
mkdir -p app/controllers/api/v1
mkdir -p app/controllers/api/v1/{auth,projects,tasks,dashboard}
```

#### 3.2 Base Controller

```ruby
# app/controllers/api/v1/base_controller.rb
module Api
  module V1
    class BaseController < ApplicationController
      before_action :authenticate_user!
      
      rescue_from ActiveRecord::RecordNotFound, with: :not_found
      rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
      rescue_from Pundit::NotAuthorizedError, with: :forbidden

      private

      def not_found(exception)
        render json: { error: exception.message }, status: :not_found
      end

      def unprocessable_entity(exception)
        render json: { error: exception.message }, status: :unprocessable_entity
      end

      def forbidden
        render json: { error: 'Not authorized' }, status: :forbidden
      end
    end
  end
end
```

#### 3.3 Auth Controller

```ruby
# app/controllers/api/v1/auth/registrations_controller.rb
module Api
  module V1
    module Auth
      class RegistrationsController < Devise::RegistrationsController
        respond_to :json

        private

        def respond_with(resource, _opts = {})
          if resource.persisted?
            render json: {
              status: { code: 200, message: 'Signed up successfully.' },
              data: UserSerializer.new(resource).serializable_hash[:data][:attributes]
            }
          else
            render json: {
              status: { message: "User couldn't be created successfully.", 
                       errors: resource.errors.full_messages },
            }, status: :unprocessable_entity
          end
        end
      end
    end
  end
end
```

#### 3.4 Projects Controller

```ruby
# app/controllers/api/v1/projects_controller.rb
module Api
  module V1
    class ProjectsController < BaseController
      before_action :set_project, only: [:show, :update, :destroy]

      def index
        @projects = current_user.projects.active.includes(:owner, :members)
        render json: @projects, each_serializer: ProjectSerializer
      end

      def show
        authorize @project
        render json: @project, serializer: ProjectDetailSerializer
      end

      def create
        @project = current_user.owned_projects.build(project_params)
        
        if @project.save
          @project.project_memberships.create!(user: current_user, role: 'owner')
          render json: @project, serializer: ProjectSerializer, status: :created
        else
          render json: { errors: @project.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def update
        authorize @project
        
        if @project.update(project_params)
          render json: @project, serializer: ProjectSerializer
        else
          render json: { errors: @project.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        authorize @project
        @project.destroy
        head :no_content
      end

      private

      def set_project
        @project = Project.friendly.find(params[:id])
      end

      def project_params
        params.require(:project).permit(:name, :description, :status, :color, :cover_image)
      end
    end
  end
end
```

#### 3.5 Tasks Controller

```ruby
# app/controllers/api/v1/tasks_controller.rb
module Api
  module V1
    class TasksController < BaseController
      before_action :set_project
      before_action :set_task, only: [:show, :update, :destroy, :update_position]

      def index
        @tasks = @project.tasks.includes(:assignee, :creator, :category, :subtasks)
        
        @tasks = @tasks.by_status(params[:status]) if params[:status].present?
        @tasks = @tasks.by_assignee(params[:assignee_id]) if params[:assignee_id].present?
        
        render json: @tasks, each_serializer: TaskSerializer
      end

      def show
        render json: @task, serializer: TaskDetailSerializer
      end

      def create
        @task = @project.tasks.build(task_params)
        @task.creator = current_user
        
        if @task.save
          broadcast_task_created(@task)
          render json: @task, serializer: TaskSerializer, status: :created
        else
          render json: { errors: @task.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def update
        if @task.update(task_params)
          broadcast_task_updated(@task)
          render json: @task, serializer: TaskSerializer
        else
          render json: { errors: @task.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def update_position
        @task.update(position: params[:position], status: params[:status])
        broadcast_task_moved(@task)
        render json: @task, serializer: TaskSerializer
      end

      def destroy
        @task.destroy
        broadcast_task_deleted(@task)
        head :no_content
      end

      private

      def set_project
        @project = Project.friendly.find(params[:project_id])
      end

      def set_task
        @task = @project.tasks.find(params[:id])
      end

      def task_params
        params.require(:task).permit(
          :title, :description, :status, :priority, :due_date, 
          :assignee_id, :category_id, :estimated_hours
        )
      end

      def broadcast_task_created(task)
        ActionCable.server.broadcast(
          "project_#{@project.id}_tasks",
          { action: 'created', task: TaskSerializer.new(task).serializable_hash }
        )
      end

      def broadcast_task_updated(task)
        ActionCable.server.broadcast(
          "project_#{@project.id}_tasks",
          { action: 'updated', task: TaskSerializer.new(task).serializable_hash }
        )
      end

      def broadcast_task_moved(task)
        ActionCable.server.broadcast(
          "project_#{@project.id}_tasks",
          { action: 'moved', task: TaskSerializer.new(task).serializable_hash }
        )
      end

      def broadcast_task_deleted(task)
        ActionCable.server.broadcast(
          "project_#{@project.id}_tasks",
          { action: 'deleted', task_id: task.id }
        )
      end
    end
  end
end
```

### Fase 4: Serializers

```bash
mkdir -p app/serializers
```

```ruby
# app/serializers/user_serializer.rb
class UserSerializer
  include JSONAPI::Serializer
  
  attributes :id, :email, :username, :first_name, :last_name, :full_name, :bio, :role, :avatar_url
  
  attribute :created_at do |user|
    user.created_at.iso8601
  end
end
```

```ruby
# app/serializers/project_serializer.rb
class ProjectSerializer
  include JSONAPI::Serializer
  
  attributes :id, :name, :description, :status, :color, :slug, :completion_percentage
  
  belongs_to :owner, serializer: UserSerializer
  has_many :members, serializer: UserSerializer
  
  attribute :tasks_count do |project|
    project.tasks.count
  end
  
  attribute :created_at do |project|
    project.created_at.iso8601
  end
end
```

```ruby
# app/serializers/task_serializer.rb
class TaskSerializer
  include JSONAPI::Serializer
  
  attributes :id, :title, :description, :status, :priority, :position,
             :due_date, :completed_at, :completion_percentage
  
  belongs_to :project
  belongs_to :assignee, serializer: UserSerializer
  belongs_to :creator, serializer: UserSerializer
  belongs_to :category, optional: true
  
  has_many :subtasks
  
  attribute :overdue do |task|
    task.overdue?
  end
  
  attribute :comments_count do |task|
    task.comments.count
  end
  
  attribute :created_at do |task|
    task.created_at.iso8601
  end
end
```

### Fase 5: Routes

```ruby
# config/routes.rb
Rails.application.routes.draw do
  root "pages#index"
  
  # Devise for API
  devise_for :users, skip: [:sessions, :registrations]
  
  namespace :api do
    namespace :v1 do
      # Auth
      namespace :auth do
        post 'login', to: 'sessions#create'
        delete 'logout', to: 'sessions#destroy'
        post 'signup', to: 'registrations#create'
        get 'me', to: 'sessions#show'
      end
      
      # Resources
      resources :projects, param: :slug do
        resources :tasks do
          member do
            patch :update_position
          end
          resources :comments, only: [:index, :create, :destroy]
          resources :subtasks, only: [:create, :update, :destroy]
        end
        resources :categories
        resources :members, only: [:index, :create, :destroy]
      end
      
      # Dashboard
      get 'dashboard/stats', to: 'dashboard#stats'
      get 'dashboard/activity', to: 'dashboard#activity'
      
      # Profile
      resource :profile, only: [:show, :update]
    end
  end
  
  # Catch-all route for React Router (debe ser la última)
  get "*path", to: "pages#index", constraints: ->(req) { 
    !req.xhr? && req.format.html? 
  }
end
```

---

## ⚛️ Frontend - React + Vite

### Fase 1: Estructura Base

#### 1.1 Entry Point CSS

```css
/* app/frontend/entrypoints/application.css */
@import 'tailwindcss';

@layer base {
  * {
    @apply border-border;
  }
  
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}

@layer utilities {
  .glass {
    @apply bg-white/10 backdrop-blur-lg border border-white/20;
  }
  
  .glass-dark {
    @apply bg-black/10 backdrop-blur-lg border border-white/5;
  }
}

/* Scrollbar personalizado */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-gray-100 dark:bg-gray-800;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-300 dark:bg-gray-600 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-400 dark:bg-gray-500;
}
```

#### 1.2 Entry Point TypeScript

```typescript
// app/frontend/entrypoints/application.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../src/App';
import './application.css';

// Fonts
import '@fontsource/inter/variable.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

```bash
# Instalar fuente Inter
npm install @fontsource/inter
```

#### 1.3 App Principal

```typescript
// app/frontend/src/App.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import { AuthProvider } from '@/providers/AuthProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import AppRoutes from '@/routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutos
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
          <AuthProvider>
            <AppRoutes />
            <Toaster 
              position="top-right"
              toastOptions={{
                className: 'glass',
                duration: 4000,
              }}
            />
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
```

```bash
npm install @tanstack/react-query-devtools
```

### Fase 2: Providers y Context

#### 2.1 Auth Provider

```typescript
// app/frontend/src/providers/AuthProvider.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/types';
import { authService } from '@/services/authService';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (data: SignupData) => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar si hay token y obtener usuario
    const initAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const userData = await authService.me();
          setUser(userData);
        } catch (error) {
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const { user: userData, token } = await authService.login(email, password);
    localStorage.setItem('token', token);
    setUser(userData);
  };

  const signup = async (data: SignupData) => {
    const { user: userData, token } = await authService.signup(data);
    localStorage.setItem('token', token);
    setUser(userData);
  };

  const logout = async () => {
    await authService.logout();
    localStorage.removeItem('token');
    setUser(null);
  };

  const updateUser = (data: Partial<User>) => {
    setUser(prev => prev ? { ...prev, ...data } : null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
```

#### 2.2 Theme Provider

```typescript
// app/frontend/src/providers/ThemeProvider.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme') as Theme;
    return stored || 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
```

### Fase 3: Types y Services

#### 3.1 Types

```typescript
// app/frontend/src/types/index.ts
export interface User {
  id: number;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  fullName: string;
  bio?: string;
  role: 'member' | 'admin' | 'super_admin';
  avatarUrl?: string;
  createdAt: string;
}

export interface Project {
  id: number;
  name: string;
  description?: string;
  status: 'active' | 'on_hold' | 'completed' | 'archived';
  color: string;
  slug: string;
  completionPercentage: number;
  tasksCount: number;
  owner: User;
  members: User[];
  createdAt: string;
}

export interface Task {
  id: number;
  title: string;
  description?: string;
  status: 'todo' | 'in_progress' | 'in_review' | 'done';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  position: number;
  dueDate?: string;
  completedAt?: string;
  completionPercentage: number;
  overdue: boolean;
  commentsCount: number;
  project: Project;
  assignee?: User;
  creator: User;
  category?: Category;
  subtasks: Subtask[];
  createdAt: string;
}

export interface Subtask {
  id: number;
  title: string;
  completed: boolean;
  position: number;
}

export interface Category {
  id: number;
  name: string;
  color: string;
}

export interface Comment {
  id: number;
  content: string;
  user: User;
  createdAt: string;
}

export interface DashboardStats {
  totalProjects: number;
  activeProjects: number;
  totalTasks: number;
  completedTasks: number;
  overdueTasks: number;
  tasksThisWeek: number;
  productivity: number;
}
```

#### 3.2 API Client

```typescript
// app/frontend/src/lib/apiClient.ts
import { get, post, patch, destroy } from '@rails/request.js';

const API_BASE = '/api/v1';

class ApiClient {
  private getHeaders() {
    const token = localStorage.getItem('token');
    return {
      'Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json',
    };
  }

  async get<T>(url: string): Promise<T> {
    const response = await get(`${API_BASE}${url}`, {
      headers: this.getHeaders(),
    });
    
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    
    return response.json as T;
  }

  async post<T>(url: string, data?: any): Promise<T> {
    const response = await post(`${API_BASE}${url}`, {
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const error = await response.json;
      throw new Error(error.message || response.statusText);
    }
    
    return response.json as T;
  }

  async patch<T>(url: string, data: any): Promise<T> {
    const response = await patch(`${API_BASE}${url}`, {
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    
    return response.json as T;
  }

  async delete(url: string): Promise<void> {
    const response = await destroy(`${API_BASE}${url}`, {
      headers: this.getHeaders(),
    });
    
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  }
}

export const apiClient = new ApiClient();
```

#### 3.3 Services

```typescript
// app/frontend/src/services/authService.ts
import { apiClient } from '@/lib/apiClient';
import { User } from '@/types';

export const authService = {
  async login(email: string, password: string) {
    return apiClient.post<{ user: User; token: string }>('/auth/login', {
      user: { email, password }
    });
  },

  async signup(data: SignupData) {
    return apiClient.post<{ user: User; token: string }>('/auth/signup', {
      user: data
    });
  },

  async logout() {
    return apiClient.delete('/auth/logout');
  },

  async me() {
    return apiClient.get<User>('/auth/me');
  },
};
```

```typescript
// app/frontend/src/services/projectService.ts
import { apiClient } from '@/lib/apiClient';
import { Project } from '@/types';

export const projectService = {
  async getAll() {
    return apiClient.get<Project[]>('/projects');
  },

  async getOne(slug: string) {
    return apiClient.get<Project>(`/projects/${slug}`);
  },

  async create(data: Partial<Project>) {
    return apiClient.post<Project>('/projects', { project: data });
  },

  async update(slug: string, data: Partial<Project>) {
    return apiClient.patch<Project>(`/projects/${slug}`, { project: data });
  },

  async delete(slug: string) {
    return apiClient.delete(`/projects/${slug}`);
  },
};
```

```typescript
// app/frontend/src/services/taskService.ts
import { apiClient } from '@/lib/apiClient';
import { Task } from '@/types';

export const taskService = {
  async getAll(projectSlug: string, filters?: TaskFilters) {
    const params = new URLSearchParams(filters as any).toString();
    return apiClient.get<Task[]>(`/projects/${projectSlug}/tasks?${params}`);
  },

  async getOne(projectSlug: string, taskId: number) {
    return apiClient.get<Task>(`/projects/${projectSlug}/tasks/${taskId}`);
  },

  async create(projectSlug: string, data: Partial<Task>) {
    return apiClient.post<Task>(`/projects/${projectSlug}/tasks`, { task: data });
  },

  async update(projectSlug: string, taskId: number, data: Partial<Task>) {
    return apiClient.patch<Task>(`/projects/${projectSlug}/tasks/${taskId}`, { task: data });
  },

  async updatePosition(projectSlug: string, taskId: number, position: number, status: string) {
    return apiClient.patch<Task>(
      `/projects/${projectSlug}/tasks/${taskId}/update_position`,
      { position, status }
    );
  },

  async delete(projectSlug: string, taskId: number) {
    return apiClient.delete(`/projects/${projectSlug}/tasks/${taskId}`);
  },
};
```

### Fase 4: Hooks Personalizados

```typescript
// app/frontend/src/hooks/useProjects.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { projectService } from '@/services/projectService';
import toast from 'react-hot-toast';

export function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: () => projectService.getAll(),
  });
}

export function useProject(slug: string) {
  return useQuery({
    queryKey: ['projects', slug],
    queryFn: () => projectService.getOne(slug),
    enabled: !!slug,
  });
}

export function useCreateProject() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: projectService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast.success('Proyecto creado exitosamente');
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });
}

export function useUpdateProject(slug: string) {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: Partial<Project>) => projectService.update(slug, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      queryClient.invalidateQueries({ queryKey: ['projects', slug] });
      toast.success('Proyecto actualizado');
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });
}

export function useDeleteProject() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: projectService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast.success('Proyecto eliminado');
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });
}
```

```typescript
// app/frontend/src/hooks/useTasks.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { taskService } from '@/services/taskService';
import toast from 'react-hot-toast';

export function useTasks(projectSlug: string, filters?: TaskFilters) {
  return useQuery({
    queryKey: ['tasks', projectSlug, filters],
    queryFn: () => taskService.getAll(projectSlug, filters),
    enabled: !!projectSlug,
  });
}

export function useTask(projectSlug: string, taskId: number) {
  return useQuery({
    queryKey: ['tasks', projectSlug, taskId],
    queryFn: () => taskService.getOne(projectSlug, taskId),
    enabled: !!projectSlug && !!taskId,
  });
}

export function useCreateTask(projectSlug: string) {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: Partial<Task>) => taskService.create(projectSlug, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks', projectSlug] });
      toast.success('Tarea creada');
    },
  });
}

export function useUpdateTask(projectSlug: string, taskId: number) {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: Partial<Task>) => taskService.update(projectSlug, taskId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks', projectSlug] });
      toast.success('Tarea actualizada');
    },
  });
}

export function useUpdateTaskPosition(projectSlug: string) {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ taskId, position, status }: UpdatePositionParams) =>
      taskService.updatePosition(projectSlug, taskId, position, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks', projectSlug] });
    },
  });
}
```

### Fase 5: Routes

```ruby
# config/routes.rb
Rails.application.routes.draw do
  root "pages#index"
  
  # Devise for API
  devise_for :users, skip: [:sessions, :registrations]
  
  namespace :api do
    namespace :v1 do
      # Auth
      namespace :auth do
        post 'login', to: 'sessions#create'
        delete 'logout', to: 'sessions#destroy'
        post 'signup', to: 'registrations#create'
        get 'me', to: 'sessions#show'
      end
      
      # Resources
      resources :projects, param: :slug do
        resources :tasks do
          member do
            patch :update_position
          end
          resources :comments, only: [:index, :create, :destroy]
          resources :subtasks, only: [:create, :update, :destroy]
        end
        resources :categories
        resources :members, only: [:index, :create, :destroy]
      end
      
      # Dashboard
      get 'dashboard/stats', to: 'dashboard#stats'
      get 'dashboard/activity', to: 'dashboard#activity'
      
      # Profile
      resource :profile, only: [:show, :update]
    end
  end
  
  # Catch-all route for React Router (debe ser la última)
  get "*path", to: "pages#index", constraints: ->(req) { 
    !req.xhr? && req.format.html? 
  }
end
```

---

## 🎨 Componentes UI

### Componentes Base

#### Button Component

```typescript
// app/frontend/src/components/ui/Button.tsx
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100',
        outline: 'border-2 border-primary-500 text-primary-600 hover:bg-primary-50',
        ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800',
        danger: 'bg-red-600 text-white hover:bg-red-700',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4 py-2',
        lg: 'h-12 px-6 text-lg',
        icon: 'h-10 w-10',
     },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, children, disabled, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);
```

```bash
npm install class-variance-authority clsx tailwind-merge
```

#### Modal Component

```typescript
// app/frontend/src/components/ui/Modal.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
};

export function Modal({ isOpen, onClose, title, children, size = 'md' }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full ${sizeClasses[size]} max-h-[90vh] overflow-hidden`}
            >
              {/* Header */}
              {title && (
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {title}
                  </h2>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
              
              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
```

---

## 📄 Páginas Principales

### Login Page

```typescript
// app/frontend/src/pages/auth/LoginPage.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/providers/AuthProvider';
import { Button } from '@components/ui/Button';
import toast from 'react-hot-toast';

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Mínimo 6 caracteres'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);
      toast.success('¡Bienvenido de vuelta!');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Credenciales inválidas');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              TaskFlow Pro
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Inicia sesión en tu cuenta
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="tu@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Contraseña
              </label>
              <input
                {...register('password')}
                type="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full"
              loading={isSubmitting}
            >
              Iniciar Sesión
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            ¿No tienes cuenta?{' '}
            <Link to="/signup" className="text-primary-600 hover:text-primary-700 font-medium">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
```

### Dashboard με Métricas

```typescript
// app/frontend/src/pages/dashboard/Dashboard.tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { apiClient } from '@/lib/apiClient';
import type { DashboardStats } from '@/types';

export function Dashboard() {
  const { data: stats } = useQuery<DashboardStats>({
    queryKey: ['dashboard', 'stats'],
    queryFn: () => apiClient.get('/dashboard/stats'),
  });

  const statCards = [
    {
      title: 'Proyectos Activos',
      value: stats?.activeProjects || 0,
      icon: Calendar,
      color: 'bg-blue-500',
      change: '+12%',
    },
    {
      title: 'Tareas Completadas',
      value: stats?.completedTasks || 0,
      icon: CheckCircle,
      color: 'bg-green-500',
      change: '+8%',
    },
    {
      title: 'En Progreso',
      value: stats?.totalTasks - stats?.completedTasks || 0,
      icon: Clock,
      color: 'bg-yellow-500',
      change: '+5%',
    },
    {
      title: 'Atrasadas',
      value: stats?.overdueTasks || 0,
      icon: AlertCircle,
      color: 'bg-red-500',
      change: '-3%',
    },
  ];

  const tasksByStatus = [
    { name: 'Por Hacer', value: stats?.tasksData?.todo || 0, color: '#94a3b8' },
    { name: 'En Progreso', value: stats?.tasksData?.in_progress || 0, color: '#3b82f6' },
    { name: 'Revisión', value: stats?.tasksData?.in_review || 0, color: '#f59e0b' },
    { name: 'Completadas', value: stats?.tasksData?.done || 0, color: '#10b981' },
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Resumen de tus proyectos y tareas
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {stat.title}
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
                <span className="text-sm text-green-600 mt-1">
                  {stat.change} vs mes anterior
                </span>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tareas por Estado */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Distribución de Tareas
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={tasksByStatus}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {tasksByStatus.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Productividad Semanal */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Productividad Semanal
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stats?.weeklyData || []}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="completed" fill="#10b981" radius={[8, 8, 0, 0]} />
              <Bar dataKey="created" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
```

### Kanban Board con Drag & Drop

```typescript
// app/frontend/src/pages/tasks/KanbanBoard.tsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useTasks, useUpdateTaskPosition } from '@/hooks/useTasks';
import { KanbanColumn } from '@components/features/kanban/KanbanColumn';
import { TaskCard } from '@components/features/kanban/TaskCard';
import type { Task } from '@/types';

const COLUMNS = [
  { id: 'todo', title: 'Por Hacer', color: 'bg-gray-500' },
  { id: 'in_progress', title: 'En Progreso', color: 'bg-blue-500' },
  { id: 'in_review', title: 'En Revisión', color: 'bg-yellow-500' },
  { id: 'done', title: 'Completadas', color: 'bg-green-500' },
];

export function KanbanBoard() {
  const { slug } = useParams<{ slug: string }>();
  const { data: tasks = [] } = useTasks(slug!);
  const updatePosition = useUpdateTaskPosition(slug!);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const task = tasks.find((t) => t.id === active.id);
    setActiveTask(task || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const activeTask = tasks.find((t) => t.id === active.id);
    const overColumn = over.id as string;

    if (activeTask && activeTask.status !== overColumn) {
      updatePosition.mutate({
        taskId: activeTask.id,
        status: overColumn,
        position: 0,
      });
    }

    setActiveTask(null);
  };

  const tasksByStatus = (status: string) => {
    return tasks.filter((task) => task.status === status);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Tablero Kanban
      </h1>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLUMNS.map((column) => (
            <KanbanColumn
              key={column.id}
              id={column.id}
              title={column.title}
              color={column.color}
              tasks={tasksByStatus(column.id)}
            />
          ))}
        </div>

        <DragOverlay>
          {activeTask ? <TaskCard task={activeTask} isDragging /> : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
```

```typescript
// app/frontend/src/components/features/kanban/KanbanColumn.tsx
import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { TaskCard } from './TaskCard';
import { Plus } from 'lucide-react';
import type { Task } from '@/types';

interface KanbanColumnProps {
  id: string;
  title: string;
  color: string;
  tasks: Task[];
}

export function KanbanColumn({ id, title, color, tasks }: KanbanColumnProps) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-4 min-h-[600px] transition-colors ${
        isOver ? 'ring-2 ring-primary-500' : ''
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${color}`} />
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {tasks.length}
          </span>
        </div>
        <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Tasks */}
      <SortableContext items={tasks.map((t) => t.id)} strategy={verticalListSortingStrategy}>
        <div className="space-y-3">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
}
```

```typescript
// app/frontend/src/components/features/kanban/TaskCard.tsx
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Calendar, MessageSquare, Paperclip, User } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import type { Task } from '@/types';

interface TaskCardProps {
  task: Task;
  isDragging?: boolean;
}

const priorityColors = {
  low: 'bg-green-100 text-green-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-orange-100 text-orange-800',
  urgent: 'bg-red-100 text-red-800',
};

export function TaskCard({ task, isDragging }: TaskCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isSortableDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-move ${
        isDragging ? 'shadow-xl scale-105' : ''
      }`}
    >
      {/* Title */}
      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
        {task.title}
      </h4>

      {/* Description */}
      {task.description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
          {task.description}
        </p>
      )}

      {/* Priority Badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className={`text-xs px-2 py-1 rounded-full ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
        {task.overdue && (
          <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-800">
            Atrasada
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-3">
          {task.dueDate && (
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {format(new Date(task.dueDate), 'd MMM', { locale: es })}
            </div>
          )}
          {task.commentsCount > 0 && (
            <div className="flex items-center gap-1">
              <MessageSquare className="w-3 h-3" />
              {task.commentsCount}
            </div>
          )}
          {task.subtasks.length > 0 && (
            <div className="flex items-center gap-1">
              <Paperclip className="w-3 h-3" />
              {task.subtasks.filter((s) => s.completed).length}/{task.subtasks.length}
            </div>
          )}
        </div>

        {/* Assignee Avatar */}
        {task.assignee && (
          <div className="flex items-center gap-1">
            {task.assignee.avatarUrl ? (
              <img
                src={task.assignee.avatarUrl}
                alt={task.assignee.fullName}
                className="w-6 h-6 rounded-full"
              />
            ) : (
              <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center text-white text-xs">
                {task.assignee.firstName[0]}{task.assignee.lastName[0]}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
```

---

## 🔴 Funcionalidades en Tiempo Real (WebSockets)

### Configurar Action Cable

#### Backend

```ruby
# app/channels/application_cable/connection.rb
module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = find_verified_user
    end

    private

    def find_verified_user
      token = request.params[:token]
      if token.present?
        begin
          jwt_payload = JWT.decode(token, Rails.application.credentials.devise_jwt_secret_key!).first
          user_id = jwt_payload['sub']
          User.find(user_id)
        rescue
          reject_unauthorized_connection
        end
      else
        reject_unauthorized_connection
      end
    end
  end
end
```

```ruby
# app/channels/project_tasks_channel.rb
class ProjectTasksChannel < ApplicationCable::Channel
  def subscribed
    project = Project.friendly.find(params[:project_slug])
    stream_for project
  end

  def unsubscribed
    stop_all_streams
  end
end
```

#### Frontend

```typescript
// app/frontend/src/lib/cable.ts
import { createConsumer } from '@rails/actioncable';

const getWebSocketURL = () => {
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  const host = window.location.host;
  const token = localStorage.getItem('token');
  return `${protocol}//${host}/cable?token=${token}`;
};

export const cable = createConsumer(getWebSocketURL());
```

```typescript
// app/frontend/src/hooks/useProjectTasksChannel.ts
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { cable } from '@/lib/cable';
import type { Task } from '@/types';

export function useProjectTasksChannel(projectSlug: string) {
  const queryClient = useQueryClient();

  useEffect(() => {
    const channel = cable.subscriptions.create(
      {
        channel: 'ProjectTasksChannel',
        project_slug: projectSlug,
      },
      {
        received(data: { action: string; task: Task; task_id?: number }) {
          switch (data.action) {
            case 'created':
              queryClient.invalidateQueries({ queryKey: ['tasks', projectSlug] });
              break;
            case 'updated':
              queryClient.setQueryData<Task[]>(['tasks', projectSlug], (oldTasks) => {
                if (!oldTasks) return [data.task];
                return oldTasks.map((t) => (t.id === data.task.id ? data.task : t));
              });
              break;
            case 'moved':
              queryClient.setQueryData<Task[]>(['tasks', projectSlug], (oldTasks) => {
                if (!oldTasks) return [data.task];
                return oldTasks.map((t) => (t.id === data.task.id ? data.task : t));
              });
              break;
            case 'deleted':
              queryClient.setQueryData<Task[]>(['tasks', projectSlug], (oldTasks) => {
                if (!oldTasks) return [];
                return oldTasks.filter((t) => t.id !== data.task_id);
              });
              break;
          }
        },
      }
    );

    return () => {
      channel.unsubscribe();
    };
  }, [projectSlug, queryClient]);
}
```

Uso en el Kanban Board:

```typescript
// En app/frontend/src/pages/tasks/KanbanBoard.tsx
import { useProjectTasksChannel } from '@/hooks/useProjectTasksChannel';

export function KanbanBoard() {
  const { slug } = useParams<{ slug: string }>();
  
  // Conectar a WebSocket
  useProjectTasksChannel(slug!);
  
  // ... resto del código
}
```

---

## ⚡ Optimizaciones y Performance

### 1. Lazy Loading de Rutas

```typescript
// app/frontend/src/routes/index.tsx
import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/providers/AuthProvider';
import { Layout } from '@components/layout/Layout';
import { LoadingSpinner } from '@components/ui/LoadingSpinner';

// Lazy load pages
const LoginPage = lazy(() => import('@pages/auth/LoginPage'));
const Dashboard = lazy(() => import('@pages/dashboard/Dashboard'));
const ProjectList = lazy(() => import('@pages/projects/ProjectList'));
const KanbanBoard = lazy(() => import('@pages/tasks/KanbanBoard'));

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  
  if (loading) return <LoadingSpinner />;
  if (!user) return <Navigate to="/login" />;
  
  return <>{children}</>;
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        
        {/* Private Routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="projects" element={<ProjectList />} />
          <Route path="projects/:slug/board" element={<KanbanBoard />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
```

### 2. Optimistic Updates

```typescript
// app/frontend/src/hooks/useTasks.ts (mejorado)
export function useUpdateTask(projectSlug: string, taskId: number) {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: Partial<Task>) => taskService.update(projectSlug, taskId, data),
    onMutate: async (newData) => {
      // Cancelar queries en vuelo
      await queryClient.cancelQueries({ queryKey: ['tasks', projectSlug] });
      
      // Snapshot del estado actual
      const previousTasks = queryClient.getQueryData<Task[]>(['tasks', projectSlug]);
      
      // Optimistically update
      queryClient.setQueryData<Task[]>(['tasks', projectSlug], (old) => {
        if (!old) return [];
        return old.map((task) =>
          task.id === taskId ? { ...task, ...newData } : task
        );
      });
      
      return { previousTasks };
    },
    onError: (err, newData, context) => {
      // Rollback en caso de error
      queryClient.setQueryData(['tasks', projectSlug], context?.previousTasks);
      toast.error('Error al actualizar tarea');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks', projectSlug] });
    },
  });
}
```

### 3. Infinite Scroll (Bonus)

```typescript
// app/frontend/src/hooks/useInfiniteTasks.ts
import { useInfiniteQuery } from '@tanstack/react-query';

export function useInfiniteTasks(projectSlug: string) {
  return useInfiniteQuery({
    queryKey: ['tasks', projectSlug, 'infinite'],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.get(`/projects/${projectSlug}/tasks?page=${pageParam}`),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.has_more ? pages.length + 1 : undefined;
    },
  });
}
```

---

## 🚀 Deployment

### Preparación para Producción

#### 1. Variables de Entorno

```bash
# .env.production
DATABASE_URL=postgresql://user:password@localhost/taskflow_pro_production
REDIS_URL=redis://localhost:6379/0
SECRET_KEY_BASE=<generar con rails secret>
DEVISE_JWT_SECRET_KEY=<generar con rails secret>
```

#### 2. Configuración de Rails para Producción

```ruby
# config/environments/production.rb
Rails.application.configure do
  config.assets.compile = false
  config.public_file_server.enabled = ENV['RAILS_SERVE_STATIC_FILES'].present?
  
  # Configurar S3 o Cloudinary para Active Storage
  config.active_storage.service = :amazon
  
  # SSL
  config.force_ssl = true
  
  # Asset host
  config.asset_host = ENV['ASSET_HOST']
end
```

#### 3. Dockerfile

```dockerfile
# Dockerfile
FROM ruby:3.3-alpine AS builder

RUN apk add --no-cache build-base postgresql-dev nodejs yarn git

WORKDIR /app

COPY Gemfile Gemfile.lock yarn.lock package.json ./
RUN bundle install --without development test && yarn install

COPY . .

RUN bundle exec vite build
RUN bundle exec rails assets:precompile

## Production Stage
FROM ruby:3.3-alpine

RUN apk add --no-cache postgresql-client nodejs tzdata

WORKDIR /app

COPY --from=builder /usr/local/bundle /usr/local/bundle
COPY --from=builder /app /app

EXPOSE 3000

CMD ["bin/rails", "server", "-b", "0.0.0.0"]
```

#### 4. Docker Compose (Opcional)

```yaml
# docker-compose.yml
version: '3.8'

services:
  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
  
  redis:
    image: redis:7-alpine
  
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://postgres:password@db/taskflow_pro
      - REDIS_URL=redis://redis:6379/0
    depends_on:
      - db
      - redis
  
  sidekiq:
    build: .
    command: bundle exec sidekiq
    depends_on:
      - db
      - redis

volumes:
  postgres_data:
```

### Deploy en Render.com

1. Conectar GitHub repo
2. Configurar como Web Service
3. Build Command: `bundle install && npm install && bundle exec vite build && rails assets:precompile && rails db:migrate`
4. Start Command: `rails server -b 0.0.0.0`
5. Agregar servicios de PostgreSQL y Redis

### Deploy en Fly.io

```bash
# Instalar flyctl
brew install flyctl  # Mac
# o visitar https://fly.io/docs/hands-on/install-flyctl/

# Login
flyctl auth login

# Launch app
flyctl launch

# Deploy
flyctl deploy
```

---

## 🌟 Showcase en Portafolio

### Lo que Debes Destacar

#### 1. Stack Moderno
```markdown
### Stack Tecnológico
- **Backend:** Ruby on Rails 8 con PostgreSQL
- **Frontend:** React 19 con TypeScript
- **Build Tool:** Vite 5 (HMR ultra-rápido)
- **State Management:** TanStack Query + Zustand
- **Real-time:** Action Cable (WebSockets)
- **UI/UX:** Tailwind v4, Framer Motion, glassmorphism
- **Testing:** RSpec, Jest, Cypress
```

#### 2. Funcionalidades Clave

**Para el README.md:**

```markdown
## ✨ Características Destacadas

### 🎯 Gestión de Proyectos
- CRUD completo con validaciones robustas
- Roles y permisos (Owner, Admin, Member, Viewer)
- Soft delete con Paranoia 
```
