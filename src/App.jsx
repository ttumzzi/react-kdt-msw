import { useEffect, useState } from 'react';
import './App.css';
import { clsx } from 'clsx';
import WineList from './component/WineList';

const WINE_CATEGORIES = [
  'reds',
  'whites',
  'sparkling',
  'rose',
  'dessert',
  'port',
];

function App() {
  const [wines, setWines] = useState(
    new Array(10).fill({
      wine: 'Image wine',
      winery: 'Some winery',
      image:
        'https://www.alkovintages.com/wp-content/uploads/2019/09/dry-red.png',
      rating: {
        average: 4.0,
      },
    })
  );
  const [category, setCategory] = useState(WINE_CATEGORIES[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  return (
    <>
      <h1>Wine Factory</h1>
      {/* 카테고리 */}
      <ul className={clsx('category-list')}>
        {WINE_CATEGORIES.map((_category) => {
          return (
            <li
              key={_category}
              className={clsx(_category === category && 'selected')}
            >
              <button onClick={() => setCategory(_category)}>
                {_category}
              </button>
            </li>
          );
        })}
      </ul>
      {/* 와인 리스트 */}
      <WineList isLoading={isLoading} error={error} wines={wines} />
    </>
  );
}

export default App;
