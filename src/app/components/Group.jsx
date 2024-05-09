import { useEffect, useState } from 'react';
import { ItemContext } from "./context";

export default function Group(props) {
  const [totalVol, setTotalVol] = useState(0);
  const [items, setItems] = useState({});

  const { name } = props;

  useEffect(() => {
    const itemCount = Object.values(items).reduce((acc, item) => acc + item, 0);

    props.setItems(prev => ({
      ...prev,
      [name]: {
        itemCount,
        totalVol
      }
    }));
  }, [name, totalVol]);

  return (
    <ItemContext.Provider value={{totalVol, setTotalVol, items, setItems}}>
      {props.visible && (
        <div className="items">
          {props.children}
        </div>
      )}
    </ItemContext.Provider>
  )
}
