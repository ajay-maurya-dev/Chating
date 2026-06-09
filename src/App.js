
import './App.css';

function App() {
  return (
    <div className='flex'>
      <div className='h-[100vh] w-1/4 bg-black grid grid-cols-1 grid-rows-12'>
        <aside className=''>
          <div className='text-white h-24 flex items-center relative'>
            <div className='bg-white rounded-full h-fit p-4'>
              <img src='/user.png' alt='' width={50} />
            </div>
            <div className=''>
              <h3 className='top-1 left-10 relative'>Ajay Maurya</h3>
              <p className='top-0 left-10 relative'>@ajaymaurya</p>
              <p className='top-0 left-10 relative'>ajaymaurya23125@gmail.com</p>
            </div>
          </div>
          <div className='bg-green-500 h-11'></div>
          <div className='bg-violet-600 h-11'></div>
          <div className='bg-pink-600 h-11'></div>
          <div className='bg-indigo-500 h-11'></div>
          <div className='bg-red-500 h-11'></div>
        </aside>
      </div>
      <div className='w-3/4 flex flex-wrap justify-center items-center columns-5'>
        <div className='bg-green-800 w-[100vw] h-16 self-start flex justify-start items-center'>
            <div className='rounded-full bg-white w-fit p-10'>
              <img src='/user.png' alt='' width={50} />
            </div>
            <h3 className='text-center text-3xl font-Robot font-extrabold text-white self-center left-2 relative'>Karan Sharma</h3>
            <div></div>
        </div>
        <div className='text-9xl font-sans flex-wrap font-extrabold self-center'>Chat</div>
      </div>
    </div>
  );
}

export default App;
