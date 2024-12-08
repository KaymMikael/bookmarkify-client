import debounce from "lodash.debounce";
import { useState } from "react";

const useLoginForm = (auth) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const hideMessage = debounce(() => {
    setMessage("");
  }, 2000); //2 seconds

  const handleLogin = async () => {
    const { email, password } = formData;

    if (!email || !password) {
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
      hideMessage();
    }
  };

  return { formData, message, isLoading, handleOnChange, handleLogin };
};

export default useLoginForm;
