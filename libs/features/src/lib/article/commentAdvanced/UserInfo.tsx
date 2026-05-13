import { useAuth } from "./hooks";

export function UserInfo() {
  const auth = useAuth();

  if (!auth || !auth.user) {
    return <p>請先登入</p>;
  }
  return <p>目前使用者：{auth.user.name}</p>;
}
