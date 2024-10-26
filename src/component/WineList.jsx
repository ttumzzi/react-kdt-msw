import Error from './Error';
import LoadingSpinner from './LoadingSpinner';

const WineList = ({ isLoading, error, wines }) => {
  if (error) {
    return <Error />;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ul className="grid-list">
      {wines.map(({ wine, rating, winery, image }) => {
        return (
          <li key={wine}>
            <div className="img-wrapper">
              <img src={image} />
              <span className="tag">{rating?.average ?? 0} / 5</span>
            </div>
            <h4>{wine}</h4>
            <div>from {winery}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default WineList;
