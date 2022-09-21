import PropTypes from 'prop-types';
import { BoxKind, BoxTotal, Chip} from './Statistics.styled';
const Statistics = (props) => {
    const {good, neutral, bad, total, positivePercentage} = props;
    return (
    <div>
        <BoxKind value={"good"}>Good: <Chip>{good}</Chip></BoxKind>
        <BoxKind value={"neutral"}>Neutral: <Chip>{neutral}</Chip></BoxKind>
        <BoxKind value={"bad"}>Bad: <Chip>{bad}</Chip></BoxKind>
        <BoxTotal>Total:<Chip>{total}</Chip></BoxTotal>
        <BoxTotal>Positive feedback:<Chip>{positivePercentage}</Chip></BoxTotal>
    </div>
    )
}

export default Statistics;

Statistics.propTypes = {
    good : PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
}
