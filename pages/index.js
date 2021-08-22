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
      <div className='bg-primary py-1'>
        <div className='container'>
          <h1 className='white'>Todo App</h1>
        </div>
      </div>
      <div className='container'>
        <TodoList />
      </div>
    </div>
  );
}
