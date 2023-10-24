import React, { createContext, useState, useContext, useEffect } from "react";
import { dataFetchingFunctions } from "../GetTables";
const { AddFormData, GetFormData } = dataFetchingFunctions;

const FormContext = createContext();

export function FormProvider({ children }) {
  const [formVisible, setFormVisible] = useState(true);
  const [emissionTotal, setEmissionTotal] = useState(0);
  const [exsistingFormData, setExsistingFormData] = useState(null);
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const form = await GetFormData();
      if (form && form[0] && form[0].FormData && form[0].FormData.length >= 1) {
        setExsistingFormData(form[0].FormData);
        setFormVisible(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFormData(exsistingFormData);
  }, [exsistingFormData]);

  //adds everything in the form data array to get total
  useEffect(() => {
    const updateFormData = async () => {
      if (formData && formData.length > 0) {
        AddFormData(formData);
        let total = 0;
        for (let i = 0; i < formData.length; i++) {
          total += formData[i];
        }
        setEmissionTotal(total);
      }
    };
    updateFormData();
  }, [formData]);

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
