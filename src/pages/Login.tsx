import "../styles.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig";
// import { Header } from "../components/Header";
import { LoginForm } from "../components/LoginForm";
import { LoginFormValues } from "../types";

export const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormValues>({ mode: "onChange" });

    const navigate = useNavigate();


    const onSubmit = async(data: LoginFormValues) => {
        try {
            const response = await axiosInstance.post("/api/session", data);
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
                    register={register}
                    errors={errors}
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                />
            </div>
        </>
    )
}