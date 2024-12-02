import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const messages = [
    'AWS re:Invent, held annually in Las Vegas since 2012, attracts over 60,000 tech professionals who take over the Strip during the conference.',
    'Major Las Vegas casino companies like MGM Resorts and Caesars Entertainment rely on AWS for their cloud computing infrastructure.',
    'Nevada hosts several AWS data centers, leveraging the states favorable tax policies and low-cost electricity.',
    'Las Vegass 24/7 culture makes it an ideal testing ground for AWS cloud computing innovations.',
    'During re:Invent, the city transforms from an entertainment capital to a global tech networking hub, turning hotel spaces into cloud computing showcases.'
  ]

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setIndex(randomIndex);
    const messageInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      setIndex(randomIndex);
    }, 2000);

    return () => {
      clearInterval(messageInterval);
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <p className="text-2xl font-semibold mb-4">Loading Quiz...</p>
        <p>{messages[index]}</p>
      </div>
    </div>
  );
}

export default LoadingScreen;
