import styled from 'styled-components';
import { StateKind } from '../FeedbackOptions/FeedbackOptions.styled';

export const BoxKind = styled.div`
padding: 10px;
background-color: ${StateKind}; 
font-size: 26px;
border-radius: 3px;

&:not(:last-child) {
margin-bottom: 10px;
}
`;
export const BoxTotal = styled(BoxKind)`

font-weight: 700;`

export const Chip = styled.span`
padding-left: 20px;`