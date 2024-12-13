import { useState } from "react";
import axiosHelper from "../axios/axiosHelper";
import { handleOnChange, hideMessage } from "../utils/helper";

const useRegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const hideMsg = hideMessage(setMessage);
  const handleChange = handleOnChange(setFormData);

  const handleButtonClick = async () => {
    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setMessage("Passwords don't match");
      setHasError(true);
      hideMsg();
      return;
    }

    setIsLoading(true);

    try {
      const body = { name: name.trim(), email: email.trim(), password };
      const result = await axiosHelper.post("/auth/register", body);
      setMessage(result.data.message);
      console.log(result.data.userId);
      // Reset inputs
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (e) {
      setHasError(true);
      if (e.response?.data?.error) {
        setMessage(e.response.data.error);
      } else {
        setMessage("An error occurred. Please try again.");
      }
      console.log(e.message);
    } finally {
      setIsLoading(false);
      hideMsg();
    }
  };

  return {
    formData,
    handleChange,
    handleButtonClick,
    isLoading,
    message,
    hasError,
  };
};

export default useRegisterForm;
