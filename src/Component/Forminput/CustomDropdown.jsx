import { Dropdown } from "semantic-ui-react"; 


const countryOptions = [
  { key: "a", value: "Physics", text: "Physics" }, 
  { key: "b", value: "Chemistry", text: "Chemistry" },
  { key: "c", value: "Mathematics", text: "Mathematics" },
  { key: "d", value: "Computer", text: "Computer" },
  { key: "e", value: "Hindi", text: "Hindi" },
  { key: "f", value: "Zoology", text: "Zoology" },
  { key: "g", value: "Botany", text: "Botany" },
  { key: "h", value: "Geography", text: "Geography" },
];
const CustomDropdown = ({ placeholder, name,  setValue }) => {

  const Change = (e, { name, value }) => {
    setValue(name, value); 
  };
  return (
    <>

    
      <label>Department:</label>
      <Dropdown
        name={name}
        fluid
        selection
        options={countryOptions}
        placeholder={placeholder}
        onChange={Change}
        
      />
    </>
  );
};
export default CustomDropdown;