import debounce from "lodash.debounce";
import { useState } from "react";
import { handleOnChange, hideMessage } from "../utils/helper";

const useLoginForm = (auth) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = handleOnChange(setFormData);
  const hideMsg = hideMessage(setMessage);

  const handleLogin = async () => {
    const { email, password } = formData;

    if (!email || !password) {
      setMessage("Please provide all fields");
      hideMsg();
      return;
    }
    setIsLoading(true);
    try {
      await auth.login(formData);
    } catch (e) {
      if (e.response && e.response.data.error) {
        setMessage(e.response.data.error);
      }
      console.error(e);
    } finally {
      setIsLoading(false);
      hideMsg();
    }
  };

  return { formData, message, isLoading, handleChange, handleLogin };
};

export default useLoginForm;
