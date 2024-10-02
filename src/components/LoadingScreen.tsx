import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const messages = [
    '¿Sabías que AWS tiene más servidores que tacos hay en la Condesa un viernes por la noche? ¡Y eso ya es decir mucho!',
    'La nube de AWS es tan grande que podrías guardar todas las recetas de mole de todas las abuelas mexicanas... ¡y aún te sobraría espacio!',
    'Si cada instancia EC2 fuera un chile, AWS tendría suficientes para hacer el mole más picante del universo. ¡Hasta el Chapulín Colorado diría "¡No contaban con mi astucia!" al probarlo!',
    'AWS tiene centros de datos en tantos países que podrías hacer una vuelta al mundo más rápido que decir "¡Ándale, ándale!". Y sí, también tienen uno en México.',
    'La capacidad de almacenamiento de AWS S3 es tan grande que podrías guardar cada grano de arena de todas las playas de Cancún... ¡y aún tendrías espacio para las sombrillas!'
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