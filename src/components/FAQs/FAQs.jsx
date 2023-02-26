import { Accordian, Tabs } from '../../components';
import './FAQs.css';

const faq = {
  heading: 'FAQ Heading',
  content:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.',
};

export default function FAQs() {
  return (
    <section className="faqs">
      <div className="content">
        <div className="tab__container">
          <h2 className="faq__heading">FAQ Heading</h2>

          <Tabs tabs={[...Array(5)]} />
        </div>
        <div className="faq__container">
          {[...Array(5)].map((_, i) => (
            <Accordian
              key={i}
              data={{ ...faq, heading: faq.heading + ` ${i + 1}` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
