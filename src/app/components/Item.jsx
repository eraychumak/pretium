import { useContext, useEffect, useCallback } from 'react';
import { ItemContext } from "./context";

export default function Item(props) {
  const { items, setItems, setTotalVol } = useContext(ItemContext);
  const { vol, name } = props;

  useEffect(() => {
    if (!isNaN(items[name])) return;

    setItems(prev => ({
      ...prev,
      [name]: 0
    }))
  }, []);

  const inc = useCallback(() => {
    setTotalVol(prev => prev + vol);

    setItems(prev => ({
      ...prev,
      [name]: ++prev[name]
    }))
  }, [name, vol]);

  const dec = useCallback(() => {
    if (items[name] <= 0) return;

    setTotalVol(prev => prev - vol);

    setItems(prev => ({
      ...prev,
      [name]: --prev[name]
    }))
  }, [name, vol, items]);

  return (
    <div className={`item ${items[name] > 0}`} title={`Volume: ${vol.toFixed(2)}m3`}>
      <p>{name}</p>
      <p>{items[name]}</p>
      <button className="dec" onClick={dec}>-</button>
      <button className="inc" onClick={inc}>+</button>
    </div>
  )
}
