import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormWrapper = styled(Form)`
    position: relative;
    width: 280px;
    margin: 34px 0 0 20px;

    // Медиазапрос для планшета
    @media screen and (min-width: ${props => { return props.theme.breakpoints.tablet }}) {
        display: flex;
        flex-wrap: wrap;
        column-gap: 30px;

        width: 520px;
        height: 290px;
        margin: 68px 0 0 32px;
    };

    // Медиазапрос для десктопа
    @media screen and (min-width: ${props => { return props.theme.breakpoints.desktop }}) {
        margin: 68px 0 0 16px;
    }
`;

export const LabelInput = styled.label`
    width: 240px;
    height: 1px;
`;

export const Input = styled(Field)`
    width: 220px;
    height: 24px;
    margin-bottom: 32px;

    border: none;
    border-bottom: 1px solid ${props => { return props.theme.colors.mainFormUnderLine }};

    &::placeholder {
        font-weight: 700;
        font-size: 14px;
        line-height: 17.01px;

        color: ${props => { return props.theme.colors.mainFormPlaceholder }};
    }

    // Медиазапрос для планшета
    @media screen and (min-width: ${props => { return props.theme.breakpoints.tablet }}) {
        width: 240px;
        height: 36px;
        margin-bottom: 0px;

        &::placeholder {
           display: inline-block;
        }
    }
`;

export const TitleRadio = styled.p`
    margin: 0 0 8px 3px;

    font-weight: 700;
    font-size: 14px;
    line-height: 17.01px;

    color: ${props => { return props.theme.colors.mainFormPlaceholder }};

    // Медиазапрос для планшета
    @media screen and (min-width: ${props => { return props.theme.breakpoints.tablet }}) {
        display: block;
        width: 240px;
        height: 36px;
        margin: 0 0 8px 0;
        padding: 9px 0 0 3px;

        background-color: white;
        border-bottom: 1px solid ${props => { return props.theme.colors.mainFormUnderLine }};
    }
`;

export const WrapperRadio = styled.div`
    display: flex;
    align-items: center;
`;

export const InputRadio = styled.input`
    width: 20px;
    height: 20px;
    margin-right: 8px;
    appearance: none;
    border: 1px solid ${props => { return props.theme.colors.mainFormPlaceholder }}; /* Цвет границы радиокнопки */
    border-radius: 50%;
    outline: none; /* Убираем стандартный стиль радиокнопки */
    cursor: pointer;
    position: relative;

    /* Стили для точки внутри радиокнопки */
    &::before {
        content: '';
        width: 10px; /* Размер точки */
        height: 10px;
        border-radius: 50%;
        background-color: transparent; /* Прозрачная по умолчанию */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: background-color 0.5s ease;
    }

    &:checked {
        /* background-color: ${props => { return props.theme.colors.accent }}; Цвет точки в выбранной кнопке */
    }

    /* Изменяем цвет точки при выборе радиокнопки */
    &:checked::before {
        background-color: ${props => { return props.theme.colors.accent }}; /* Цвет точки в выбранной кнопке */
    }

    /* Стили для лейбла выбранной радиокнопки */
    &:checked + label {
        font-weight: 700;
        color: ${props => { return props.theme.colors.accent }}; /* Цвет лейбла для выбранной кнопки */
    }
`;

export const Label = styled.label`
    margin: 0 20px 0 0;
    &:last-child {
        margin-right: 0;
    }
    
    font-weight: 400;
    font-style: 14px;
    line-height: 17.01px;
    color: ${props => { return props.theme.colors.mainFormPlaceholder }};
`;

export const ButtonSubmit = styled.button`
    width: 210px;
    height: 43px;
    margin: 40px 0 100px 35px;

    font-weight: 700;
    font-style: 14px;
    line-height: 17.01px;
    color: ${props => { return props.theme.colors.mainFormButtonText }};

    border: none;
    border-radius: 30px;
    background-color: ${props => { return props.theme.colors.accent }};
    box-shadow: 0px 4px 10px 0px rgba(252, 132, 45, 0.5);

    &:active {
        box-shadow: 0px -4px 10px 0px rgba(252, 132, 45, 0.5);
    };

    cursor: pointer;

    // Медиазапрос для планшета
    @media screen and (min-width: ${props => { return props.theme.breakpoints.tablet }}) {
        position: absolute;
        top: 300px;
        left: 0;
        margin: 0;
    };

    // Медиазапрос для десктопа
    @media screen and (min-width: ${props => { return props.theme.breakpoints.desktop }}) {
        top: 250px;
        left: 350px;
    }
`;

// Стилизация сообщения об ошибке
const ErrorText = styled.p`
  color: red;
  font-weight: 400;
`;

// Функция рендера сообщения об ошибке валидации
export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

