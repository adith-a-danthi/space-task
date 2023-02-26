import './Pagination.css';

export default function Pagination({
  increaseIndex,
  decreaseIndex,
  setIndex,
  totalPages,
  activeIndex,
}) {
  return (
    <>
      <div className="page__list">
        <button className="page__btn" onClick={() => decreaseIndex()}>
          &lt;
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`page__btn ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setIndex(index)}
          >
            {index + 1}
          </button>
        ))}
        <button className="page__btn" onClick={() => increaseIndex()}>
          &gt;
        </button>
      </div>
    </>
  );
}
