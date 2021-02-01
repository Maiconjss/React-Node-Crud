import React, { useEffect, useState } from "react";
import IDeveloper from "../../interfaces/IDeveloper";
import Axios from "axios";
import "./Register.css";

const Register: React.FC = () => {
  const [name, setName] = useState<string>();
  const [idade, setIdade] = useState<string>();
  const [hobby, setHobby] = useState<string>();
  const [sexo, setSexo] = useState();
  const [nascimento, setNascimento] = useState<string>();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<IDeveloper[]>([]);
  const [developers, setDevelopers] = useState<IDeveloper[]>([]);

  const changeSexo = (sexoId: any) => {
    setSexo(sexoId);
  };
  const devNameChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    Axios.get<IDeveloper[]>("http://localhost:3000/developers")
      .then((response) => {
        setDevelopers(response.data as IDeveloper[]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [developers]);

  useEffect(() => {
    const results = developers.filter(
      (dev) => dev.name.toLowerCase().includes(searchTerm),
      developers.reverse()
    );
    setSearchResults(results);
  }, [developers, searchTerm]);

  const addDeveloper = () => {
    Axios.post("http://localhost:3000/developers", {
      name: name,
      sexo: sexo,
      idade: idade,
      hobby: hobby,
      nascimento: nascimento,
    })
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteDeveloper = (devId: number) => {
    Axios.delete<IDeveloper[]>("http://localhost:3000/developers/" + devId)
      .then((response) => {
        console.log("deletado");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateDeveloper = (devId: number) => {
    Axios.put<IDeveloper[]>("http://localhost:3000/developers/" + devId, {
      name: name,
      sexo: sexo,
      idade: idade,
      hobby: hobby,
      nascimento: nascimento,
    })
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <div className="formContainer">
          <h1>REGISTRE UM DESENVOLVEDOR</h1>
          <label className="label">Nome <span className="required">*</span> </label>
          <input
            id=""
            name=""
            type="text"
            placeholder="nome"
            onChange={(event) => setName(event.target.value)}
          />
          <label className="label">Idade <span className="required">*</span> </label>
          <input
            name=""
            id=""
            type="number"
            placeholder="idade"
            onChange={(event) => setIdade(event.target.value)}
          />
         <label className="label">Data de Nascimento <span className="required">*</span> </label>
          <input
            id="date"
            type="date"
            onChange={(event) => setNascimento(event.target.value)}
          />
          <label className="label">Sexo <span className="required">*</span> </label>
          <select
            id="sexo"
            onChange={(event) => changeSexo(event.target.value)}
            value={sexo}
          >
            <option value="0">Selecione o sexo</option>
            <option value="M">M</option>
            <option value="F">F</option>
            <option value="OUTROS">OUTROS</option>
          </select>
          <label className="label">Hobby <span className="required">*</span> </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="hobby"
            onChange={(event) => setHobby(event.target.value)}
          />

          <button className="btnSave" onClick={addDeveloper}> Salvar </button>
        </div>

        <div className="devListContainer">
          <h1>DESENVOLVEDORES REGISTRADOS</h1>
          <label className="label">Buscar Desenvolvedor pelo  nome <span className="required">*</span> </label>
          <input
            type="text"
            placeholder="pesquisar"
            onChange={devNameChange}
            value={searchTerm}
          />
          {searchResults.map((dev) => {
            return (
              <div className="devInfo" key={dev.id}>
                <input
                  id=""
                  name=""
                  type="text"
                  placeholder="nome"
                  defaultValue={dev.name}
                  onChange={(event) => setName(event.target.value)}
                />
                <input
                  id="idade"
                  name=""
                  type="number"
                  placeholder="idade"
                  defaultValue={dev.idade}
                  onChange={(event) => setIdade(event.target.value)}
                />
                <input
                  id="date"
                  type="date"
                  defaultValue={dev.nascimento}
                  onChange={(event) => setNascimento(event.target.value)}
                />

                <select
                  id="sexo"
                  onChange={(event) => changeSexo(event.target.value)}
                  defaultValue={dev.sexo}
                >
                  <option value="0">Selecione o sexo</option>
                  <option value="M">M</option>
                  <option value="F">F</option>
                  <option value="OUTROS">OUTROS</option>
                </select>

                <input
                  id="hobby"
                  name=""
                  type="text"
                  defaultValue={dev.hobby}
                  onChange={(event) => setHobby(event.target.value)}
                />

                <button className="btnDelete" onClick={() => deleteDeveloper(dev.id)}>
                  APAGAR
                </button>
                <button  className="btnUpdate" onClick={() => updateDeveloper(dev.id)}>
                  ATUALIZAR
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Register;
