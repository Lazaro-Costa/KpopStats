import React, { useEffect, useState } from 'react';

const DeuCerto: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);


  // Componente não testado
  const showComponentFor500ms = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  useEffect(() => {
    showComponentFor500ms();
  }, []);

  return (
    <div>
      {isVisible && (
        <div>
          <h2>Deu Certo!</h2>
          {/* Coloque aqui o conteúdo que deseja exibir temporariamente */}
        </div>
      )}
    </div>
  );
};

export default DeuCerto;
