import React, { useState } from "react";
import IDeveloper from "../../interfaces/IDeveloper";
import {
  TextField,
  IDropdownOption,
  Dropdown,
  DatePicker,
  IDatePickerStrings,
  DefaultButton,
} from "office-ui-fabric-react";

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

  isRequiredErrorMessage: "Data de nascimento obrigatória *",
  invalidInputErrorMessage: "Invalid date format.",
};

const Register: React.FC<IDeveloper> = (props: IDeveloper) => {

  const [name, setName] = useState("");
  const [idade, setIdade] = useState("");
  const [hobby, setHobby] = useState("");
  const [sexo, setSexo] = useState();
  const [nascimento, setNascimento] = useState<any>();
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

  const onChangeSexo = (event: React.FormEvent<HTMLDivElement>,item: any): void => {
    setSexo(item.text);
  };

  const onFormatDate = (date?: Date): string => {
    return !date ? '' : date.getDate() + '/' + (date.getMonth() + 1) + '/' + (date.getFullYear() % 100);
  };



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
        onChange={onChangeSexo}
      />

      <DatePicker
        strings={DayPickerStrings}
        value={nascimento}
        isRequired
        label="Data de nascimento"
        formatDate={onFormatDate}
        onSelectDate={ date => setNascimento(date) }
      />

      <TextField
        label="Hobby"
        value={hobby}
        onChange={onChangeHobby}
      />

      <DefaultButton
        text="Salvar"
        onClick={()=> console.log(nascimento)}
       />
    </>
  );
};

export default Register;
