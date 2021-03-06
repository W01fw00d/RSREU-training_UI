import React from 'react';

export const Categories = ({ categories, setCategory }) => (
  <div className="side side_categories">
    <ul>
      {categories.map(li => (<li key={li.id} onClick={() => setCategory(li.id)} style={{ color: li.color }}><a><span>{li.title}</span></a></li>))}
    </ul>
  </div>
);
