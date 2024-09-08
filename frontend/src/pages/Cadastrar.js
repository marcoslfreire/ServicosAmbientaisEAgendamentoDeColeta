// src/pages/Cadastrar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword } from '../utils/validation';
import './Cadastrar.css'; // Certifique-se de importar o arquivo CSS

const Cadastrar = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    telefone: '',
    endereco: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!validateEmail(formData.email)) validationErrors.email = 'E-mail inválido';
    if (!validatePassword(formData.senha)) validationErrors.senha = 'Senha fraca';
    if (formData.senha !== formData.confirmarSenha) validationErrors.confirmarSenha = 'As senhas não coincidem';

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Submeter o formulário
      // Aqui você pode adicionar a lógica para enviar os dados para o backend
      navigate('/login');
    }
  };

  return (
    <div className="background-image">
      <div className="form-container">
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="nome">Nome Completo</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.senha ? 'border-red-500' : 'border-gray-300'} rounded`}
              required
            />
            {errors.senha && <p className="text-red-500 text-sm">{errors.senha}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              value={formData.confirmarSenha}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.confirmarSenha ? 'border-red-500' : 'border-gray-300'} rounded`}
              required
            />
            {errors.confirmarSenha && <p className="text-red-500 text-sm">{errors.confirmarSenha}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="telefone">Telefone (opcional)</label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="endereco">Endereço (opcional)</label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cadastrar;
