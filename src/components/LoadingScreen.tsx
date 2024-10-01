import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <p className="text-2xl font-semibold mb-4">Loading Quiz...</p>
      </div>
    </div>
  );
}

export default LoadingScreen;