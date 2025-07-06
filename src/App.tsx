import React from 'react';
import { useTheme } from 'zensegur-theme';

console.log('[sidebar] React version:', React.version);

function App() {
  const { theme } = useTheme();

  const menuItems = [
    { key: 'dashboard', label: 'Dashboard', icon: '📊' },
    { key: 'users', label: 'Usuários', icon: '👥' },
    { key: 'reports', label: 'Relatórios', icon: '📈' },
    { key: 'settings', label: 'Configurações', icon: '⚙️' },
  ];

  return (
    <div style={{
      width: '250px',
      height: '100vh',
      backgroundColor: theme.colors.surface,
      borderRight: `1px solid ${theme.colors.border}`,
      padding: '20px 0',
      fontFamily: 'Poppins'
    }}>
      <div style={{
        padding: '0 20px 20px',
        borderBottom: `1px solid ${theme.colors.border}`,
        marginBottom: '20px'
      }}>
        <h2 style={{
          color: theme.colors.text,
          fontSize: '18px',
          fontWeight: 600,
          margin: 0
        }}>
          Zensegur Portal
        </h2>
      </div>

      <nav>
        {menuItems.map(item => (
          <div
            key={item.key}
            style={{
              padding: '12px 20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: theme.colors.text,
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.mode === 'light' ? '#f5f5f5' : '#333';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <span style={{ fontSize: '16px' }}>{item.icon}</span>
            <span style={{ fontSize: '14px', fontWeight: 500 }}>{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default App;
