import { useEffect, useState } from 'react';
import './App.css';
import { clsx } from 'clsx';
import WineList from './component/WineList';

export const WINE_CATEGORIES = [
  'reds',
  'whites',
  'sparkling',
  'rose',
  'dessert',
  'port',
];

function App() {
  const [wines, setWines] = useState([]);
  const [category, setCategory] = useState(WINE_CATEGORIES[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();


  useEffect(() => {
    const requestWine = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/wines/' + category );
        if(!response.ok) throw response;

        const result = await response.json();
        setWines(result);
      }catch(error) {
        setError(true);

        if(error.status === 403) {
          alert("로그인을 해주세요.");
          return;
        }

        if(error.status === 500) {
          alert("서버 에러가 발생했습니다.")
          return;
        }
      }finally {
        setIsLoading(false);
      }
      
    }

    requestWine();

  }, [category])

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
