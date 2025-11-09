import React, { useState, useEffect } from 'react';
import { ProgressBar } from '@/components/ProgressBar';

export default function ProgressPage() {
  const [progress, setProgress] = useState(0);
  
  // 模拟进度增加
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">进度条示例</h1>
      
      <div className="w-full max-w-md space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">默认进度条</h2>
          <ProgressBar progress={progress} />
          <p className="mt-2 text-sm text-gray-600">进度: {progress}%</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">自定义颜色</h2>
          <ProgressBar progress={75} className="bg-green-200" />
          <p className="mt-2 text-sm text-gray-600">进度: 75%</p>
        </div>
      </div>
    </div>
  );
}