import Head from 'next/head';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Home() {
  const [message, setMessage] = useState('Bem-vindo ao Sonar!');

  // Exemplo: buscar dados do Supabase
  useEffect(() => {
    const fetchData = async () => {
      // const { data, error } = await supabase.from('sua_tabela').select('*');
      // console.log(data, error);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Head>
        <title>Sonar</title>
        <meta name="description" content="Plataforma Sonar" />
      </Head>

      <h1>{message}</h1>
      <button onClick={() => setMessage('Olá, usuário Sonar!')}>
        Clique aqui
      </button>
    </div>
  );
}
