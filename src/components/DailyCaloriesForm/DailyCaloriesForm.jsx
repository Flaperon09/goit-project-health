import { Formik } from 'formik';
import * as yup from 'yup';
import { FormWrapper, LabelInput, Input, TitleRadio, InputRadio, Label,ButtonSubmit, WrapperRadio, FormError } from './DailyCaloriesForm.styled';

// Схема валидации формы с помощью YUP
const schema = yup.object().shape({
    height: yup.number('Need number').required(),
    age: yup.number().required(),
    currentWeight: yup.number().required(),
    desiredWeight: yup.number().required(),
    // bloodType: yup.required(),
});

// Начальное состояние полей
const initialValues = {
    height: '',
    age: '',
    currentWeight: '',
    desiredWeight: '',
};

export const DailyCaloriesForm = () => {

    // Обработчик отправки формы
    const handleSubmit = (values, {resetForm}) => {
    console.log(values);

    resetForm();
    };
    
    return (
        <Formik
            initialValues={initialValues} 
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            <FormWrapper>
                <LabelInput htmlFor="height">
                    <Input type="text" name="height" placeholder="Height, sm *" />
                    <FormError name="height" component="div" />
                </LabelInput>

                <LabelInput htmlFor="age">
                    <Input type="text" name="age" placeholder="Age, years *" />
                    <FormError name="age" component="div" />
                </LabelInput>

                <LabelInput htmlFor="currentWeight">
                    <Input type="text" name="currentWeight" placeholder="Current weight, kg *" />
                    <FormError name="currentWeight" component="div" />
                </LabelInput>
                
                <LabelInput htmlFor="desiredWeight">
                    <Input type="text" name="desiredWeight" placeholder="Desired weight, kg *" />
                    <FormError name="desiredWeight" component="div" />
                </LabelInput>

                <div role="group" aria-labelledby="bloodType">
                    <TitleRadio id="bloodType">Blood type *</TitleRadio>
                    
                    <WrapperRadio>
                        <InputRadio type="radio" name="blood" value="1" />
                    <Label>1</Label>

                    <InputRadio type="radio" name="blood" value="2" />
                    <Label>2</Label>

                    <InputRadio type="radio" name="blood" value="3" />
                    <Label>3</Label>

                    <InputRadio type="radio" name="blood" value="4" />
                    <Label>4</Label>
                    </WrapperRadio>
                </div>
                <ButtonSubmit type="submit">Start losing weight</ButtonSubmit>
            </FormWrapper>
        </Formik>
    )
};