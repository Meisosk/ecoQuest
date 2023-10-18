import React, { createContext, useState, useContext, useEffect } from "react";
import { dataFetchingFunctions } from "../GetTables";
const { AddFormData, GetFormData } = dataFetchingFunctions;

const FormContext = createContext();

export function FormProvider({ children }) {
  const [formVisible, setFormVisible] = useState(true);
  const [emissionTotal, setEmissionTotal] = useState(0);
  const [exsistingFormData, setExsistingFormData] = useState(null);
  const [formData, setFormData] = useState(
    exsistingFormData ? exsistingFormData : []
  );

  useEffect(() => {
    const fetchData = async () => {
      const form = await GetFormData();
      if (form[0].FormData.length >= 1) {
        setExsistingFormData(form[0].FormData);
        setFormVisible(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("exsisting form data", exsistingFormData);
  }, [exsistingFormData]);

  // [21.771, 0.050553, 0.047724, 1.3172302, 1.95275]

  useEffect(() => {
    AddFormData(formData);
    console.log("new form data", formData);
    let total = 0;
    for (let i = 0; i < formData.length; i++) {
      total += formData[i];
    }
    setEmissionTotal(total);
  }, [formData, exsistingFormData]);

  const toggleFormVisibility = () => {
    setFormVisible((prevFormVisible) => !prevFormVisible);
  };

  return (
    <FormContext.Provider
      value={{
        formVisible,
        toggleFormVisibility,
        emissionTotal,
        setFormData,
        formData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  return useContext(FormContext);
}
