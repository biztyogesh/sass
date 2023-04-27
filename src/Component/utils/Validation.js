export const namevalidation = {
    required: true,
    pattern: {
      value: /^[A-Za-z]+$/,
    },
  };
  export const Emailvalidation = {
    required: true,
    //   pattern: {
    //     value: /^[A-90-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/,
    //   },
  };
  export const normalizePhone = (value) => {
    if (!value) {
      return value;
    }
    const onlyNums = value.replace(/[^\d]/g, "");
    if (onlyNums.length <= 5) {
      return onlyNums;
    }
    if (onlyNums.length <= 7) {
      return `${onlyNums.slice(0, 5)}-${onlyNums.slice(5)}`;
    }
    return `${onlyNums.slice(0, 5)}-${onlyNums.slice(5, 10)}`;
  };
  
  export const firstnamevalidation = { required: true };
  export const lastnamevalidation = { required: true };
  export const Phonevalidation = { required: true };
  
  export const Agevalidation = {
    required: true,
    min: 18,
    max: 40,
    pattern: {
      value: /^[0-9]*$/,
      message: "Only numbers are allowed",
    },
  };
  export const Departmentvalidation = { required: true };
  export const Gendervalidation = { required: true };
  export const Termsvalidation = { required: true };