import "../styles.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig";
// import { Header } from "../components/Header";
import { RegisterForm } from "../components/RegisterForm";
import { RegisterFormValues } from "../types";

export const Register = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<RegisterFormValues>({ mode: "onChange" });

    const navigate = useNavigate();

    const onSubmit = async (data: RegisterFormValues) => {
        try {
            const response = await axiosInstance.post("/api/account", data);
            if (response.status === 201) {
                console.log("ユーザー登録が完了しました");
                navigate("/login");
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
                    register={register}
                    errors={errors}
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                />
            </div>
        </>
    )
}