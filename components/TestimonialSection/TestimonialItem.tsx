import styles from "./TestimonialSection.module.scss";

interface IProps {
  picturePath: string;
  body: string;
  name: string;
  position: string;
}

const TestimonialItem = ({ picturePath, body, name, position }: IProps) => {
  return (
    <div className={styles.testimonialItem}>
      <img className={styles.picture} src={picturePath} />
      <p className={styles.body}>{body}</p>
      <p className={styles.name}>{name}</p>
      <p className={styles.position}>{position}</p>
    </div>
  );
};

export default TestimonialItem;
