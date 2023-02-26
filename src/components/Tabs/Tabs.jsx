import { useState } from 'react';
import './Tabs.css';

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs">
      {tabs.map((_, i) => (
        <button
          key={i}
          className={`tab__btn ${activeTab === i ? 'active' : ''}`}
          onClick={() => setActiveTab(i)}
        >
          Tab Item {i + 1}
        </button>
      ))}
    </div>
  );
}
