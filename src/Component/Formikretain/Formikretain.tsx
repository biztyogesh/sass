import React, { useState, useEffect } from "react";
import "./formikretain.scss";
import { Formik, Form, ErrorMessage } from "formik";
import { Dropdown } from "semantic-ui-react";
import { useSearchParams } from "react-router-dom";

interface IInitialValues {
  dropdownOption: any;
  dropdownOption1: any;
  dropdownOption2: any;
}

let dropdownOption: any = [
  { key: "1", value: "Rajasthan", text: "Rajasthan" },
  { key: "2", value: "Goa", text: "Goa" },
  { key: "3", value: "Himachal pradesh", text: "Himachal Pradesh " },
  { key: "4", value: "Chandigarh", text: "Chandigarh" },
  { key: "25", value: "Jammu", text: "J&K" },
  { key: "5", value: "Uttar Pradesh", text: "Uttar pradesh" },
  { key: "6", value: "Odisha", text: "Odisha" },
  { key: "7", value: "Sikkim", text: "Sikkim" },
  { key: "8", value: "Punjab", text: "Punjab" },
  { key: "9", value: "Kerala", text: "Kerala" },
  { key: "10", value: "Karnataka", text: "Karntaka" },
  { key: "11", value: "Gujarat", text: "Gujarat" },
  { key: "12", value: "Tripura", text: "Tripura" },
  { key: "13", value: "Mizoram", text: "Mizoram" },
  { key: "14", value: "Bihar", text: "Bihar" },
  { key: "15", value: "Uttarakhand", text: "Uttarakhand" },
  { key: "16", value: "Haryana", text: "Haryana" },
  { key: "17", value: "Arunachal", text: "Arunachal" },
  { key: "18", value: "Assam", text: "Assam" },
  { key: "19", value: "Meghalaya", text: "Meghalaya" },
  { key: "20", value: "Jharkhand", text: "jharkhand" },
  { key: "21", value: "Chhattisgarh", text: "Chhattisgarh" },
  { key: "22", value: "West Bengal", text: "West Bengal" },
  { key: "23", value: "Tamil Nadu", text: "Tamil nadu" },
  { key: "24", value: "Ladakh", text: "Ladakh" },
  { key: "20", value: "UAE", text: "UAE" },
  { key: "18", value: "Japan", text: "japan" },
  { key: "19", value: "USA", text: "USA" },
  { key: "21", value: "Tokyo", text: "Tokyo" },
  { key: "22", value: "Switzerland", text: "Switzerland" },
  { key: "23", value: "Canada", text: "Canada" },
  { key: "24", value: "Germany", text: "Germany" },
  { key: "25", value: "Jaipur", text: "Jaipur" }
];

function FormikRetain() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [initialValues, setInitialValues] = useState<IInitialValues>(
    undefined!
  );
  const handleSubmit = (values: any) => {
    setSearchParams(values);
    console.log(values);
  };

  const validate = (values: any) => {
    const errors: any = {};
    if (!values.dropdownOption) {
      errors.dropdownOption = "Please select";
    }
    if (!values.dropdownOption1) {
      errors.dropdownOption1 = "Please select";
    }

    if (!values.dropdownOption2) {
      errors.dropdownOption2 = "Please select";
    }
    return errors;
  };

  useEffect(() => {
    if (!initialValues && searchParams) {

      setInitialValues({
        dropdownOption: Array.from(searchParams.getAll("dropdownOption")),
        dropdownOption1: Array.from(searchParams.getAll("dropdownOption1")),
        dropdownOption2: searchParams.get("dropdownOption2")
      });
    }
  }, [initialValues, searchParams]);

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
      enableReinitialize     
    >
      {({ values, setFieldValue }) => (
        <Form>
          <Dropdown
            selection
            name="dropdownOption"
            multiple
            value={values?.dropdownOption}
            options={dropdownOption}
            placeholder="Select Option"
            onChange={(e, { value }) => {
              setFieldValue("dropdownOption", value);
            }}
          />
          <ErrorMessage
            name="dropdownOption"
            component="please"
            className="error-message"
          />

          <Dropdown
            selection
            name="dropdownOption1"
            multiple
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
export default FormikRetain;
