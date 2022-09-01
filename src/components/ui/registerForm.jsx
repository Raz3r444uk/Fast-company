import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField";
import RadioField from "../common/form/radioField";
import SelectField from "../common/form/selectField";
import { validator } from "../../utils/validator";
import MultiSelectField from "../common/form/multiSelectField";
import api from "../../api";

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        sex: "Male",
        qualities: []
    });
    const [professions, setProfession] = useState();
    const [errors, setErrors] = useState({});
    const [qualities, setQualities] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    useEffect(() => {
        validate();
    }, [data]);

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
        api.qualities.fetchAll().then((data) => setQualities(data));
    }, []);

    const validatorConfig = {
        email: {
            isRequred: {
                message: `Поле е-мейл обязятально для заполнения!`
            },
            isEmail: {
                message: `E-mail введен некорректно!`
            }
        },
        password: {
            isRequred: {
                message: `Поле пароль обязятально для заполнения!`
            },
            isCapitallSymbol: {
                message: `Пароль должен содержать хотя бы одну заглавную букву!`
            },
            isContainDigit: {
                message: `Пароль должен содержать хотя бы одно число!`
            },
            min: {
                message: `Минимальное количество симоволов - 8`,
                value: 8
            }
        },
        profession: {
            isRequred: {
                message: `Обязательно выберите профессию!`
            }
        }
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length !== 0;
    };

    const isValid = Object.keys(errors).length !== 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Электронная почта"
                name="email"
                value={data.email}
                id="name"
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                value={data.password}
                id="password"
                onChange={handleChange}
                error={errors.password}
            />
            <SelectField
                onChange={handleChange}
                options={professions}
                defaultOption="Выберите профессию: "
                label="Выберите вашу профессию: "
                value={data.profession}
                error={errors.profession}
            />
            <RadioField
                options={[
                    { name: "Male", value: "Male" },
                    { name: "Female", value: "Female" },
                    { name: "Other", value: "Other" }
                ]}
                value={data.sex}
                name="sex"
                onChange={handleChange}
                label="Выберите ваш пол"
            />

            <MultiSelectField
                onChange={handleChange}
                options={qualities}
                name="qualities"
                label="Выберите ваши качества"
            />
            <button
                type="submit"
                disabled={isValid}
                className="btn btn-primary w-100 mx-auto"
            >
                Submit
            </button>
        </form>
    );
};

export default RegisterForm;
