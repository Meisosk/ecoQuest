import React, { createContext, useState, useContext } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [formVisible, setFormVisible] = useState(true);

  const toggleFormVisibility = () => {
    setFormVisible((prevFormVisible) => !prevFormVisible);
  };

  return (
    <FormContext.Provider value={{ formVisible, toggleFormVisibility }}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  return useContext(FormContext);
}
