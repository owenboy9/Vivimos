import { useState } from "react";


function CreateOffer2() {

  const defaultOffer = {
    rubrik: "",
    ort: "",
    bostad: "",
    sysselsättning: "",
    civilstatus: "",
    partnerinfo: "",
    harHusdjur: false,
    husdjur: "",
    bil: "",
    bilinfo: "",
    barn: "",
    fritidsintressen: "",
    övrigt: "",
    presentation: "",
  };

  const [form, setForm] = useState(defaultOffer);

  const handleTextChange = (event) => {
    const { name, value } = event.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  }

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    alert(`Tack! Ditt liv i ${form.ort} ligger nu ute för budgivning`)
  }


  return (
    <form onSubmit={handleSubmit}>
      <p>Skriv en lockande rubrik:</p>
      <input type="text"
        name="rubrik"
        value={form.rubrik}
        onChange={handleTextChange} />


      <p>Presentation:</p>
      <textarea name="presentation"
        value={form.presentation}
        onChange={handleTextChange}
        placeholder="Skriv en presentation av livet du erbjuder!" />
git
      <p>Vilken ort utspelar sig livet på:</p>
      <input type="text"
        name="ort"
        value={form.ort}
        onChange={handleTextChange} />

      <p>Vilken sysselsättning har du?:</p>
      <input type="text"
        name="sysselsättning"
        value={form.sysselsättning}
        onChange={handleTextChange} />


      <p>Civilstatus:</p>
      <select name="civilstatus"
        onChange={handleTextChange} value={form.civilstatus}>
        <option value="">Välj civilstatus</option>
        <option value="Singel">Singel</option>
        <option value="Kilar stadigt">Kilar stadigt</option>
        <option value="Dejtar casual">Dejtar casual</option>
        <option value="Särbo">Särbo</option>
        <option value="Sambo">Sambo</option>
        <option value="Gift">Gift</option>
      </select >

      {form.civilstatus !== "Singel" && form.civilstatus !== "" && (<>
        <p>Namn och ålder på din/a partner/s?:</p>
        <input type="text"
          name="partnerinfo"
          value={form.partnerinfo}
          onChange={handleTextChange} />

      </>)}

      <p>Har du husdjur?</p>
      <label>
        Ja
        <input
          type="checkbox"
          name="harHusdjur"
          checked={form.harHusdjur}
          onChange={handleCheckboxChange}
        />
      </label>
      <label>
        <input
          type="checkbox"
          name="harEjHusdjur"
          checked={!form.harHusdjur} //man kan inte trycka på nej utan bara byta genom att trycka på ja igen, fixa
          onChange={handleCheckboxChange}
        />
        Nej
      </label>

      {form.harHusdjur && (
        <>
          <p>Vad är det för djur?</p>
          <select name="husdjur"
            value={form.husdjur}
            onChange={handleTextChange} >
            <option value="">Välj husdjur</option>
            <option value="Hund">Hund</option>
            <option value="Katt">Katt</option>
            <option value="Papegoja">Papegoja</option>
            <option value="Komodovaran">Komodovaran</option>
            <option value="Loppcirkus">Loppcirkus</option>
          </select>
        </>
      )}

      <p>Har du bil?</p>
      <label>
        Ja
        <input
          type="checkbox"
          name="bil"
          checked={form.bil}
          onChange={handleCheckboxChange}
        />
      </label>
      <label>
        <input
          type="checkbox"
          name="bilNej"
          checked={!form.bil} //man kan inte trycka på nej utan bara byta genom att trycka på ja igen, fixa
          onChange={handleCheckboxChange}
        />
        Nej
      </label>

      {form.bil && (
        <>
          <p>Vad är bilen för modell och årgång?</p>
          <input name="bilinfo"
            value={form.bilinfo}
            onChange={handleTextChange} />

        </>
      )}


      &nbsp;

      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateOffer2