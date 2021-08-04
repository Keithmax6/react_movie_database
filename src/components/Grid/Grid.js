import { Wrapper, Content } from "./Grid.styles";
import PropTypes from "prop-types";

const Grid = (props) => {
  return (
    <Wrapper>
      <h1>{props.header}</h1>
      <Content>{props.children}</Content>
    </Wrapper>
  );
};

Grid.propTypes = {
  header: PropTypes.string,
};

export default Grid;
