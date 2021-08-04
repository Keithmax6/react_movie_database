import { Image } from "./ThumbNails.styles";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ThumbNails = ({ image, movieId, clickable }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="movie-thumbnails" />
        </Link>
      ) : (
        <Image src={image} alt="movie-thumbnails" />
      )}
    </div>
  );
};

ThumbNails.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default ThumbNails;
