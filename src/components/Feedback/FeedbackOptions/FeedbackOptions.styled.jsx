import styled from 'styled-components';
export const ButtonBox = styled.div`
display: flex;
gap: 30px;
align-items: center;
justify-content: center;
`;
export const StateKind = ({value}) => {
switch (value) {
    case "good":
        return '#5deb94';
    case "neutral":
        return "#c7ef86";
    case "bad":
        return "#db6cc5";
    default:
        return "azure";
}
}

export const Button = styled.button`
border: 1px solid black;
min-width: 100px;
min-height: 50px;
padding: 5px;
border-radius: 4px;
background-color: ${StateKind};
box-shadow: 1px 1px 4px 2px ${StateKind};
`
