import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'sm' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'default', 
  size = 'sm', 
  className = '', 
  children, 
  style,
  ...props 
}) => {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
    transition: 'all 0.3s',
    borderRadius: '9999px',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    ...style
  };

  const variantStyle: React.CSSProperties = 
    variant === 'outline' 
      ? {
          border: '2px solid #3B82F6',
          color: '#3B82F6',
          backgroundColor: 'transparent',
        }
      : {
          background: 'linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%)',
          color: 'white',
        };

  const sizeStyle: React.CSSProperties = 
    size === 'lg' 
      ? {
          padding: '1.5rem 2rem',
          fontSize: '1.125rem',
        }
      : {
          padding: '0.5rem 1rem',
          fontSize: '0.875rem',
        };

  return (
    <button
      style={{
        ...baseStyle,
        ...variantStyle,
        ...sizeStyle,
      }}
      className={className}
      onMouseEnter={(e) => {
        if (variant === 'outline') {
          e.currentTarget.style.backgroundColor = '#3B82F6';
          e.currentTarget.style.color = 'white';
        } else {
          e.currentTarget.style.opacity = '0.9';
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'outline') {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#3B82F6';
        } else {
          e.currentTarget.style.opacity = '1';
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
};
