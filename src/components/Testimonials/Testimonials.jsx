import { useEffect, useRef, useState } from 'react';
import { TestimonialItem, Pagination } from '../../components';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    title:
      'I feel so much less stressed ❤️ as I now know we’re doing everything by the book.',
    name: 'Andry Ford',
    role: 'CEO at Whatever',
    avatar: 'https://i.pravatar.cc/300',
    color: '#fff4d4',
  },
  {
    id: 2,
    title:
      "“Every single person comes away and says - wow that's a really slick experience, that was so easy to use.”",
    name: 'Andry Ford',
    role: 'CEO at Whatever',
    avatar: 'https://i.pravatar.cc/400',
    color: '#ffab74',
  },
  {
    id: 3,
    title:
      "“Every single person comes away and says - wow that's a really slick experience, that was so easy to use.”",
    name: 'Andry Ford',
    role: 'CEO at Whatever',
    avatar: 'https://i.pravatar.cc/200',
    color: '#fabed7',
  },
];

export default function Testimonials() {
  const component = useRef(null);
  const [offsetWidth, setOffsetWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update offsetWidth when activeIndex changes to move the carousel
  useEffect(() => {
    const testimonialItem = component.current.children[0];
    const width = (testimonialItem.offsetWidth + 32) * activeIndex;
    setOffsetWidth(width);
  }, [component.current, activeIndex]);

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
