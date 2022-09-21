import PropTypes from 'prop-types';
import { Button, ButtonBox } from './FeedbackOptions.styled';

const FeedbackOptions = (props) => {
  const {options, onLeaveFeedback} = props;

    return (<ButtonBox>
{options.map((option) => (
  <Button key = {option}
          type="button"
          value={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </Button>
))}
      </ButtonBox>)
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
}