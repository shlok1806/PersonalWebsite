import React from 'react';

interface IDEWindowProps {
  fileName?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'hero' | 'compact';
  showHeader?: boolean;
  maxHeight?: string;
  theme?: 'dark' | 'light';
}

const IDEWindow: React.FC<IDEWindowProps> = ({ 
  fileName = 'document.txt', 
  children, 
  className = '',
  variant = 'default',
  showHeader = true,
  maxHeight,
  theme = 'dark'
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'hero':
        return 'ide-window-hero';
      case 'compact':
        return 'ide-window-compact';
      default:
        return 'ide-window-default';
    }
  };

  const getThemeClasses = () => {
    return theme === 'light' ? 'ide-window-light' : 'ide-window-dark';
  };

  return (
    <div 
      className={`ide-window ${getVariantClasses()} ${getThemeClasses()} ${className}`}
      style={{ maxHeight }}
    >
      {showHeader && (
        <div className="ide-header">
          <div className="ide-controls">
            <div className="ide-dot ide-dot-red"></div>
            <div className="ide-dot ide-dot-yellow"></div>
            <div className="ide-dot ide-dot-green"></div>
          </div>
          <span className="ide-filename">{fileName}</span>
        </div>
      )}
      <div className="ide-content">
        {children}
      </div>
    </div>
  );
};

export default IDEWindow; 