import { Wrapper, Content, Text } from "./HeroImage.styles";
import PropTypes from "prop-types";

const HeroImage = (props) => {
  return (
    <Wrapper image={props.image}>
      <Content>
        <Text>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default HeroImage;
