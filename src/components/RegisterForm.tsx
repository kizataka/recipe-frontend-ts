import { UseFormRegister, FieldErrors, SubmitHandler } from "react-hook-form";
import { RegisterFormValues } from "../types";

interface RegisterFormProps {
    register: UseFormRegister<RegisterFormValues>;
    errors: FieldErrors<RegisterFormValues>;
    handleSubmit: (onSubmit: SubmitHandler<RegisterFormValues>) => (e?: React.BaseSyntheticEvent) => Promise<void>;
    onSubmit: SubmitHandler<RegisterFormValues>;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ register, errors, handleSubmit, onSubmit}) => {
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">ユーザー名</label>
            <input
                id="name"
                type="text"
                {...register("name", { required: "ユーザー名は必須です" })}
            />
            <label htmlFor="email">メールアドレス</label>
            <input
                id="email"
                type="email"
                {...register("email", { required: "メールアドレスは必須です" })}
            />
            <label htmlFor="password">パスワード</label>
            <input
                id="password"
                type="password"
                {...register("password", { required: "パスワードは必須です" })}
            />
            <label htmlFor="password_confirmation">パスワード（確認用）</label>
            <input
                id="password_confirmation"
                type="password"
                {...register("password_confirmation", { required: "パスワード（確認用）は必須です" })}
            />
            <button type="submit">登録</button>
        </form>
    );
}