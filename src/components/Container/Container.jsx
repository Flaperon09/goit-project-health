import { Header } from "components/Header";
import { Title } from "components/Title";
import { Wrapper, HeaderWrapper } from "./Container.styled";
import { DailyCaloriesForm } from "components/DailyCaloriesForm/DailyCaloriesForm";


export const Container = () => {
    return (
        <Wrapper>
            <HeaderWrapper>
                <Header />
            </HeaderWrapper>
            <Title />
            <DailyCaloriesForm />
        </Wrapper>
    )
};