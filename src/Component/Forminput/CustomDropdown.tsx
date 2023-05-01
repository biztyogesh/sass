import React from "react";
import "./customdropdown.scss";
import { Formik, Form, ErrorMessage } from "formik";
import { Dropdown } from "semantic-ui-react";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";

interface IInitialValues {
  dropdownOption: any;
  dropdownOption1: any;
  dropdownOption2: any;
}

let dropdownOption: any = [
  { key: "a", value: "Physics", text: "Physics" },
  { key: "b", value: "Chemistry", text: "Chemistry" },
  { key: "c", value: "Mathematics", text: "Mathematics" },
  { key: "d", value: "Computer", text: "Computer" },
  { key: "e", value: "Hindi", text: "Hindi" },
  { key: "f", value: "Zoology", text: "Zoology" },
  { key: "g", value: "Botany", text: "Botany" },
  { key: "h", value: "Geography", text: "Geography" },
];

function FormikForm() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);   
  }
  let query = useQuery();
  let navigate = useNavigate();
  let { pathname, search, } = useLocation();   /*use location use ki hai jis m se path name or search query nikali hai */
  console.log(pathname, search);

  let [searchParams, setSearchParams] = useSearchParams();   /*useseachparam usestate ki tarha hai jisme seachparam url se query le k aata hai key or value ki form m or setsearchparam query m key or values set krta hai */

  const handleSubmit = (values: any) => {   /*formik ki koi b value jo form ki field m hogi woh handlesubmit k parameter values m aayegi */
    let queryParams = new URLSearchParams({   /*urlsearchparam nodejs ka hi inbuilt function hai aur ye
     ? k aage ki value dudta hai or isko ? mil jata hai to isse aage k key or value m store krwa do */
      param2: values.dropdownOption2,
    });
    console.log(values.dropdownOption);
    if (
      Array.isArray(values.dropdownOption) &&   /* condition lgayi ki agr value array m aa ri hai  */
      Array.isArray(values.dropdownOption1)    /* condition lgayi ki agr  dropdownoption1 ki value array m aa ri hai yani ki 1 se jyada values select ki hai   */
    ) {
      console.log(true);
      values.dropdownOption.forEach((item: any, index: any) => {  /*foreach lga diya ki ab array k andr sb kuch dekho*/
        console.log(item);
        queryParams.append("param", item);   /*new value real krta hai append*/
      });
      values.dropdownOption1.forEach((item: any, index: any) => {  /*for each lga diya  ki ab array k andr sb kuch dekha do*/
        console.log(item);
        queryParams.append("param1", item);
      });
    } else {
      console.log(false);
    }

    navigate(`/?${queryParams}`);    /**ye new search param jo update hokr aaya to ye browser m new url set kr dega  */
    console.log(values);
  };

  const validate = (values: any) => {
    const errors: any = {};
    if (!values.dropdownOption) {
      errors.dropdownOption = "Please select an option";
    }
    if (!values.dropdownOption1) {
      errors.dropdownOption1 = "Please select an option";
    }
    if (!values.dropdownOption2) {
      errors.dropdownOption2 = "Please select an option";
    }
    return errors;
  };

  
  const initialDropdownOption = Array.from(searchParams.getAll("param"));  /**jhaa jhaa pr param1 hai uski value ek array m store kr dega jo ki semantic ui magta hai mutliple dropdown ki value magte hue */
  const initialDropdownOption1 = Array.from(searchParams.getAll("param1"));
  const initialDropdownOption2 = query.get("param2") || "";

  const initialValues: IInitialValues = {
    dropdownOption: initialDropdownOption,
    dropdownOption1: initialDropdownOption1,
    dropdownOption2: initialDropdownOption2,
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({  values, setFieldValue }) => (
        <Form>
          <Dropdown
            selection
            multiple
            name="dropdownOption"
            placeholder="Select Option"
            value={values.dropdownOption}
            options={dropdownOption}
            onChange={(e, { value }) => {
              setFieldValue("dropdownOption", value);
            }}
          />
          <ErrorMessage
            name="dropdownOption"
            component="div"
            className="error-message"
          />
          <Dropdown
            selection
            multiple
            name="dropdownOption1"
            placeholder="Select Option"
            value={values.dropdownOption1}
            options={dropdownOption}
            onChange={(e, { value }) => {
              setFieldValue("dropdownOption1", value);
            }}
          />
          <ErrorMessage
            name="dropdownOption1"
            component="div"
            className="error-message"
          />
          <Dropdown
            selection
            name="dropdownOption2"
            placeholder="Select Option"
            value={values.dropdownOption2}
            options={dropdownOption}
            onChange={(e, { value }) => {
              setFieldValue("dropdownOption2", value);
            }}
          />
          <ErrorMessage
            name="dropdownOption2"
            component="div"
            className="error-message"
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
