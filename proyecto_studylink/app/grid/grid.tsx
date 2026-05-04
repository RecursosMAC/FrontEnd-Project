
import Tarjeta from "./Tarjetas/tarjetas";
import styles from './grid.module.css';

export default function Grid() {
  const data = [
    { title: "Card 1", description: "Descripción 1" },
    { title: "Card 2", description: "Descripción 2" },
    { title: "Card 3", description: "Descripción 3" },
    { title: "Card 4", description: "Descripción 4" },
  ];

  return (
    <div className={styles.grid}>
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
}