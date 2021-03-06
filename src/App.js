import React, { useState, useEffect } from "react";

import "./App.css";

import Input from "./Components/Input";
import InputRadio from "./Components/InputRadio";
import Select from "./Components/Select";
import SelectTypeOfReturn from "./Components/SelectTypeOfReturn";
import TextArea from "./Components/TextArea";
import Agreement from "./Components/Agreement";
import FormFooter from "./Components/FormFooter";

const App = () => {
  const [state, setState] = useState({
    employee: "",
    pos: "",
    typeOfReturn: "",
    buyDate: "",
    howFinish: "",
    isProtocol: "",
    docNumber: "",
    name: "",
    email: "",
    phone: "",
    getBack: "",
    street: "",
    zipCode: "",
    city: "",
    producer: "",
    typeProduct: "",
    quantity: 1,
    serialNumber: "",
    requiresDisassembly: "",
    deviceSamePlace: "",
    street2: "",
    zipCode2: "",
    city2: "",
    description: "",
    agreement: false,
  });

  const [badValidate, setBadValidate] = useState({
    typeOfReturn: false,
    buyDate: false,
    howFinish: false,
    isProtocol: false,
    docNumber: false,
    name: false,
    email: false,
    phone: false,
    getBack: false,
    street: false,
    zipCode: false,
    city: false,
    producer: false,
    typeProduct: false,
    quantity: false,
    serialNumber: false,
    requiresDisassembly: false,
    deviceSamePlace: false,
    street2: false,
    zipCode2: false,
    city2: false,
    description: false,
    pos: false,
    employee: false,
    agreement: false,
  });

  const [todayDate, setTodayDate] = useState(false);

  const [showForm, setShowForm] = useState(true);

  const [showSpinner, setShowSpinner] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);

  const [showError, setShowError] = useState(false);

  const [taskNumber, setTaskNumber] = useState("");

  useEffect(() => {
    setTodayDate(new Date().toISOString().split("T")[0], []);
  }, []);

  const validateForm = (e) => {
    const validate = {
      typeOfReturn: false,
      buyDate: false,
      howFinish: false,
      isProtocol: false,
      docNumber: false,
      name: false,
      email: false,
      phone: false,
      getBack: false,
      street: false,
      zipCode: false,
      city: false,
      producer: false,
      typeProduct: false,
      quantity: false,
      serialNumber: false,
      requiresDisassembly: false,
      deviceSamePlace: false,
      street2: false,
      zipCode2: false,
      city2: false,
      description: false,
      pos: false,
      employee: false,
      agreement: false,
    };

    if (state.typeOfReturn === "") validate.typeOfReturn = true;

    if (
      state.typeOfReturn === "Gwarancja producenta" ||
      state.typeOfReturn === "R??kojmia"
    ) {
      if (state.buyDate === "") validate.buyDate = true;
    }

    if (state.typeOfReturn === "R??kojmia") {
      if (state.howFinish === "") validate.howFinish = true;
    }

    if (state.typeOfReturn === "Dosta??em towar uszkodzony") {
      if (state.isProtocol === "") validate.isProtocol = true;
    }

    if (state.docNumber === "") validate.docNumber = true;

    if (state.name === "") validate.name = true;

    if (state.email === "") validate.email = true;

    const regExEmail =
      /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
    if (!regExEmail.test(state.email)) validate.email = true;

    if (state.phone === "") validate.phone = true;

    const regExPhoneNumber = /^[0-9\+]{8,13}$/;
    if (!regExPhoneNumber.test(state.phone)) validate.phone = true;

    if (state.getBack === "") validate.getBack = true;

    const regExZipCode =/^\d\d-\d\d\d$/;

    if (state.getBack === "kurierem na adres") {
      if (state.street === "") validate.street = true;


    if (!regExZipCode.test(state.zipCode)) validate.zipCode = true;

      if (state.city === "") validate.city = true;
    }

    if (state.producer === "") validate.producer = true;

    if (state.typeProduct === "") validate.typeProduct = true;

    if (state.quantity === "") validate.quantity = true;

    if (state.serialNumber === "") validate.serialNumber = true;

    if (state.requiresDisassembly === "") validate.requiresDisassembly = true;

    if (state.description === "") validate.description = true;

    if (state.pos === "") validate.pos = true;

    if (state.employee === "") validate.employee = true;

    if (state.requiresDisassembly === "Tak") {
      if (state.deviceSamePlace === "") validate.deviceSamePlace = true;
    }

    if (
      state.requiresDisassembly === "Tak" &&
      state.deviceSamePlace === "Nie"
    ) {
      if (state.street2 === "") validate.street2 = true;
      if (!regExZipCode.test(state.zipCode2)) validate.zipCode2 = true;
      if (state.city2 === "") validate.city2 = true;
    }

    if (state.agreement === false) validate.agreement = true;

    setBadValidate({ ...badValidate, ...validate });
    if (
      !validate.buyDate &&
      !validate.typeOfReturn &&
      !validate.docNumber &&
      !validate.name &&
      !validate.email &&
      !validate.phone &&
      !validate.getBack &&
      !validate.producer &&
      !validate.typeProduct &&
      !validate.quantity &&
      !validate.serialNumber &&
      !validate.requiresDisassembly &&
      !validate.description &&
      !validate.pos &&
      !validate.employee &&
      !validate.agreement
    ) {
      console.log("jestem");
      if (
        state.typeOfReturn === "Gwarancja producenta" ||
        (state.typeOfReturn === "R??kojmia" && state.howFinish) ||
        state.typeOfReturn === "Dosta??em towar uszkodzony"
      ) {
        console.log("jestem2");
        if (state.getBack === "kurierem na adres") {
          console.log("jestem3");
          if (state.street && state.zipCode && state.city) {
            console.log("jestem4");
            if (state.requiresDisassembly === "Nie") {
              sendForm(state);
            } else {
              if (state.street2 && state.zipCode2 && state.city2) {
                sendForm(state);
              }
            }
          }
        } else {
          console.log("jestem3.1");
          if (state.requiresDisassembly === "Nie") {
            sendForm(state);
          } else {
            if (state.deviceSamePlace === "Nie") {
              if (state.street2 && state.zipCode2 && state.city2) {
                sendForm(state);
              }
            } else {
              sendForm(state);
            }
          }
        }
      }
    }
  };

  const producer = [
    "Warmtec",
    "Dimplex",
    "Thermoval",
    "Blaupunkt",
    "Sonniger",
    "Climative",
    "EBERLE",
    "EBECO",
    "EMKO",
    "ESCO",
    "Danfoss",
    "Devi",
    "DigiTime",
    "Nexans",
    "Rotenso",
    "VACO",
    "Inny",
  ];

  const howFinishApplication = [
    "Naprawa towaru",
    "Wymiana towaru na nowy",
    "Obni??enie ceny towaru",
    "Odst??pienie od umowy (istotna wada towaru)",
  ];

  const isTrue = ["Tak", "Nie"];

  const deviceSamePlace = ["Tak", "Nie"];

  const whereGetBack = [
    "w Salonie/ Punkcie sprzeda??y (w tym, w kt??rym sk??adane jest zg??oszenie)",
    "kurierem na adres",
  ];

  const pos = [
    "Salon sprzeda??y Warszawa",
    "Salon sprzeda??y Krak??w",
    "Salon sprzeda??y Rzesz??w",
    "Salon sprzeda??y Zamo????",
    "Punkt sprzeda??y Gda??sk",
    "Punkt sprzeda??y Pozna??",
  ];

  const handleCheckbox = (e) => {
    setState({ ...state, [e.target.name]: e.target.checked });
    setBadValidate({ ...badValidate, [e.target.name]: false });
  };

  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    setBadValidate({ ...badValidate, [e.target.name]: false });
  };

  const sendForm = (obj) => {
    setShowForm(false);
    setShowSpinner(true);

    const url = "https://newaccount1632792215290.freshdesk.com/api/v2/tickets";
    const body = {
      subject: "Reklamacja stacjonarna",
      description: `
      <h4>Reklamacja stacjonarna:</h4>
      <b>Rodzaj zg??oszenia:</b> ${obj.typeOfReturn} <br/>
      <b>Data zakupu:</b> ${obj.buyDate} <br/>
      ${
        obj.typeOfReturn === "R??kojmia"
          ? `<b>Oczekiwany spos??b zako??czenia zg??oszenia:</b> ${obj.howFinish} <br/>`
          : ""
      }
      ${
        obj.typeOfReturn === "Dosta??em towar uszkodzony"
          ? `<b>Czy zosta?? sporz??dzony protok???? szkody przez kuriera?:</b> ${obj.isProtocol} <br/>`
          : ""
      }
      <br/>
      <b>Numer zam??wienia lub numer faktury:</b> ${obj.docNumber} <br/>
      <b>Imi?? i nazwisko lub nazwa firmy:</b> ${obj.name} <br/>
      <b>Adres e-mail:</b> ${obj.email} <br/>
      <b>Telefon:</b> ${obj.phone} <br/>
      <br/>
      <b>Odbi??r towaru przez Klienta:</b> ${obj.getBack} <br/>
      ${
        obj.getBack === "kurierem na adres"
          ? `<b>Ulica:</b> ${obj.street} <br/>
        <b>Kod pocztowy:</b> ${obj.zipCode} <br/>
        <b>Miejscowo????:</b> ${obj.city} <br/>`
          : null
      }
      <br/>
      <b>Producent:</b> ${obj.producer} <br/>
      <b>Nazwa i model towaru:</b> ${obj.typeProduct} <br/>
      <b>Ilo???? sztuk:</b> ${obj.quantity} <br/>
      <b>Numer fabryczny/ seryjny:</b> ${obj.serialNumber} <br/>
      <b>Czy produkt wymaga demonta??u:</b> ${obj.requiresDisassembly} <br/>
      <b>Opis wady:</b> ${obj.description} <br/>
      <b>Salon, kt??ry przyj???? reklamacj??:</b> ${obj.pos} <br/>
      <b>Pracownik przyjmuj??cy zg??oszenie:</b> ${obj.employee} <br/>
      `,
      email: obj.email,
      phone: obj.phone,
      priority: 1,
      status: 2,
    };
    console.log("body", body);
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: "VHE3djNOUEFwUWFSNXhscG80Zg==",
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then(function (data) {
        if (data.id) {
          setShowSpinner(false);
          setShowSuccess(true);
          setTaskNumber(data.id);
        } else {
          setShowSpinner(false);
          setShowError(true);
        }
      })
      .catch(function (error) {
        setShowSpinner(false);
        setShowError(true);
        console.log(error);
      });
  };

  return (
    <div className="return">
      {showForm ? (
        <div id="return-form" className="return-form">
          <h2 className="return-form__title">
            Formularz reklamacji (salony stacjonarne)
          </h2>

          <Input
            value={state.employee}
            name={"employee"}
            labelName="Osoba przyjmuj??ca reklamacj??"
            handleInput={handleInput}
            validation={badValidate.employee}
            errorMsg={"Podaj dane osoby przyjmuj??cej reklamacj??"}
          />

          <Select
            value={state.pos}
            name={"pos"}
            labelName="Salon, kt??ry przyj???? reklamacj??"
            optionsValue={pos}
            handleInput={handleInput}
            validation={badValidate.pos}
            errorMsg={"Podaj salon, kt??ry przyj???? reklamacj??"}
          />

          <Input
            value={state.buyDate}
            name={"buyDate"}
            labelName="Data zakupu"
            handleInput={handleInput}
            type={"date"}
            validation={badValidate.buyDate}
            maxDate={todayDate}
            errorMsg={"Podaj dat?? zakupu"}
          />

          <SelectTypeOfReturn
            value={state.typeOfReturn}
            name={"typeOfReturn"}
            labelName="Rodzaj zg??oszenia"
            handleInput={handleInput}
            validation={badValidate.typeOfReturn}
            errorMsg={"Podaj rodzaj zg??oszenia"}
            buyDate={state.buyDate}
          />
          {state.typeOfReturn === "R??kojmia" ? (
            <Select
              value={state.howFinish}
              name={"howFinish"}
              labelName="Oczekiwany spos??b zako??czenia zg??oszenia"
              optionsValue={howFinishApplication}
              handleInput={handleInput}
              validation={badValidate.howFinish}
              errorMsg={"Podaj spos??b zako??czenia zg??oszenia"}
            />
          ) : null}

          {state.typeOfReturn === "Dosta??em towar uszkodzony" ? (
            <div>
              <Select
                value={state.isProtocol}
                name={"isProtocol"}
                labelName="Czy zosta?? sporz??dzony protok???? szkody przez kuriera?"
                optionsValue={isTrue}
                handleInput={handleInput}
                validation={badValidate.isProtocol}
                errorMsg={"Czy zosta?? sporz??dzony protok????"}
              />
            </div>
          ) : null}

          <Input
            value={state.docNumber}
            name={"docNumber"}
            labelName="Numer zam??wienia lub numer faktury"
            handleInput={handleInput}
            type={"text"}
            validation={badValidate.docNumber}
            errorMsg={"Podaj numer zam??wienia lub numer faktury"}
          />

          <Input
            value={state.name}
            name={"name"}
            labelName="Imi?? i nazwisko lub nazwa firmy"
            handleInput={handleInput}
            type={"text"}
            validation={badValidate.name}
            errorMsg={"Podaj imi?? i nazwisko lub nazwa firmy"}
          />

          <Input
            value={state.email}
            name={"email"}
            labelName="Adres e-mail"
            handleInput={handleInput}
            type={"text"}
            validation={badValidate.email}
            errorMsg={"Podaj adres e-mail"}
          />

          <Input
            value={state.phone}
            name={"phone"}
            labelName="Telefon"
            handleInput={handleInput}
            type={"number"}
            validation={badValidate.phone}
            errorMsg={"Podaj telefon konkatowy"}
          />

          <Select
            value={state.getBack}
            name={"getBack"}
            labelName="Odbi??r towaru przez Klienta po naprawie"
            optionsValue={whereGetBack}
            handleInput={handleInput}
            validation={badValidate.getBack}
            errorMsg={"Podaj spos??b odbioru towaru"}
          />

          {state.getBack === "kurierem na adres" ? (
            <div>
              <Input
                value={state.street}
                name={"street"}
                labelName="Ulica i numer domu"
                handleInput={handleInput}
                type={"text"}
                validation={badValidate.street}
                errorMsg={"Podaj ulic?? i numer domu"}
              />

              <Input
                value={state.zipCode}
                name={"zipCode"}
                labelName="Kod pocztowy"
                handleInput={handleInput}
                type={"text"}
                validation={badValidate.zipCode}
                errorMsg={"Podaj kod pocztowy"}
              />

              <Input
                value={state.city}
                name={"city"}
                labelName="Miejscowo????"
                handleInput={handleInput}
                type={"text"}
                validation={badValidate.city}
                errorMsg={"Podaj miejscowo????"}
              />
            </div>
          ) : null}

          <Select
            producer
            value={state.producer}
            name={"producer"}
            labelName="Producent"
            optionsValue={producer}
            handleInput={handleInput}
            validation={badValidate.producer}
            errorMsg={"Podaj nazw?? producenta"}
          />

          <Input
            value={state.typeProduct}
            name={"typeProduct"}
            labelName="Nazwa i model towaru"
            handleInput={handleInput}
            type={"text"}
            validation={badValidate.typeProduct}
            errorMsg={"Podaj nazw?? i model towaru"}
          />

          <Input
            value={state.quantity}
            name={"quantity"}
            labelName="Ilo???? sztuk"
            handleInput={handleInput}
            type={"number"}
            minValue={1}
            validation={badValidate.quantity}
            errorMsg={"Podaj ilo????"}
          />

          <Input
            value={state.serialNumber}
            name={"serialNumber"}
            labelName="Numer fabryczny/ seryjny"
            handleInput={handleInput}
            type={"text"}
            validation={badValidate.serialNumber}
            errorMsg={"Podaj numer fabryczny / seryjny"}
          />

          <Select
            value={state.requiresDisassembly}
            name={"requiresDisassembly"}
            labelName="Czy produkt wymaga demonta??u"
            optionsValue={isTrue}
            handleInput={handleInput}
            validation={badValidate.requiresDisassembly}
            errorMsg={"Czy produkt wymaga demonta??u"}
          />

          {state.requiresDisassembly === "Tak" ? (
            <InputRadio
              value={state.deviceSamePlace}
              name={"deviceSamePlace"}
              labelName={`Adres urz??dzenia taki sam jak powy??ej?`}
              handleInput={handleInput}
              validation={badValidate.deviceSamePlace}
              options={deviceSamePlace}
              errorMsg={`Podaj adres urz??dzenia`}
            />
          ) : null}
          {state.requiresDisassembly === "Tak" &&
          state.deviceSamePlace === "Nie" ? (
            <div>
              <div className="return-form__subtitle">Dane urz??dzenia:</div>
              <Input
                value={state.street2}
                name={"street2"}
                labelName="Ulica i numer domu"
                handleInput={handleInput}
                type={"text"}
                validation={badValidate.street2}
                errorMsg={"Podaj ulic?? i numer domu"}
              />

              <Input
                value={state.zipCode2}
                name={"zipCode2"}
                labelName="Kod pocztowy"
                handleInput={handleInput}
                type={"text"}
                validation={badValidate.zipCode2}
                errorMsg={"Podaj kod pocztowy"}
              />

              <Input
                value={state.city2}
                name={"city2"}
                labelName="Miejscowo????"
                handleInput={handleInput}
                type={"text"}
                validation={badValidate.city2}
                errorMsg={"Podaj miejscowo????"}
              />
            </div>
          ) : null}
          <TextArea
            value={state.description}
            name={"description"}
            labelName="Opis wady"
            handleInput={handleInput}
            validation={badValidate.description}
            errorMsg={"Podaj opis wady"}
          />

          <Agreement
            value={state.agreement}
            name={"agreement"}
            handleCheckbox={handleCheckbox}
            validation={badValidate.agreement}
          />

          <div className="return-form__btn-wrapper">
            <button
              className="return-form__btn"
              onClick={(e) => {
                validateForm(e);
              }}
            >
              Wy??lij formularz
            </button>
          </div>
          <FormFooter />
        </div>
      ) : null}
      {showSpinner ? (
        <div id="return-spinner" className="return-spinner">
          <div className="return-spinner__container">
            <div className="return-spinner__wrapper">
              <div className="return-spinner-circle1 return-spinner-circle"></div>
              <div className="return-spinner-circle2 return-spinner-circle"></div>
              <div className="return-spinner-circle3 return-spinner-circle"></div>
              <div className="return-spinner-circle4 return-spinner-circle"></div>
              <div className="return-spinner-circle5 return-spinner-circle"></div>
              <div className="return-spinner-circle6 return-spinner-circle"></div>
              <div className="return-spinner-circle7 return-spinner-circle"></div>
              <div className="return-spinner-circle8 return-spinner-circle"></div>
              <div className="return-spinner-circle9 return-spinner-circle"></div>
              <div className="return-spinner-circle10 return-spinner-circle"></div>
              <div className="return-spinner-circle11 return-spinner-circle"></div>
              <div className="return-spinner-circle12 return-spinner-circle"></div>
            </div>
          </div>
        </div>
      ) : null}
      {showSuccess ? (
        <div id="return-message" className="return-message">
          <div className="return-message__container">
            <h2 className="return-message__success">
              Formularz zosta?? wys??any poprawnie
            </h2>
            <h3 className="return-message__id">
              Numer Twojego zg??oszenia: <strong>{taskNumber}</strong>
            </h3>
          </div>
        </div>
      ) : null}
      {showError ? (
        <div id="return-error" className="return-message return-error">
          <div className="return-message__container">
            <h2 className="return-message__error">
              Podczas wysy??ania formularza wyst??pi?? b????d. Spr??buj p????niej.
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default App;
