import React, { useState } from "react";
import IDeveloper from "../../interfaces/IDeveloper";
import {
  TextField,
  IDropdownOption,
  Dropdown,
  DatePicker,
  IDatePickerStrings,
  DefaultButton,
} from "@fluentui/react";

const optionsGenre: IDropdownOption[] = [
  { key: "M", text: "M" },
  { key: "F", text: "F" },
  { key: "OUTROS", text: "OUTROS" },
];

const DayPickerStrings: IDatePickerStrings = {
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],

  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],

  shortDays: ["S", "M", "T", "W", "T", "F", "S"],

  goToToday: "Go to today",
  prevMonthAriaLabel: "Go to previous month",
  nextMonthAriaLabel: "Go to next month",
  prevYearAriaLabel: "Go to previous year",
  nextYearAriaLabel: "Go to next year",

  isRequiredErrorMessage: "Start date is required.",
  invalidInputErrorMessage: "Invalid date format.",
};

const Register: React.FC<IDeveloper> = (props: IDeveloper) => {

  const [name, setName] = useState("");
  const [idade, setIdade] = useState("");
  const [hobby, setHobby] = useState("");
  const [sexo, setSexo] = useState();
  const [nascimento, setNascimento] = useState(null);
  const [developers, setDevelopers] = useState<IDeveloper[]>();

  const onChangeName = React.useCallback(
    (
      event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
      newValue?: string
    ) => {
      setName(newValue || "");
    },
    []
  );

  const onChangeIdade = React.useCallback(
    (
      event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
      newValue?: string
    ) => {
      setIdade(newValue || "");
      console.log(newValue)
    },
    []
  );

  const onChangeHobby = React.useCallback(
    (
      event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
      newValue?: string
    ) => {
      setHobby(newValue || "");
    },
    []
  );

  const onTypeChange = (event: React.FormEvent<HTMLDivElement>,item: any): void => {
    setSexo(item.text);
    console.log(item.text);
  };
















  const formatDate = (date: any): string =>{
    return  ( date.getDate() + '/' +date.getMonth() + 1)  + '/' + (date.getFullYear() );
  }

  return (
    <>
      <TextField
        label="Nome"
        required
        value={name}
        onChange={onChangeName}
      />
      <TextField
        label="Idade"
        type="number"
        required
        value={idade}
        onChange={onChangeIdade}
       />
      <Dropdown
        label="Sexo"
        options={optionsGenre}
        required
        onChange={onTypeChange}
      />
      <TextField
        label="Hobby"
        value={hobby}
        onChange={onChangeHobby}
      />
      <DatePicker
        strings={DayPickerStrings}
        isRequired
        label="Data de nascimento"
        formatDate={formatDate}

      />
      <DefaultButton
        text="Salvar"
        onClick={() => alert("hello!")}
       />
    </>
  );
};

export default Register;
