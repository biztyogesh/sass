
import { Form, Button } from "semantic-ui-react";
 import { useForm } from "react-hook-form";
import {  CustomDropdown, } from "../Component";
import "./hooks.scss";


export default function FormValidation() {
  const {
    register, 
    setValue, 
    trigger,
    handleSubmit, 
    formState: { errors }, 
  } = useForm(); 
  

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <div className="HooksForm">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form>
        <CustomDropdown
          name="Department"
          placeholder="department"
          register={register}
          errors={errors}
          setValue={setValue}
          trigger={trigger}
        /> 
        </Form>
        <Form>
        <CustomDropdown
          name="Department"
          placeholder="department"
          register={register}
          errors={errors}
          setValue={setValue}
          trigger={trigger}
        /> 
        </Form>

        <Form>
        <CustomDropdown
          name="Department"
          placeholder="department"
          register={register}
          errors={errors}
          setValue={setValue}
          trigger={trigger}
        /> 
        </Form>
        
        <div className="btn">
        <Button type="submit">Submit</Button>
        
        </div>
      </Form>
    </div>
  );
}