import Button from "./Button";
import useRegisterForm from "../hooks/useRegisterForm";

const RegisterForm = () => {
  const {
    handleChange,
    formData,
    message,
    hasError,
    isLoading,
    handleButtonClick,
  } = useRegisterForm();

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
      <div>
        <label className="font-medium">Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
          minLength={4}
          maxLength={50}
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="font-medium">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="font-medium">Password</label>
        <input
          type="password"
          name="password"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
          minLength={8}
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="font-medium">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
          minLength={8}
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>
      {message && (
        <p className={hasError ? "text-red-500" : "text-green-500"}>
          {message}
        </p>
      )}
      <Button
        text={isLoading ? "Creating..." : "Create account"}
        onClick={handleButtonClick}
        disabled={isLoading}
      />
    </form>
  );
};

export default RegisterForm;
