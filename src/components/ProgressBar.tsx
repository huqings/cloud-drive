import React from 'react';

interface ProgressBarProps {
  progress: number;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress = 0, 
  className = '' 
}) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  
  return (
    <div 
      className={`h-1 relative bg-gray-200 rounded-full overflow-hidden w-full ${className}`}
      style={{ 
        '--progress-width': `${clampedProgress}%` 
      } as React.CSSProperties}
    >
      <div 
        className="absolute bottom-0 left-0 bg-blue-500 h-1 rounded-full transition-all duration-300"
        style={{ width: `${clampedProgress}%` }}
      />
    </div>
  );
};

export default ProgressBar;