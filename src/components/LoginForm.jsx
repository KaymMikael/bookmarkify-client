import Button from "./Button";
import { useAuth } from "../hooks/useAuth";
import useLoginForm from "../hooks/useLoginForm";

const LoginForm = () => {
  const auth = useAuth();
  const { handleOnChange, formData, message, isLoading, handleLogin } =
    useLoginForm(auth);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
      <div>
        <label className="font-medium dark:text-white">Email</label>
        <input
          type="email"
          required
          name="email"
          value={formData.email}
          onChange={handleOnChange}
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg dark:text-white"
        />
      </div>
      <div>
        <label className="font-medium dark:text-white">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleOnChange}
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg dark:text-white"
        />
      </div>
      {message && <p className="text-red-500">{message}</p>}
      <Button
        text={isLoading ? "Signing in..." : "Sign in"}
        onClick={handleLogin}
      />
      <div className="text-center">
        <a href="" className="hover:text-primary dark:text-white">
          Forgot password?
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
