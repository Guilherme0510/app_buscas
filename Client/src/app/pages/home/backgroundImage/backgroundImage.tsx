import "./BackgroundImage.css";

const BackgroundImage = () => (
  <video className="background-video" autoPlay loop muted playsInline>
  <source src="/videos/videoplayback.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
);

export default BackgroundImage;
