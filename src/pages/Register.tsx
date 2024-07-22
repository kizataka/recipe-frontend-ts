import "../styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig";
// import { Header } from "../components/Header";
import { RegisterForm } from "../components/RegisterForm";

export const Register = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post("/api/account", formValues);
            if (response.status === 201) {
                console.log("ユーザー登録が完了しました");
                navigate("/api/login");
            }
        } catch (error) {
            console.error(error);
            alert("ユーザー登録に失敗しました");
        }
    };

    return (
        <>
            {/* <Header /> */}
            <div>
                <h2>ユーザー登録</h2>
            </div>
            <div className="input-area">
                <RegisterForm
                    formValues={formValues}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            </div>
        </>
    )
}