import React, { useState, useEffect } from "react";
import "./gender.scss";
import ageOption from "./age.json";
import { Formik, Form, ErrorMessage,  } from "formik";
import { Dropdown } from "semantic-ui-react";
import {  useSearchParams } from "react-router-dom";

interface IInitialValues {
  ageDropdownOption: any;
  genderDropdownOption: any;
}
let genderOption: any = [
  { key: "1", value: "Male", text: "Male" },
  { key: "2", value: "Female", text: "Female" }
];
function Formic() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [initialValues, setInitialValues] = useState<IInitialValues>(
    undefined!
  );
  const handleSubmit = (values: any) => {
    console.log(values);
    setSearchParams(values)
  };
  const validate = (values: any) => {
    const errors: any = {};
    if (!values.ageDropdownOption) {
      errors.ageDropdownOption = "Enter your Age";
    }
    if (!values.genderDropdownOption) {
      errors.genderDropdownOption = "Please select Gender";
    }
    return errors;
  };
  
  useEffect(() => {
    if (!initialValues && searchParams) {
      setInitialValues({
        ageDropdownOption: searchParams.get("ageDropdownOption"),
        genderDropdownOption: searchParams.get("genderDropdownOption")
      });
    }
  }, [initialValues, searchParams]);

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, setFieldValue, handleChange }) => (
          <Form>
            <label htmlFor="">Age</label>
            <Dropdown
              selection
              className="age-select"
              name="ageDropdownOption"
              value={values?.ageDropdownOption}
              placeholder="Select Option"
              options={ageOption}
              onChange={(e, { value }) => {
                setFieldValue("ageDropdownOption", value);
              }}
            />
            <ErrorMessage
              name="ageDropdownOption"
              component="please"
              className="error-message"
            />
            <br/>
            <label htmlFor="">Gender</label>
            <Dropdown
              selection
              name="genderDropdownOption"
              value={values?.genderDropdownOption}
              placeholder="Select Option"
              options={genderOption}
              onChange={(e, { value }) => {
                setFieldValue("genderDropdownOption", value);
              }}
            />
            <ErrorMessage
              name="genderDropdownOption"
              component="please"
              className="error-message"
            />
            <div className="Btn">
            <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Formic;
 