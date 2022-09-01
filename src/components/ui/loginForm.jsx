import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";

const LoginForm = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    useEffect(() => {
        validate();
    }, [data]);

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

export default LoginForm;
