import { Fragment } from "react";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../../config";
import { useHomeFetch } from "../../hooks/useHomeFetch";
import HeroImage from "../HeroImage/HeroImage";
import Grid from "../Grid/Grid";
import ThumbNails from "../Thumb/ThumbNails";
import Spinner from "../Spinner/Spinner";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import NoImage from "../../images/no_image.jpg";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();
  console.log(state);
  if (error) return <div>Something Went wrong</div>;
  return (
    <Fragment>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? "SearchResults" : "Popular Movies"}>
        {state.results.map((movie) => {
          return (
            <ThumbNails
              key={movie.id}
              clickable
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : NoImage
              }
              movieId={movie.id}
            />
          );
        })}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button
          text="Load More"
          callback={() => {
            setIsLoadingMore(true);
          }}
        />
      )}
    </Fragment>
  );
};

export default Home;
