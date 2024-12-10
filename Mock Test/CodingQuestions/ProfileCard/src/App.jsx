import ProfileCard from './component/ProfileCard'
import './App.css'

function App() {
  

  return (
   <div className=' w-[100%] min-h-[100vh] flex flex-col gap-[30px] justify-center items-center  bg-[black]'>
    <ProfileCard image="https://th.bing.com/th/id/OIP.LfBtLCx5jWjmzpI_LDs5TwHaL-?w=184&h=298&c=7&r=0&o=5&pid=1.7" name="Neha"/>
    <ProfileCard image="https://th.bing.com/th?id=OIP.CYt-sI4Rk88etVn0zt32PQHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" name="Satheesh Verma"/>
    <ProfileCard image="https://th.bing.com/th/id/OIP.LfBtLCx5jWjmzpI_LDs5TwHaL-?w=184&h=298&c=7&r=0&o=5&pid=1.7" name="Prashanthi"/>
    
   </div>
  )
}

export default App
