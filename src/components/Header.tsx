// import { Link } from "react-router-dom";
// import { useAuth } from '../hooks/useAuth';
// import { useLogout } from '../hooks/useLogout'; // ログアウトフックをインポート

// export const Header = () => {
//     const user = useAuth();
//     const logout = useLogout(); // ログアウト関数を取得
//     console.log(user);

//     return (
//         <div className="header">
//             <Link to="/api/dishList">
//                 <h1>レシピ共有アプリ</h1>
//             </Link>
//             <div className="button-group">
//                 {user ? (
//                     <>
//                         <Link to="/api/addDish">
//                             <button className="post-button">投稿</button>
//                         </Link>
//                         <Link to={`/api/userDetail/${user.id}`}>
//                             <button className="mypage-button">マイページ</button>
//                         </Link>
//                         <button className="logout-button" onClick={logout}>ログアウト</button> {/* ログアウトボタンにクリックイベントを追加 */}
//                         <p>{user.name}さん</p>
//                     </>
//                 ) : (
//                     <>
//                         <Link to="/api/login">
//                             <button className="login-button">ログイン</button>
//                         </Link>
//                         <Link to="/api/register">
//                             <button className="register-button">ユーザー登録</button>
//                         </Link> 
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// }
export {};