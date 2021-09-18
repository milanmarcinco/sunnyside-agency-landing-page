import TestimonialItem from "./TestimonialItem";

import ImageEmily from "../../assets/image-emily.jpg";
import ImageJennie from "../../assets/image-jennie.jpg";
import ImageThomas from "../../assets/image-thomas.jpg";

import styles from "./TestimonialSection.module.scss";

const TESTIMONIALS = [
  {
    picture: ImageEmily,
    body: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    position: "Marketing Director",
  },
  {
    picture: ImageJennie,
    body: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    position: "Chief Operating Officer",
  },
  {
    picture: ImageThomas,
    body: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: "Jennie F.",
    position: "Business Owner",
  },
];

const TestimonialSection = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <h4 className={styles.heading}>CLIENT TESTIMONIALS</h4>
        <div className={styles.container}>
          {TESTIMONIALS.map((testimonial, i) => (
            <TestimonialItem {...testimonial} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
