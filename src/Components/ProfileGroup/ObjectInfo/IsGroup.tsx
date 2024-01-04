import React from 'react';
import { Label } from '../../Label';
import style from './CSS/IsGroup.module.css';
const IsGroup = ({ data }: { data: Object }) => {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    const chaves = Object.entries(data).map(([key, _], index) => ({
      id: index + 1,
      chave: key,
    }));
    const valores = Object.entries(data).map(([_, value], index) => ({
      id: index + 1,
      valor: value,
    }));

    setItems(
      chaves.map((itemChave, index) => ({
        ...itemChave,
        ...valores[index], // Supondo que chave e valor têm o mesmo comprimento
      })),
    );

  }, [data]);
  return (
    <div className={style.containerSuper}>
      <div className={style.containerInner}>

        {items.length > 0 && items.map((item, index) => (
          <React.Fragment key={`item-${index}`}>
            <div className={style.contentKey} key={`chave-${index}`}>
              <Label.Small
                text={item.chave}
                verde
                className="text-xs md:text-xl"
              />
            </div>
            <div className={style.contentValue} key={`valor-${index}`}>
              <Label.Small text={item.valor} className="text-xs md:text-xl" />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default IsGroup;
