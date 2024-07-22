interface LoginFormProps {
    formValues: {
        email: string;
        password: string;
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const LoginForm = (props: LoginFormProps) => {
    const { formValues, handleChange, handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="メールアドレス" value={formValues.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="パスワード" value={formValues.password} onChange={handleChange} />
            <button type="submit">ログイン</button>
        </form>
    );
}