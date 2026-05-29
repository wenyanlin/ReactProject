import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@org/auth';

export function LoginPage() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue((e.target as HTMLInputElement).value);
    if (error) setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(inputValue);
    if (success) {
      navigate(from, { replace: true });
    } else {
      setError('帳號不正確！');
      setInputValue('');
    }
  };

  return (
    <div className="p-4 bg-white min-h-[50vh] select-none flex flex-col justify-center items-center">
      <div className="w-full max-w-xs">
        <div className="flex items-center justify-center mb-6 pb-3 border-b border-slate-100">
          <h2 className="text-base font-bold text-slate-800 tracking-wider">
            會員登入
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="請輸入帳號"
              className="w-full px-3 py-2 text-sm bg-white border border-slate-100 focus:outline-none focus:border-slate-300 font-bold text-slate-700"
              autoFocus
            />
            {error && (
              <p className="text-xs text-rose-500 font-bold mt-1.5">{error}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 border border-slate-200 text-slate-600 text-xs font-bold tracking-widest hover:border-slate-300 hover:text-slate-900 transition-colors duration-200 cursor-pointer select-none"
          >
            確定登入
          </button>
        </form>
      </div>
    </div>
  );
}
