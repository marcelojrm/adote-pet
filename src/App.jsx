
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

const TelaLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[360px] h-[800px] bg-[#99A892] relative">
      <h1 className="absolute left-[103px] top-[102px] text-[40px] font-normal font-['Average'] leading-[49px] text-center">ADOTE PET</h1>

      <div className="absolute w-[256px] h-[54px] left-[52px] top-[373px] bg-[#D9D9D9] rounded-[12px]" />
      <div className="absolute w-[256px] h-[54px] left-[52px] top-[473px] bg-[#D9D9D9] rounded-[12px]" />
      <div className="absolute w-[256px] h-[54px] left-[52px] top-[570px] bg-[#D9D9D9] rounded-[12px]" />

      <p className="absolute left-[158px] top-[392px] text-[12px] font-medium text-black text-center">Usuário</p>
      <p className="absolute left-[162px] top-[492px] text-[12px] font-medium text-black text-center">Senha</p>
      <p className="absolute left-[148px] top-[589px] text-[12px] font-medium text-black text-center">Criar conta</p>

      <button
        className="absolute left-[72px] top-[650px] bg-black text-white py-2 px-4 rounded"
        onClick={() => navigate('/home')}
      >
        Entrar
      </button>
    </div>
  );
};

const TelaHome = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[360px] h-[800px] bg-[#99A892] relative">
      <p className="absolute left-[299px] top-[8px] text-[10px] font-['Average'] text-black text-center">ADOTE PET</p>

      <button
        className="absolute w-[256px] h-[54px] left-[56px] top-[374px] bg-[#D9D9D9] rounded-[12px] text-black"
        onClick={() => navigate('/apadrinhar')}
      >
        Quero Apadrinhar
      </button>
      <button
        className="absolute w-[256px] h-[54px] left-[56px] top-[469px] bg-[#D9D9D9] rounded-[12px] text-black"
        onClick={() => navigate('/divulgar')}
      >
        Quero Divulgar
      </button>
      <button
        className="absolute w-[256px] h-[54px] left-[56px] top-[564px] bg-[#D9D9D9] rounded-[12px] text-black"
        onClick={() => navigate('/mapa')}
      >
        Quero Adotar
      </button>
    </div>
  );
};

const TelaApadrinhamento = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[360px] h-[800px] bg-[#99A892] relative">
      <button className="absolute left-[16px] top-[16px] text-sm underline" onClick={() => navigate(-1)}>← Voltar</button>
      <p className="absolute left-[20px] top-[90px] text-[13px] font-semibold text-black text-center">
        Para apadrinhar qualquer animal escolha uma opção:
      </p>
      <div className="absolute w-[256px] h-[54px] left-[51px] top-[154px] bg-[#D9D9D9] rounded-[12px] flex items-center justify-center">
        Básico - R$ 35,00
      </div>
      <div className="absolute w-[256px] h-[57px] left-[51px] top-[198px] bg-[#D9D9D9] rounded-[12px] p-2 text-[14px]">
        Médio – R$ 60,00 para ajudar na alimentação, vacinas e vermífugos.
      </div>
      <div className="absolute w-[256px] h-[57px] left-[51px] top-[259px] bg-[#D9D9D9] rounded-[12px] p-2 text-[14px]">
        Total – R$ 100,00 para todos os gastos como casinhas, brinquedos, veterinários etc.
      </div>
      <div className="absolute w-[256px] h-[57px] left-[51px] top-[354px] bg-[#D9D9D9] rounded-[12px] p-2 text-[14px]">
        Contribuir com quanto puder ou desejar.
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaLogin />} />
        <Route path="/home" element={<TelaHome />} />
        <Route path="/apadrinhar" element={<TelaApadrinhamento />} />
      </Routes>
    </Router>
  );
}
