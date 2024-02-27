import {useContext, useState} from "react"
import {GlobalContext} from "../GlobalContext"

function Form() {
  const {ads, setAds} = useContext(GlobalContext)

  // Define the state for the radio buttons and the text area
  const [selectedOption, setSelectedOption] = useState('');
  const [textArea, setTextArea] = useState('');

  // Handle changes to the radio buttons and the text area
  const handleChange = (event) => {
    const {name, type, value} = event.target;
    type === 'radio' ? setSelectedOption(value) : setTextArea(value);
  }

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', selectedOption, textArea);
  }

  return (
    <>
      <h1>Hej detta är formuläret</h1>
      <form onSubmit={handleSubmit}>
        <h3>Relationsstatus:</h3>
        <label>
          Gift
          <input type="radio" name="options" value="option1" checked={selectedOption === 'option1'}
                 onChange={handleChange}/>
        </label>
        <label>
          Sambo
          <input type="radio" name="options" value="option2" checked={selectedOption === 'option2'}
                 onChange={handleChange}/>
        </label>
        <label>
          Särbo
          <input type="radio" name="options" value="option3" checked={selectedOption === 'option3'}
                 onChange={handleChange}/>
        </label>
        <label>
          Ensamstående
          <input type="radio" name="options" value="option3" checked={selectedOption === 'option3'}
                 onChange={handleChange}/>
        </label>

        <h3>Om dig:</h3>
        <textarea value={textArea} onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form
