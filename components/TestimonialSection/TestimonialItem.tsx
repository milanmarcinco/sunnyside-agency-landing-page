import Image from "next/image";

import styles from "./TestimonialSection.module.scss";

interface IProps {
  picture: StaticImageData;
  body: string;
  name: string;
  position: string;
}

const TestimonialItem = ({ picture, body, name, position }: IProps) => {
  return (
    <div className={styles.testimonialItem}>
      <Image className={styles.picture} src={picture} width="60" height="60" />
      <p className={styles.body}>{body}</p>
      <p className={styles.name}>{name}</p>
      <p className={styles.position}>{position}</p>
    </div>
  );
};

export default TestimonialItem;
