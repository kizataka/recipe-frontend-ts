interface RegisterFormProps {
    formValues: {
        name: string;
        email: string;
        password: string;
        password_confirmation: string;
    };
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const RegisterForm = (props: RegisterFormProps) => {
    const { formValues, handleChange, handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="ユーザー名" value={formValues.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="メールアドレス" value={formValues.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="パスワード" value={formValues.password} onChange={handleChange} />
            <input type="password" name="password_confirmation" placeholder="パスワード（確認用）" value={formValues.password_confirmation} onChange={handleChange} />
            <button type="submit">登録</button>
        </form>
    );
}