import styled from 'styled-components';

// Стили оболочки хедера
export const HeaderElement = styled.div`
    display: flex;
    justify-content: space-between;
    width: 280px;
    height: 44px;
    margin: 0 auto 0 auto;

    background-color: ${props => { return props.theme.colors.background }};

    // Медиазапрос для планшета
    @media screen and (min-width: ${props => { return props.theme.breakpoints.tablet }}) {
        width: 704px;
    };

    // Медиазапрос для десктопа
    @media screen and (min-width: ${props => { return props.theme.breakpoints.desktop }}) {
        width: 500px;
        height: 80px;
        justify-content: left;
        align-items: end;
        margin: 0 0 0 16px;
    }
`;

// Стили оболочки кнопок логина и регистрации
export const LogRegElement = styled.div`
    display: flex;
    align-items: center;

    // Медиазапрос для десктопа
    @media screen and (min-width: ${props => { return props.theme.breakpoints.desktop }}) {
        width: 300px;
        height: 32px;
    }

    // Медиазапрос для десктопа
    @media screen and (min-width: ${props => { return props.theme.breakpoints.desktop }}) {
        width: 230px;
        margin: 0;
        padding: 0 0 0 20px;

        border-left: 2px solid ${props => { return props.theme.colors.headerUnderLine }};
    }
`;

// Стили кнопок логина и регистрации
export const LogRegItem = styled.p`
    font-weight: 700;
    font-size: 14px;
    line-height: 17.01px;
    /* letter-spacing: 4%; */
    color: ${props => { return props.theme.colors.headerLogReg }};
    
    &:nth-child(1) {
        margin-right: 14px;

        // Медиазапрос для планшета
        @media screen and (min-width: ${props => { return props.theme.breakpoints.tablet }}) {
        margin-right: 24px;
        }
    }
`;

// Стили логотипа
export const Logo = styled.picture`
    // Медиазапрос для десктопа
    @media screen and (min-width: ${props => { return props.theme.breakpoints.desktop }}) {
        margin: 0 24px 10px 0;
    }
`;