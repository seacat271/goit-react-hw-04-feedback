import PropTypes from 'prop-types';
import { Title, Container } from '../Section/Section.styled';
const Section = (props) => {
const {title, children} = props;
    return (<Container>
    <Title>{title}</Title>
    {children}</Container>
    )
}

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}
