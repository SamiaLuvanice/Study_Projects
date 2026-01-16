import { useEffect, useState, useRef } from "react";
import "./style.css";
import Trash from "../../assets/trash.svg";
import api from "../../services/api";

export default function Home() {
  const [users, setUsers] = useState([]);

  const inputName = useRef(null);
  const inputAge = useRef(null);
  const inputEmail = useRef(null);

  async function getUsers() {
    try {
      const { data } = await api.get("/usuarios");
      console.log("GET /usuarios:", data);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error.response?.data || error);
      setUsers([]);
    }
  }

  async function createUsers() {
    await api.post("/usuarios", {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });
    getUsers();
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`);
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" type="text" name="nome" ref={inputName} />
        <input placeholder="Idade" type="number" name="idade" ref={inputAge} />
        <input placeholder="Email" type="email" name="email" ref={inputEmail} />
        <button type="button" onClick={createUsers}>
          Cadastrar
        </button>
      </form>

      {Array.isArray(users) &&
        users.map((user) => (
          <div key={user.id} className="card">
            <div>
              <p>
                Nome: <span>{user.name}</span>
              </p>
              <p>
                Idade: <span>{user.age}</span>
              </p>
              <p>
                Email: <span>{user.email}</span>
              </p>
            </div>
            <button onClick={() => deleteUsers(user.id)}>
              <img src={Trash} />
            </button>
          </div>
        ))}
    </div>
  );
}
