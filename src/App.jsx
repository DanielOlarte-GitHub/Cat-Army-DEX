import { TaskList } from './components/TaskList'
import { TaskForm } from './components/TaskForm'

function App() {

  return <main className='bg-zinc-900 '>

  
  <nav className="bg-gray-800 p-8 text-5xl text-white font-bold text-center"> <h1 className=''>CAT-DEX </h1> </nav>
    <div className='container mx-auto p-10'>
      <TaskForm />
      <TaskList />
    </div>
  </main>
}

export default App