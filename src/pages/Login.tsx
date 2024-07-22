import "../styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig";
// import { Header } from "../components/Header";
import { LoginForm } from "../components/LoginForm";

export const Login = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post("/api/session", formValues);
            if (response.status === 200) {
                localStorage.setItem("token", response.data.token);
                console.log("ログインが成功しました");
                navigate("/");
            }
        } catch (error) {
            console.log("ログインに失敗しました");
            alert("ログインに失敗しました");
        }
    };

    return (
        <>
            {/* <Header /> */}
            <div>
                <h2>ログイン</h2>
            </div>
            <div className="input-area">
                <LoginForm
                    formValues={formValues}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            </div>
        </>
    )
}