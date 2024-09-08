// src/pages/RecuperacaoSenha.js
import React, { useState } from 'react';

const RecuperacaoSenha = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar e-mail de recuperação de senha
    setMessage('Um e-mail de recuperação foi enviado, se o e-mail estiver registrado.');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Recuperação de Senha</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Enviar E-mail de Recuperação
          </button>
          {message && <p className="mt-4 text-blue-500">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default RecuperacaoSenha;
