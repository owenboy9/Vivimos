import React, { useState, useContext } from 'react'
import { GlobalContext } from "../GlobalContext"
import { useNavigate } from "react-router-dom"





function Section1({ form, handleChange }) {


  return (
      <>
      <h1>Skapa ett erbjudande om livsbyte (1)</h1>
      <h2>Först lite om dig själv</h2>
      <h3>Vilket kön är du?: </h3>
      <label>
        Man
        <input
          type="radio"
          name="kön"
          value="Man"
          checked={form.kön === "Man"}
          onChange={handleChange}
        />
      </label>

      <label>
        Kvinna
        <input
          type="radio"
          name="kön"
          value="Kvinna"
          checked={form.kön === "Kvinna"}
          onChange={handleChange}
        />
      </label>

      <label>
        Annat
        <input
          type="radio"
          name="kön"
          value="Annat"
          checked={form.kön === "Annat"}
          onChange={handleChange}
        />
      </label>

      <h3>Hur gammal är du:</h3>
      <input
        type="number"
        name="ålder"
        value={form.ålder}
        onChange={handleChange}
        min="18"
        max="120"
      />
      </>
    )
  }


function Section2({form, handleChange}) {
  return (
    <>
      <h1>Skapa ett erbjudande om livsbyte (2)</h1>
      <h2>Nu lite om ditt boende och din yttre livsmiljö</h2>
      <h3>Vilket län bor du i?</h3>
      <select name="län" value={form.län} onChange={handleChange}>
        <option value="">Välj...</option>
        <option value="Blekinge">Blekinge</option>
        <option value="Dalarna">Dalarna</option>
        <option value="Gotland">Gotland</option>
        <option value="Gävleborg">Gävleborg</option>
        <option value="Halland">Halland</option>
        <option value="Jämtland">Jämtland</option>
        <option value="Jönköping">Jönköping</option>
        <option value="Kalmar">Kalmar</option>
        <option value="Kronoberg">Kronoberg</option>
        <option value="Norrbotten">Norrbotten</option>
        <option value="Skåne">Skåne</option>
        <option value="Stockholm">Stockholm</option>
        <option value="Södermanland">Södermanland</option>
        <option value="Uppsala">Uppsala</option>
        <option value="Värmland">Värmland</option>
        <option value="Västerbotten">Västerbotten</option>
        <option value="Västernorrland">Västernorrland</option>
        <option value="Västmanland">Västmanland</option>
        <option value="Västra Götaland">Västra Götaland</option>
        <option value="Örebro">Örebro</option>
        <option value="Östergötland">Östergötland</option>
      </select>


      <h3>Primär typ av boende under livsbytesperioden:</h3>
      <label>
        Lägenhet
        <input type="radio" name="boende" value="Lägenhet" checked={form.boende === "Lägenhet"}
               onChange={handleChange}/>
      </label>
      <label>
        Villa
        <input type="radio" name="boende" value="Villa" checked={form.boende === "Villa"} onChange={handleChange}/>
      </label>
      <label>
        Gård
        <input type="radio" name="boende" value="Gård" checked={form.boende === "Gård"} onChange={handleChange}/>
      </label>
      <label>
        Sommarstuga
        <input type="radio" name="boende" value="Sommarstuga" checked={form.boende === "Sommarstuga"}
               onChange={handleChange}/>
      </label>
      <label>
        Husvagn
        <input type="radio" name="boende" value="Husvagn" checked={form.boende === "Husvagn"} onChange={handleChange}/>
      </label>
      <label>
        Trappuppgång
        <input type="radio" name="boende" value="Trappuppgång" checked={form.boende === "Trappuppgång"}
               onChange={handleChange}/>
      </label>
      <label>
        Annat, vilket?
        <input type="radio" name="boende" value="Annat" checked={form.boende === "Annat"} onChange={handleChange}/>
        {form.boende === "Annat" && (
          <input type="text" name="boendeAnnat" value={form.boendeAnnat} onChange={handleChange}
                 placeholder="Ange boende"/>
        )}
      </label>
      <h3>Bor du i:</h3>
      <select name="stad" value={form.stad} onChange={handleChange}>
        <option value="">Välj...</option>
        <option value="Storstad">Storstad (100 000+)</option>
        <option value="Mellanstor stad">Mellanstor stad (20 000 - 100 000)</option>
        <option value="Småstad">Småstad (3 000 - 20 000)</option>
        <option value="By">By (3 000-)</option>
        <option value="Bystan">Bystan (befriat från grannar)</option>
      </select>

      {form.stad === "Storstad" || form.stad === "Mellanstor stad" ? (
        <select name="stadAlternativ" value={form.stadAlternativ} onChange={handleChange}>
          <option value="">Välj...</option>
          <option value="Centralt">Centralt</option>
          <option value="Villaförort">Villaförort</option>
          <option value="Betongförort">Betongförort</option>
        </select>
      ) : null}

      <h3>Ditt boende är:</h3>
      <label>
        Naturnära (skog)
        <input type="checkbox" name="boendeSkog" checked={form.boendeSkog} onChange={handleChange}/>
      </label>
      <label>
        Naturnära (hav/sjö)
        <input type="checkbox" name="boendeHav" checked={form.boendeHav} onChange={handleChange}/>
      </label>
      <label>
        Kulturnära (biografer, teater, muséer, gallerier)
        <input type="checkbox" name="boendeKultur" checked={form.boendeKultur} onChange={handleChange}/>
      </label>
      <label>
        Shoppingnära
        <input type="checkbox" name="boendeShopping" checked={form.boendeShopping} onChange={handleChange}/>
      </label>
      <h3>Har du bil?</h3>
      <label>
        Ja
        <input
          type="radio"
          name="bil"
          value="true"
          checked={form.bil === true}
          onChange={handleChange}
        />
      </label>
      <label>
        Nej
        <input
          type="radio"
          name="bil"
          value="false"
          checked={form.bil === false}
          onChange={handleChange}
        />
      </label>

      {form.bil && (
        <>
          <p>Märke/modell/år:</p>
          <input type="text"
                 name="bilinfo"
                 value={form.bilinfo}
                 onChange={handleChange}/>
        </>
      )}
    </>
  );
}

function Section3({form, handleChange}) {
  return (
    <>
      <h1>Skapa ett erbjudande om livsbyte (3)</h1>
      <h2>Nu lite om vad du fyller ditt liv med</h2>
      <h3>Vilken sysselsättning har du?:</h3>
      <input type="text"
             name="sysselsättning"
             value={form.sysselsättning}
             onChange={handleChange}/>

      <h3>Vad gör du på fritiden? Skriv upp till fem fritidsintressen:</h3>
      <input type="text"
             name="fritidsintressen"
             value={form.fritidsintressen}
             onChange={handleChange}/>


    </>
  );
}

function Section4({form, handleChange}) {
  return (
    <>
      <h1>Skapa ett erbjudande om livsbyte (4)</h1>
      <h2>Nu lite om familj och relationer</h2>
      <h3>Relationsstatus</h3>
      <p>Vilket av följande passar bäst in på dig?</p>
      <label>
        Nöjd ensamvarg
        <input
          type="radio"
          name="relstatus"
          value="ensamvarg"
          checked={form.relstatus === "ensamvarg"}
          onChange={handleChange}
        />
      </label>
      <label>
        Singel på jakt
        <input
          type="radio"
          name="relstatus"
          value="singel"
          checked={form.relstatus === "singel"}
          onChange={handleChange}
        />
      </label>
      <label>
        I en öppen relation (särboende)
        <input
          type="radio"
          name="relstatus"
          value="öppen särbo"
          checked={form.relstatus === "öppen särbo"}
          onChange={handleChange}
        />
      </label>
      <label>
        I en exklusiv relation (särboende)
        <input
          type="radio"
          name="relstatus"
          value="exklusiv särbo"
          checked={form.relstatus === "exklusiv särbo"}
          onChange={handleChange}
        />
      </label>
      <label>
        I en öppen relation (samboende)
        <input
          type="radio"
          name="relstatus"
          value="öppen sambo"
          checked={form.relstatus === "öppen sambo"}
          onChange={handleChange}
        />
      </label>
      <label>
        I en exklusiv relation (samboende)
        <input
          type="radio"
          name="relstatus"
          value="exklusiv sambo"
          checked={form.relstatus === "exklusiv sambo"}
          onChange={handleChange}
        />
      </label>
      <label>
        I en polyrelation
        <input
          type="radio"
          name="relstatus"
          value="poly"
          checked={form.relstatus === "poly"}
          onChange={handleChange}
        />
      </label>
      <label>
        Det är lite knasigt
        <input
          type="radio"
          name="relstatus"
          value="knasigt"
          checked={form.relstatus === "knasigt"}
          onChange={handleChange}
        />
      </label>
      {form.relstatus !== "singel" && form.relstatus !== "" && form.relstatus !== "ensamvarg" && (
        <>
          <p>Namn och ålder på din/a partner/s?:</p>
          <input type="text"
                 name="partnerinfo"
                 value={form.partnerinfo}
                 onChange={handleChange}/>
        </>
      )}
      <h3>Har du barn?</h3>
      <label>
        Ja
        <input
          type="radio"
          name="barn"
          value="true"
          checked={form.barn === true}
          onChange={handleChange}
        />
      </label>
      <label>
        Nej
        <input
          type="radio"
          name="barn"
          value="false"
          checked={form.barn === false}
          onChange={handleChange}
        />
      </label>
      {form.barn === true && (
        <>
          <h3>Hur många?</h3>
          <input
            type="number"
            name="barnAntal"
            value={form.barnAntal}
            onChange={handleChange}
            min="1"
          />

          <h3>Bor de hos dig?</h3>
          <label>
            Ja
            <input
              type="radio"
              name="barnBoende"
              value="Ja"
              checked={form.barnBoende === "Ja"}
              onChange={handleChange}
            />
          </label>
          <label>
            Delvis
            <input
              type="radio"
              name="barnBoende"
              value="Delvis"
              checked={form.barnBoende === "Delvis"}
              onChange={handleChange}
            />
          </label>
          <label>
            Nej
            <input
              type="radio"
              name="barnBoende"
              value="Nej"
              checked={form.barnBoende === "Nej"}
              onChange={handleChange}
            />
          </label>
        </>
      )}


      <h3>Har du husdjur?</h3>
      <label>
        Ja
        <input
          type="radio"
          name="husdjurHar"
          value="true"
          checked={form.husdjurHar}
          onChange={handleChange}
        />
      </label>
      <label>
        Nej
        <input
          type="radio"
          name="husdjurHar"
          value="false"
          checked={!form.husdjurHar}
          onChange={handleChange}
        />
      </label>

      {form.husdjurHar && (
        <>
        <p>Vilket/vilka djur är det?</p>

          <label>
            Hund
            <input
              type="checkbox"
              name="husdjurHund"
              checked={form.husdjurHund}
              onChange={handleChange}
            />
          </label>
          <label>
            Katt
            <input
              type="checkbox"
              name="husdjurKatt"
              checked={form.husdjurKatt}
              onChange={handleChange}
            />
          </label>
          <label>
            Fågel
            <input
              type="checkbox"
              name="husdjurFågel"
              checked={form.husdjurFågel}
              onChange={handleChange}
            />
          </label>
          <label>
            Häst
            <input
              type="checkbox"
              name="husdjurHäst"
              checked={form.husdjurHäst}
              onChange={handleChange}
            />
          </label>
          <label>
            Annat:
            <input
              type="text"
              name="husdjurAnnat"
              value={form.husdjurAnnat}
              onChange={handleChange}
            />
          </label>
        </>
      )}    </>
  )
}

function Section5({form, handleChange}) {
  return (
    <>
      <h1>Skapa ett erbjudande om livsbyte (5)</h1>
      <h2>Nu till det svåraste, att presentera ditt livserbjudande. </h2>
      <h3>Skriv en kort, lockande presentation av dig själv och ditt liv:</h3>
      <textarea name="presentation"
                value={form.presentation}
                onChange={handleChange}
                placeholder="Skriv en presentation av livet du erbjuder!"/>

      <h3>Och slutligen, skriv en lockande rubrik till din annons:</h3>
      <input type="text"
             name="rubrik"
             value={form.rubrik}
             onChange={handleChange}/>

      &nbsp;
    </>
  );
}
function CreateOffer() {
  const navigate = useNavigate()

  const totalSections = 5;
  const defaultOffer = {

    rubrik: "",
    län: "",
    boende: "",
    boendeAnnat: "",
    sysselsättning: "",
    relstatus: "",
    partnerinfo: "",
    barnAntal: "",
    barnBoende: "",
    husdjurHar: false,
    husdjurHund: false,
    husdjurKatt: false,
    husdjurFågel: false,
    husdjurHäst: false,
    husdjurAnnat: "",
    stad: "",
    stadAlternativ: "",
    boendeSkog: false,
    boendeHav: false,
    boendeKultur: false,
    boendeShopping: false,
    bil: false,
    bilinfo: "",
    barn: false,
    fritidsintressen: "",
    presentation: "",
    ålder: "",
    kön: "",
  };


  const [form, setForm] = useState(defaultOffer);

  const handleChange = (event) => {
    const {name, value, type, checked} = event.target;

    if (type === 'checkbox') {
      setForm(prevForm => ({
        ...prevForm,
        [name]: checked,
      }));
    } else if (type === 'radio') {
      if (value === 'true' || value === 'false') {
        setForm(prevForm => ({
          ...prevForm,
          [name]: value === 'true',
        }));
      } else {
        setForm(prevForm => ({
          ...prevForm,
          [name]: value,
        }));
      }
    } else if (name === "ålder") {
      const numValue = parseInt(value, 10);
      if (isNaN(numValue) || numValue < 18 || numValue > 120) {
        alert("Ålder måste vara mellan 18 och 120");
      } else {
        setForm(prevForm => ({
          ...prevForm,
          ålder: value,
        }));
      }
    } else if (name === "barnAntal") {
      setForm(prevForm => ({
        ...prevForm,
        [name]: value,
      }));

    } else if (name === "boendeAnnat" || name === "bilinfo" || name === "partnerinfo" || name === "fritidsintressen" || name === "presentation" || name === "rubrik") {
      setForm(prevForm => ({
        ...prevForm,
        [name]: value,
      }));
    } else if (name === "kön" || name === "relstatus" || name === "län" || name === "boende" || name === "stad" || name === "stadAlternativ") {
      setForm(prevForm => ({
        ...prevForm,
        [name]: value,
      }));
    } else {
      setForm(prevForm => ({
        ...prevForm,
        [name]: value,
      }));
    }
  }



  const [currentSection, setCurrentSection] = useState(1);

  const prevSection = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };
  const nextSection = () => {
    setCurrentSection(currentSection + 1);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form data:', form);

    // Om Formdata ska användas lägg in:
    // const data = new FormData(event.target);

    // Och konvertera till objekt.
    // const info = Object.fromEntries(data);

  const response = await fetch('/api/ads', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
    // body: JSON.stringify(info), ifall formdata

  });

  if (response.ok) {
      console.log('Data saved successfully');
      alert(`Tack! Ditt liv i ${form.boende} i ${form.län}s län ligger nu ute för budgivning`)
      navigate('/')
    } else {
      console.error('Error saving data');
    }
  };

return (
  <form onSubmit={handleSubmit}>
    {currentSection === 1 && <Section1 form={form} handleChange={handleChange}/>}
    {currentSection === 2 && <Section2 form={form} handleChange={handleChange}/>}
    {currentSection === 3 && <Section3 form={form} handleChange={handleChange}/>}
    {currentSection === 4 && <Section4 form={form} handleChange={handleChange}/>}
    {currentSection === 5 && <Section5 form={form} handleChange={handleChange}/>}

    <br/>
    <br/>

    {currentSection > 1 && (
      <button type="button" onClick={prevSection}>Previous</button>
    )}

    {currentSection < totalSections && (
      <button type="button" onClick={nextSection}>Continue</button>
    )}

    {currentSection === totalSections && (
      <>
        <br/>
        <button type="submit">Submit</button>
      </>
    )}
  </form>
);
}

export default CreateOffer;