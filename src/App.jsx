import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-green-300 flex flex-col items-center justify-center space-y-6">
      <h1 className="text-4xl font-average">ADOTE PET</h1>
      <button
        onClick={() => navigate('/main')}
        className="bg-gray-200 px-8 py-3 rounded-md font-semibold"
      >
        Entrar
      </button>
      <button
        onClick={() => alert('Função Criar Conta ainda não implementada')}
        className="bg-gray-200 px-8 py-3 rounded-md font-semibold"
      >
        Criar Conta
      </button>
    </div>
  );
}

function Main() {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-green-300 p-4 flex flex-col items-center space-y-4">
      <h2 className="text-xl font-semibold">Menu Principal</h2>
      <button
        onClick={() => navigate('/quero-adotar')}
        className="w-full max-w-xs bg-gray-200 py-4 rounded-md font-semibold"
      >
        Quero Adotar
      </button>
      <button
        onClick={() => alert('Quero Divulgar - tela em construção')}
        className="w-full max-w-xs bg-gray-200 py-4 rounded-md font-semibold"
      >
        Quero Divulgar
      </button>
      <button
        onClick={() => alert('Quero Apadrinhar - tela em construção')}
        className="w-full max-w-xs bg-gray-200 py-4 rounded-md font-semibold"
      >
        Quero Apadrinhar
      </button>
    </div>
  );
}

function QueroAdotar() {
  return (
    <div className="h-screen bg-green-300 p-4">
      <h2 className="text-xl font-semibold mb-4">Mapa - Quero Adotar</h2>
      <div className="w-full h-96 bg-gray-100 flex items-center justify-center border-2 border-gray-400 rounded-md">
        <p className="text-gray-500">[Mapa placeholder]</p>
      </div>
    </div>
  );
}

function QueroDivulgar() {
  return (
    <div className="h-screen bg-green-300 p-4 space-y-4">
      <h2 className="text-xl font-semibold">Quero Divulgar - Cadastro do animal</h2>
      <form className="max-w-md mx-auto bg-gray-100 p-4 rounded-md space-y-4">
        <input
          type="text"
          placeholder="Nome do animal"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Espécie"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Idade"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Sexo"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-gray-300 w-full py-2 rounded font-semibold"
          onClick={e => {
            e.preventDefault();
            alert('Cadastro enviado (simulado)');
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/quero-adotar" element={<QueroAdotar />} />
        <Route path="/quero-divulgar" element={<QueroDivulgar />} />
      </Routes>
    </Router>
  );
}
