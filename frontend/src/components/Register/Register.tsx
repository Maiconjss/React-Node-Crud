import React, { useEffect, useState } from 'react';
import IDeveloper from '../../interfaces/IDeveloper';
import Axios from 'axios';
import './Register.css';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [idade, setIdade] = useState('');
  const [hobby, setHobby] = useState('');
  const [sexo, setSexo] = useState();
  const [nascimento, setNascimento] = useState<any>();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<IDeveloper[]>([]);
  const [developers, setDevelopers] = useState<IDeveloper[]>([]);

  const changeSexo = (sexoId: any) => {
    setSexo(sexoId);
  };
  const devNameChange = (event:any) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    Axios.get<IDeveloper[]>('http://localhost:3000/developers')
      .then((response) => {
        setDevelopers(response.data as IDeveloper[]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [developers]);

  useEffect(() => {
    const results = developers.filter(dev =>
      dev.name.toLowerCase().includes(searchTerm),
      developers.reverse()

    );
    setSearchResults(results);
  }, [developers, searchTerm]);

  const addDeveloper = () => {
    Axios.post('http://localhost:3000/developers', {
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

  const deleteDeveloper = (devId: number)=>{

    Axios.delete<IDeveloper[]>('http://localhost:3000/developers/' + devId)
    .then((response) => {
      console.log("deletado")
      window.location.reload()
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const updateDeveloper = (devId: number)=>{

    Axios.put<IDeveloper[]>('http://localhost:3000/developers/' + devId,{
      name: name,
      sexo: sexo,
      idade: idade,
      hobby: hobby,
      nascimento: nascimento
    })
    .then((response) => {
      console.log("deletado")
      window.location.reload()
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <input
        id=""
        name=""
        type="text"
        placeholder="nome"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        name=""
        id=""
        type="number"
        placeholder="idade"
        onChange={(event) => setIdade(event.target.value)}
      />
      <input
        id="date"
        type="date"
        onChange={(event) => setNascimento(event.target.value)}
      />

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

      <input
        type="text"
        name=""
        id=""
        onChange={(event) => setHobby(event.target.value)}
      />

      <button onClick={addDeveloper}> Salvar </button>

      <h1>Desenvolvedores cadastrados</h1>

      <input
        type="text"
        placeholder="Search"
        onChange={devNameChange}
        value={searchTerm}
      />

      <div>
        {searchResults.map((dev) => {
          return (
            <div key={dev.id}>
              <input
                type="text"
                placeholder="nome"
                defaultValue={dev.name}
                onChange={(event) => setName(event.target.value)}
              />
              <input
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
                type="text"
                defaultValue={dev.hobby}
                onChange={(event) => setHobby(event.target.value)}
              />

              <button onClick={()=> deleteDeveloper(dev.id)}> Apagar </button>
              <button onClick={()=> updateDeveloper(dev.id)}> Atualizar </button>

            </div>
          );
        })}
      </div>
    </>
  );
};

export default Register;
