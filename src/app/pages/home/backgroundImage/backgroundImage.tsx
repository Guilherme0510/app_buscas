import './BackgroundImage.css';
import img_body from '../../../assets/images/header-search.avif'

const BackgroundImage = () => (
  <div className="background-image">
    <img src={img_body} alt="Background" />
  </div>
);

export default BackgroundImage;
