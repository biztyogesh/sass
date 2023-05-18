import React, { useState, useEffect } from "react";
import "./gender.scss";
import "./form.scss";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { Dropdown } from "semantic-ui-react";
import { useNavigate, useSearchParams } from "react-router-dom";

interface IInitialValues {
  name: any;
  deptDropdownOption: any;
  terminated: boolean;
}

let deptOption: any = [
  { key: "1", value: "Frontend", text: "Frontend" },
  { key: "2", value: "Backend", text: "Backend" },
  { key: "3", value: "Full Stack", text: "Full Stack" },
  { key: "4", value: "QA", text: "QA" },
  { key: "5", value: "BA", text: "BA" },
  { key: "6", value: "Data Science", text: "Data Science" }
];

function FormikRetain() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [initialValues, setInitialValues] = useState<IInitialValues>(
    undefined!
  );

  const navigate = useNavigate();
  const handleSubmit = (values: any) => {
    console.log(values);
    console.log(initialValues.deptDropdownOption);
    setSearchParams(values);
    let params = new URLSearchParams();
    Object.keys(values).forEach((key) => {
      //sari key ko check krega
      if (Array.isArray(values[key])) {
        params.append(key, values[key].join(",")); //agr value array m aa ri hai to jood do or uske m , dedo
      } else {
        params.append(key, values[key]);  //agr ek select kiya to ek ko hi add kr dega
      }
    });
    const queryString = decodeURIComponent(params.toString());   //%2c ko htane k liye url m se
    navigate(`/form1/?${queryString}`); //url set krta hai 
  };
  const validate = (values: any) => {
    const errors: any = {};
    if (!values.name) {
      errors.name = "Enter your name";
    }
    if (!values.deptDropdownOption) {
      errors.deptDropdownOption = "Please select";
    }
    if (!values.terminated) {
      errors.terminated = "please select ";
    }
    return errors;
  };

  useEffect(() => {
    if (!initialValues && searchParams) {
      //agr initialvalue nhi h searcparam m toh setintial value usko set kr dege
      setInitialValues({
        name: searchParams.get("name"),
        // deptDropdownOption: searchParams.get("deptDropdownOption"),
        deptDropdownOption:
          searchParams.get("deptDropdownOption")?.split(",") || [],
        terminated: searchParams.get("terminated") === "true"
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
        {({ values, setFieldValue, handleChange, touched, errors }) => (
          <Form>
            <div>
              <label htmlFor="Name">Name</label>
              <Field
                name="name"
                className="select"
                value={values?.name}
                placeholder="Enter Name"
                onChange={handleChange}
              />
              <ErrorMessage
                name="name"
                component="please"
                className="error-message"
              />
            </div>
            <br />
            <div>
              <label htmlFor="Department">Department</label>
              <Dropdown
                selection
                name="deptDropdownOption"
                multiple
                value={values?.deptDropdownOption}
                placeholder="Select Option"
                options={deptOption}
                onChange={(e, { value }) => {
                  setFieldValue("deptDropdownOption", value);
                }}
              />
            </div>
            <div>
              <label htmlFor="Terminated">Terminated</label>
              <input
                name="terminated"
                type="checkbox"
                className="drop"
                checked={values?.terminated}
                placeholder="Select Option"
                onChange={handleChange}
              />
            </div>
            <ErrorMessage
              name="terminated"
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
export default FormikRetain;
