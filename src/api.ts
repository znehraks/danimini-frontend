import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

type TLoginArgs = {
  email: string;
  password: string;
};
type ILoginReturnData = {
  accessToken: string;
  email: string;
};
export const login = async ({ email, password }: TLoginArgs) => {
  const res = await axios.post<ILoginReturnData>("/users/login", {
    email,
    password,
  });
  return res;
};
