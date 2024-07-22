import { UseFormRegister, FieldErrors, SubmitHandler } from "react-hook-form";
import { LoginFormValues } from "../types";

interface LoginFormProps {
    register: UseFormRegister<LoginFormValues>;
    errors: FieldErrors<LoginFormValues>;
    handleSubmit: (onSubmit: SubmitHandler<LoginFormValues>) => (e?: React.BaseSyntheticEvent) => Promise<void>;
    onSubmit: SubmitHandler<LoginFormValues>;
}

export const LoginForm: React.FC<LoginFormProps> = ({ register, errors, handleSubmit, onSubmit }) => {
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">メールアドレス</label>
            <input
                id="email"
                type="email"
                {...register("email", { required: "メールアドレスは必須です" })}
            />
            <p>{errors.email?.message as React.ReactNode}</p>
            <label htmlFor="password">パスワード</label>
            <input
                id="password"
                type="password"
                {...register("password", { required: "パスワードは必須です" })}
            />
            <p>{errors.password?.message as React.ReactNode}</p>
            <button type="submit">ログイン</button>
        </form>
    );
}