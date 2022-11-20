import { useNavigate } from 'react-router-dom';
import './category-item.styles.scss';

const CategoryItem = (props) => {
  const {imageUrl, title} = props.category;
  const navigate = useNavigate();
  const goToCategoryHandler = (category) => {
    navigate('shop/'+ title.toLowerCase());
  };

  return (
    <div className="category-item-container" onClick={goToCategoryHandler}>
      <div className="background-image" style={{
        backgroundImage: `url(${imageUrl})`
      }} />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
};

export default CategoryItem;