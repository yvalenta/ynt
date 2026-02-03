# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Rails 8 + React 19 + Vite hybrid application called "YNT POC" (also referred to as "Megaplex Stack"). Rails serves as both the backend API and the entry point that renders a single HTML page where React mounts. The frontend is a Single Page Application (SPA) built with React, TypeScript, and Tailwind v4.

### Key Architecture Pattern

- **Rails**: Acts as the API backend serving JSON responses from `/api/*` endpoints, plus serves the initial HTML page at root
- **React**: Handles all UI rendering as a client-side SPA with React Router managing navigation
- **Vite**: Compiles and serves frontend assets in development (port 3036), uses Hot Module Replacement (HMR)
- **Entry Point**: `app/views/pages/index.html.erb` contains `<div id="root"></div>` where React mounts

## Development Commands

### Start Development Server
```powershell
# Start both Rails (port 3000) and Vite (port 3036) servers
# This requires foreman (install with: gem install foreman)
foreman start -f Procfile.dev

# Alternative: Run in separate terminals
# Terminal 1: Rails server
bin/rails server

# Terminal 2: Vite dev server
bin/vite dev
```

### Database
```powershell
# Setup database (create + migrate)
bin/rails db:setup

# Run migrations
bin/rails db:migrate

# Rollback last migration
bin/rails db:rollback

# Reset database (drop, create, migrate, seed)
bin/rails db:reset
```

### Frontend Build
```powershell
# Install Node dependencies
npm install

# Build frontend for production
bin/vite build

# Clean compiled assets
bin/vite clobber
```

### Code Quality
```powershell
# Run RuboCop linter (Rails Omakase style)
bin/rubocop

# Auto-fix RuboCop issues
bin/rubocop -a

# Run Brakeman security scanner
bin/brakeman
```

### Testing
There are currently no test files in the repository. When adding tests in the future, use Rails default testing framework (Minitest) or add RSpec.

## Code Structure

### Backend (Rails)
```
app/
├── controllers/
│   ├── application_controller.rb
│   ├── pages_controller.rb        # Serves the React app entry point
│   └── api/                        # API controllers return JSON
├── models/
│   └── application_record.rb
├── views/
│   ├── layouts/
│   │   └── application.html.erb   # Loads Vite assets via vite_*_tag helpers
│   └── pages/
│       └── index.html.erb          # <div id="root"></div>
config/
├── routes.rb                       # Define API routes under namespace :api
├── database.yml                    # PostgreSQL configuration
└── application.rb                  # Module name: Ynt
```

### Frontend (React + TypeScript)
```
app/frontend/
├── entrypoints/
│   ├── application.tsx             # Main entry point: mounts React to #root
│   └── application.css             # Global styles
├── src/
│   ├── app.tsx                     # Root component with routing setup
│   ├── components/                 # Reusable React components
│   ├── pages/                      # Page-level components (routes)
│   ├── hooks/                      # Custom React hooks
│   ├── layout/                     # Layout components (Navbar, etc)
│   └── interfaces/                 # TypeScript type definitions
```

### Path Alias
The `@/` alias points to `app/frontend/src/` (configured in both `vite.config.ts` and `tsconfig.json`).

Example: `import { Navbar } from '@/layout/navbar'`

## Technology Stack Details

### Backend Dependencies
- **Rails**: 8.0.2+
- **Ruby**: 3.4.5 (see Dockerfile)
- **Database**: PostgreSQL via `pg` gem
- **Web Server**: Puma
- **Asset Pipeline**: Propshaft (not Sprockets)
- **Frontend Integration**: `vite_rails` gem
- **Route Generation**: `js_from_routes` gem
- **Caching**: `solid_cache`, `solid_queue`, `solid_cable` (Rails 8 defaults)
- **Deployment**: Kamal-ready with Thruster

### Frontend Dependencies
- **React**: 19.2.4
- **TypeScript**: 5.9.3
- **Build Tool**: Vite 5.4.21
- **Styling**: Tailwind CSS 4.0
- **Routing**: react-router-dom 7.13
- **Data Fetching**: @tanstack/react-query 5.90
- **API Client**: @js-from-routes/client, @rails/request.js

### Development Tools
- **Linting**: RuboCop with rubocop-rails-omakase style
- **Security**: Brakeman scanner
- **CI/CD**: GitHub Actions (.github/workflows/ci.yml)
- **Docker**: Production-ready Dockerfile using multi-stage builds

## Important Patterns

### React Router Integration
Rails must route all frontend paths to `pages#index` so React Router can handle client-side navigation:

```ruby
# config/routes.rb
Rails.application.routes.draw do
  root "pages#index"
  
  # Catch-all for React Router (already configured)
  get "*path", to: "pages#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
  # API routes under /api namespace
  namespace :api do
    resources :products
  end
end
```

### API Controller Pattern
API controllers should only return JSON, never render views:

```ruby
module Api
  class ProductsController < ApplicationController
    def index
      @products = Product.all
      render json: @products
    end
    
    def create
      @product = Product.new(product_params)
      if @product.save
        render json: @product, status: :created
      else
        render json: @product.errors, status: :unprocessable_entity
      end
    end
  end
end
```

### Data Fetching in React
Use TanStack Query for all API calls:

```typescript
import { useQuery } from '@tanstack/react-query';

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: () => fetch('/api/products').then(res => res.json()),
  });
}
```

### CSRF Protection
For POST/PATCH/DELETE requests from React, use `@rails/request.js` to handle CSRF tokens automatically:

```typescript
import { post } from '@rails/request.js';

const response = await post('/api/products', {
  body: { product: data }
});
```

## Configuration Files

### vite.config.ts
- **Root**: `./app/frontend`
- **Entry**: `app/frontend/entrypoints/application.tsx`
- **Output**: `public/vite/` (production)
- **Dev Server Port**: 3036 (configured in config/vite.json)
- **Plugins**: ViteRuby, React, Tailwind

### Procfile.dev
Defines processes for development:
- `vite`: Frontend dev server (`bin/vite dev`)
- `web`: Rails server (`bin/rails s`)

## Windows-Specific Notes

This repository is being developed on Windows with PowerShell. When writing commands:
- Use PowerShell syntax (e.g., `Get-ChildItem` not `ls`)
- File paths use backslashes: `app\controllers\pages_controller.rb`
- Use `foreman` to run Procfile.dev, or run servers in separate terminals

## Reference Documentation

The repository contains detailed guides in markdown files:
- `rails-react-vite-setup.md`: Comprehensive technical guide (Spanish) explaining the entire architecture, data flow, setup steps, and troubleshooting
- `portfolio-poc-guide.md`: Guide for building a portfolio-worthy POC project with this stack

When implementing new features, reference these guides for architectural patterns and best practices.

## When Adding New Features

1. **API Endpoints**: Create controllers under `app/controllers/api/`
2. **Frontend Pages**: Add components in `app/frontend/src/pages/`
3. **Routes**: Update both `config/routes.rb` (for API) and `app/frontend/src/app.tsx` (for React Router)
4. **Types**: Define TypeScript interfaces in `app/frontend/src/interfaces/`
5. **Data Fetching**: Create custom hooks in `app/frontend/src/hooks/` using TanStack Query
6. **Migrations**: Run `rails g migration` for database changes
7. **Models**: Follow ActiveRecord conventions in `app/models/`

## CI/CD Pipeline

GitHub Actions runs on PRs and pushes to main:
- **Brakeman**: Security vulnerability scanning
- **RuboCop**: Code style linting
- **Importmap audit**: JavaScript dependency security (note: this may need updating since this project uses Vite, not Importmap)
