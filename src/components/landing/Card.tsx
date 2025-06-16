import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

interface CardDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className = '', children, style, ...props }) => {
  return (
    <div
      style={{
        borderRadius: '0.5rem',
        border: '1px solid #e5e7eb',
        backgroundColor: 'white',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        transition: 'all 0.3s',
        ...style
      }}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardHeaderProps> = ({ className = '', children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', padding: '1.5rem' }} className={className}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardContentProps> = ({ className = '', children }) => {
  return (
    <div style={{ padding: '1.5rem', paddingTop: 0 }} className={className}>
      {children}
    </div>
  );
};

export const CardTitle: React.FC<CardTitleProps> = ({ className = '', children }) => {
  return (
    <h3 style={{ 
      fontSize: '1.5rem', 
      fontWeight: 600, 
      lineHeight: 1, 
      letterSpacing: '-0.025em',
      margin: 0 
    }} className={className}>
      {children}
    </h3>
  );
};

export const CardDescription: React.FC<CardDescriptionProps> = ({ className = '', children }) => {
  return (
    <p style={{ 
      fontSize: '0.875rem', 
      color: '#6b7280',
      margin: 0 
    }} className={className}>
      {children}
    </p>
  );
};
