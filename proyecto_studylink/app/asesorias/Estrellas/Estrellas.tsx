import styles from './Estrellas.module.css';

interface EstrellasProps {
  rating: number;
}

export const Estrellas = ({ rating }: EstrellasProps) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.3;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={`star-${i}`} className="fas fa-star"></i>);
  }
  if (hasHalf) {
    stars.push(<i key="star-half" className="fas fa-star-half-alt"></i>);
  }
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
  }

  return <span className={styles.estrellas}>{stars}</span>;
};