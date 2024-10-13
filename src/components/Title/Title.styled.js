import styled from 'styled-components';

export const PageTitle = styled.p`
    width: 280px;
    margin: 32px auto 0 auto;

    font-weight: 700;
    font-size: 18px;
    line-height: 25.2px;
    color: ${props => { return props.theme.colors.title }};
    background-color: ${props => { return props.theme.colors.background }};

    // Медиазапрос для планшета
    @media screen and (min-width: ${props => { return props.theme.breakpoints.tablet }}) {
        width: 550px;
        margin: 100px 0 0 32px;

        font-size: 34px;
        line-height: 47.6px;
    };

    // Медиазапрос для десктопа
    @media screen and (min-width: ${props => { return props.theme.breakpoints.desktop }}) {
        width: 550px;
        margin: 147px 0 0 16px;
    }
`;