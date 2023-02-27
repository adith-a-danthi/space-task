import './TestimonialItem.css';

export default function TestimonialItem({ testimonial }) {
  return (
    <div className="testimonial" style={{ backgroundColor: testimonial.color }}>
      <h2 className="heading-2 testimonial__title">{testimonial.message}</h2>

      <div className="testimonial__author">
        <img
          className="testimonial__avatar"
          src={testimonial.avatar}
          alt="avatar"
        >
          
        </img>
        <div>
          <h3 className="testimonial__name">{testimonial.name}</h3>
          <p className="testimonial__role">{testimonial.designation}</p>
        </div>
      </div>
    </div>
  );
}
