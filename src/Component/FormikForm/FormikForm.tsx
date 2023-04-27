import React, { useState, useEffect } from "react";
import "./formik.scss";
import { Formik, Form, ErrorMessage } from "formik";
import { Dropdown } from "semantic-ui-react";
import { useSearchParams, useLocation } from "react-router-dom";

interface IInitialValues {
  dropdownOption: any;
  dropdownOption1: any;
  dropdownOption2: any;
}

let dropdownOption: any = [
  { key: "a", value: "Rajasthan", text: "Rajasthan" },
  { key: "b", value: "Goa", text: "Goa" },
  { key: "c", value: "Himachal pradesh", text: "Himachal Pradesh " },
  { key: "d", value: "Chandigarh", text: "Chandigarh" },
  { key: "e", value: "Uttar Pradesh", text: "Uttar pradesh" },
  { key: "f", value: "Odisha", text: "Odisha" },
  { key: "g", value: "Sikkim", text: "Sikkim" },
  { key: "h", value: "Punjab", text: "Punjab" },
  { key: "a", value: "Kerala", text: "Kerala" },
  { key: "b", value: "Karnataka", text: "Karntaka" },
  { key: "c", value: "Gujarat", text: "Gujarat" },
  { key: "d", value: "Tripura", text: "Tripura" },
  { key: "e", value: "Mizoram", text: "Mizoram" },
  { key: "f", value: "Bihar", text: "Bihar" },
  { key: "g", value: "Uttarakhand", text: "Uttarakhand" },
  { key: "h", value: "Haryana", text: "Haryana" },
  { key: "a", value: "Arunachal", text: "Arunachal" },
  { key: "b", value: "Assam", text: "Assam" },
  { key: "c", value: "Meghalaya", text: "Meghalaya" },
  { key: "d", value: "Jharkhand", text: "jharkhand" },
  { key: "e", value: "Chhattisgarh", text: "Chhattisgarh" },
  { key: "f", value: "West Bengal", text: "West Bengal" },
  { key: "g", value: "Tamil Nadu", text: "Tamil nadu" },
  { key: "h", value: "Ladakh", text: "Ladakh" },
];

function FormikForm() {

  let [searchParams, setSearchParams] = useSearchParams();
  const [initialValues, setInitialValues] = useState<IInitialValues>(undefined!);
  const handleSubmit = (values: any) => {
    setSearchParams(values);
    console.log(values);
  };

  const validate = (values: any) => {
    const errors:any = {};
    if (!values.dropdownOption) {
      errors.dropdownOption = "Please select a option";
    }
    if (!values.dropdownOption1) {
      errors.dropdownOption1 = "Please select a option";
    }

    if (!values.dropdownOption2) {
      errors.dropdownOption2 = "Please select a option";
    }
    return errors;
  };


  useEffect(() => {
    if(!initialValues && searchParams) {
      setInitialValues({
        dropdownOption: searchParams.get("dropdownOption"),
        dropdownOption1: searchParams.get("dropdownOption1"),
        dropdownOption2: searchParams.get("dropdownOption2")
      })
    }
  },[initialValues, searchParams])

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({  values, setFieldValue }) => (
        <Form>
          <Dropdown
            selection
            name="dropdownOption"
            value={values?.dropdownOption}
            options={dropdownOption}
            placeholder="Select Option"
            onChange={(e, { value }) => {
              setFieldValue("dropdownOption", value);
            }}
          />
          <ErrorMessage
            name="dropdownOption"
             component="Please"
            className="error-message"
          />

          <Dropdown
            selection
            name="dropdownOption1"
            value={values?.dropdownOption1}
            placeholder="Select Option"
            options={dropdownOption}
            onChange={(e, { value }) => {
              setFieldValue("dropdownOption1", value);
            }}
          />

          <ErrorMessage
            name="dropdownOption1"
            component="please"
            className="error-message"
          />

          <Dropdown
            selection
            name="dropdownOption2"
            value={values?.dropdownOption2}
            placeholder="Select Option"
            options={dropdownOption}
            onChange={(e, { value }) => {
              setFieldValue("dropdownOption2", value);
            }}
          />
          <ErrorMessage
            name="dropdownOption2"
            component="please"
            className="error-message"
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
export default FormikForm;
