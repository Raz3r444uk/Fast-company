import React, { useState, useEffect } from "react";
import TextField from "../components/textField";
import { validator } from "../utils/validator";

const Login = () => {
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
            }
        },
        password: {
            isRequred: {
                message: `Поле пароль обязятально для заполнения!`
            }
        }
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length !== 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };

    return (
        <form
            className="d-flex justify-content-center "
            onSubmit={handleSubmit}
        >
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
            <button>Submit</button>
        </form>
    );
};

export default Login;
