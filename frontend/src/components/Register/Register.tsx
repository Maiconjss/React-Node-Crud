import React, { Props, useState } from "react";
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
  { key: 1, text: "M" },
  { key: 2, text: "F" },
  { key: 3, text: "OUTROs" },
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
  const [sexo, setSexo] = useState("");
  const [hobby, setHobby] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [developers, setDevelopers] = useState<IDeveloper[]>();
























  
  const formatDate = (date: any): string =>{
    return  ( date.getDate() + '/' +date.getMonth() + 1)  + '/' + (date.getFullYear() );
  }

  return (
    <>
      <TextField 
        label="Nome" 
        required

      />
      <TextField 
        label="Idade"
        type="number"
        required

       />
      <Dropdown
        label="Sexo"
        options={optionsGenre}
        required
      />
      <TextField 
        label="Hobby" 
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
