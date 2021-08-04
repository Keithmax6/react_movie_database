import { Wrapper, Content } from "./MovieInfoBar.styles";
import { calcTime, convertMoney } from "../../helpers";
import PropTypes from "prop-types";

const MovieInfoBar = ({ time, budget, revenue }) => {
  return (
    <Wrapper>
      <Content>
        <div className="coloumn">
          <p>Running Time: {calcTime(time)}</p>
        </div>
        <div className="coloumn">
          <p>Budget: {convertMoney(budget)}</p>
        </div>
        <div className="coloumn">
          <p>Revenue: {convertMoney(revenue)}</p>
        </div>
      </Content>
    </Wrapper>
  );
};

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export default MovieInfoBar;
