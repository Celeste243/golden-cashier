# Golden Cashier 🛒

Aplicación web de **Punto de Venta (POS)** desarrollada con **React**, **TypeScript** y **Vite**, diseñada para agilizar la búsqueda de productos, el filtrado por categorías y la gestión de un carrito de compras en tiempo real.

## Funcionalidades principales

- **Catálogo de productos:** Visualización en grilla con precio, categoría y control de stock disponible en tiempo real.
- **Búsqueda instantánea:** Filtrado dinámico por nombre de producto desde el encabezado.
- **Filtro por categorías:** Selección rápida entre *Todos*, *Lácteos*, *Bebidas* y *Almacén*, con opción de reinicio rápido de filtros.
- **Gestión del carrito:**
  - Agregar productos respetando el límite de stock disponible.
  - Aumentar (`+`) o disminuir (`-`) cantidades directamente desde el panel del carrito.
  - Eliminar ítems individuales (`X`).
  - Cálculo automático del total a cobrar y confirmación visual al finalizar la venta.

## Estructura del proyecto

```text
src/
├── components/
│   ├── Header.tsx          # Encabezado, buscador e indicador de ítems en carrito
│   ├── CategoryFilter.tsx  # Botones de filtro por categoría y limpieza de filtros
│   ├── ProductCard.tsx     # Tarjeta individual de producto con control de stock
│   └── CartPanel.tsx       # Panel lateral de resumen, cantidades y cobro
├── data/
│   └── mockData.ts         # Catálogo inicial de productos tipados
├── types/
│   └── product.ts          # Interfaces Product, CartItem y tipo Category
└── App.tsx                 # Estado centralizado y lógica principal de la aplicación

Cómo ejecutar el proyecto localmente
Clonar el repositorio:  git clone <https://github.com/Celeste243/golden-cashier>
Instalar las dependencias:
npm install
Iniciar el servidor de desarrollo:
npm run dev
Generar el build de producción:
npm run build
