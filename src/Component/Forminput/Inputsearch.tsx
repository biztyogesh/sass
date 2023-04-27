import "./inputsearch.css";
import { useState } from "react";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";

let options = [
  { key: "a", value: "Physics", text: "Physics" },
  { key: "b", value: "Chemistry", text: "Chemistry" },
  { key: "c", value: "Mathematics", text: "Mathematics" },
  { key: "d", value: "Computer", text: "Computer" },
  { key: "e", value: "Hindi", text: "Hindi" },
  { key: "f", value: "Zoology", text: "Zoology" },
  { key: "g", value: "Botany", text: "Botany" },
  { key: "h", value: "Geography", text: "Geography" },
  { key: "c", value: "History", text: "History" },
  { key: "d", value: "Science", text: "Science" },
  { key: "e", value: "Sanskrit", text: "Sanskrit" },
  { key: "f", value: "Math", text: "Math" },
  { key: "g", value: "political ", text: "political" },
  { key: "h", value: "Punjabi", text: "Punjabi" },
  
];

function Inputsearch() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(
    localStorage.getItem("selectedOption") || ""
  );
  const [selectedOption1, setSelectedOption1] = useState(
    localStorage.getItem("selectedOption1") || ""
  );
  const [selectedOption2, setSelectedOption2] = useState(
    localStorage.getItem("selectedOption2") || ""
  );
  function useQuery() {
    return new URLSearchParams(
      useLocation().search);
  }

  let query = useQuery();

  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  const handleChange = (e: any, { value }: any) => {
    setSelectedOption(value);
    localStorage.setItem("selectedOption", value);
    return e.target.value;
    // console.log(e.target.value, value);
  };

  const handleChange1 = (e: any, { value }: any) => {
   
    setSelectedOption1(value);
    localStorage.setItem("selectedOption1", value);
    return e.target.value;
     // console.log(e.target.value, value);
  };

  const handleChange2 = (e: any, { value }: any) => {
    setSelectedOption2(value);
    localStorage.setItem("selectedOption2", value);
    return e.target.value;
    // console.log(e.target.value, value);
  };

  const handleClick = () => {
    query.set("param1", selectedOption);
    query.set("param2", selectedOption1);
    query.set("param3", selectedOption2);
    setSearchParams(query.toString());
  };

   const handleReset = () => {
    query.set("param1", "");
    query.set("param2", "");
    query.set("param3", "");
    setSearchParams(query.toString());
    navigate({search:""});
   };

  return (
    <div className="searchparam">
      <form>
        <Dropdown
          selection
          options={options}
          value={selectedOption}
          onChange={handleChange}
        />
        <Dropdown
          selection
          options={options}
          value={selectedOption1}
          onChange={handleChange1}
        />
        <Dropdown
          selection
          options={options}
          value={selectedOption2}
          onChange={handleChange2}
          placeholder="select"
        />
      </form>
      <>
        <div className="button">
          <button onClick={handleClick}>Search</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </>
    </div>
  );
}
export default Inputsearch;
