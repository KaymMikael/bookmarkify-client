import debounce from "lodash.debounce";

export const handleOnChange = (setFormData) => (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({ ...prevData, [name]: value }));
};

export const hideMessage = (setMessage) =>
  debounce(() => {
    setMessage("");
  }, 2000); //2 seconds
