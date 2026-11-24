interface HeaderProps {
  searchText: string;
  onSearchChange: (text: string) => void;
  totalItems: number;
}

export function Header({ searchText, onSearchChange, totalItems }: HeaderProps) {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '2px solid #ccc',
        paddingBottom: '16px',
        marginBottom: '20px',
        gap: '16px',
      }}
    >
      {/* Título principal de la app */}
      <h1 style={{ margin: 0, fontSize: '24px' }}>Golden Cashier 🪙</h1>

      {/* Barra de búsqueda controlada (criterio de filtrado 1) */}
      <input
        type="text"
        placeholder="🔍 Buscar producto..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          padding: '8px 12px',
          fontSize: '16px',
          borderRadius: '6px',
          border: '1px solid #aaa',
          width: '300px',
        }}
      />

      {/* Contador visual del carrito */}
      <div
        style={{
          fontWeight: 'bold',
          fontSize: '16px',
          backgroundColor: '#f3f4f6',
          padding: '8px 14px',
          borderRadius: '6px',
        }}
      >
        🛒 Carrito: {totalItems}
      </div>
    </header>
  );
}