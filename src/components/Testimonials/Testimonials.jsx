import { useEffect, useRef, useState } from 'react';
import { TestimonialItem, Pagination } from '../../components';
import './Testimonials.css';

export default function Testimonials() {
  const component = useRef(null);
  const [offsetWidth, setOffsetWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  const getTestimonials = async () => {
    fetch(
      'https://naseers819.wixsite.com/website-5/_functions/webpageTestimonials'
    )
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
      })
      .catch((err) => console.log(err));
  };

  const getTestimonialWidth = () => {
    const testimonialItemWidth =
      component.current?.children[0]?.offsetWidth ?? 0;
    const width = (testimonialItemWidth + 32) * activeIndex;
    setOffsetWidth(width);
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  // Update offsetWidth when activeIndex changes to move the carousel
  useEffect(() => {
    getTestimonialWidth();
  }, [testimonials, activeIndex]);

  // Update active index of the carousel
  const increaseIndex = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  const decreaseIndex = () => {
    setActiveIndex((prev) =>
      prev - 1 < 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="testimonials">
      <h1 className="heading-1">Testimonials</h1>

      {/* Testimonials Carousel */}
      <div
        ref={component}
        className="carousel"
        style={{ transform: `translateX(-${offsetWidth}px)` }}
      >
        {testimonials.map((testimonial) => (
          <TestimonialItem key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        activeIndex={activeIndex}
        totalPages={testimonials.length}
        increaseIndex={increaseIndex}
        decreaseIndex={decreaseIndex}
        setIndex={setActiveIndex}
      />
    </section>
  );
}
