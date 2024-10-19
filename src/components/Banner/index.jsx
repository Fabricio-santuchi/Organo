import "./Banner.css";
import imgBanner from "/public/banner.png";

const Banner = () => {
  return (
    <header className="banner">
      <img src={imgBanner} alt="Banner" />
    </header>
  );
};

export default Banner;
