import './TestimonialItem.css';

export default function TestimonialItem({ testimonial }) {
  return (
    <div className="testimonial" style={{ backgroundColor: testimonial.color }}>
      <h2 className="heading-2 testimonial__title">{testimonial.title}</h2>

      <div className="testimonial__author">
        <img
          className="testimonial__avatar"
          src={testimonial.avatar}
          alt="avatar"
        />
        <div>
          <h3 className="testimonial__name">{testimonial.name}</h3>
          <p className="testimonial__role">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
