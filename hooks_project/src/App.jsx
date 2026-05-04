import React from 'react'
import UserefExample from './components/UserefExample'
import UseReducerExample from './components/UseReducerExample'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import UserProvider from './context/UserContext'
import StudentForm from './components/StudentForm'

const App = () => {
  return (
    <div>


 <UserProvider>
 

      <BrowserRouter>

         <Navbar/>

          <Routes>
                <Route path='/' element={ <UserefExample/> }></Route>
                <Route path='/usereducer' element={ <UseReducerExample/> }></Route>
                <Route path='/stu' element={ <StudentForm/> }></Route>
          </Routes>

      </BrowserRouter>

   
</UserProvider>
      
    </div>
  )
}

export default App