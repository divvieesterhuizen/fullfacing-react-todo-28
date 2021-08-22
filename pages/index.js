import TodoList from '../components/TodoList';

import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Todo App</title>
        <meta name='description' content='Todo assesment' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container'>
        <TodoList />
      </div>
    </div>
  );
}
