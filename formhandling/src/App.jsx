
import React, { useState } from 'react'

const App = () => {


           let [user , setUser]   =  useState({
                username : "",
                userpass : "",
                gender : ""
           })

           let [subjects , setSubjects] = useState([])

           let {username , userpass , gender } = user;


           let handleChange =(e)=>{

                let {value , name} = e.target ;

                setUser({...user,[name]:value})
           }


           let handleSujects =(e)=>{

              let {value} = e.target ;

              if(e.target.checked)
              {
                  setSubjects([...subjects,value])
              }
              else
              {
                   setSubjects((oldsubject)=>{
                        return  oldsubject.filter((subject)=> subject!=value)
                   })
              }
           }

           let handleSubmit =(e)=>{
                e.preventDefault();

                console.log({...user,subjects})

                setUser({
                username : "",
                userpass : "",
                gender : ""
                 })

                 setSubjects([])
           }

  return (
    <>

       <h1> form handling in react</h1>
           
           <form action="" onSubmit={handleSubmit}>

                <div className="formGroup">
                    <label htmlFor="">enter name</label>
                    <input type="text" placeholder='enter name' name='username' value={username} onChange={handleChange}/>
                </div>

                <div className="formGroup">

                    <label htmlFor="">enter password</label>
                    <input type="text" placeholder='enter password' name='userpass' value={userpass} onChange={handleChange} />
                </div>

                <div className="formGroup">
                    <label htmlFor="">select gender</label>
                    <input type="radio" name="gender" value="male"  checked={gender==="male"} onChange={handleChange}/>  <label htmlFor="">Male</label>
                    <input type="radio" name="gender" value="female" checked={gender==="female"}  onChange={handleChange}/>  <label htmlFor="">Female</label>
                    <input type="radio" name="gender" value="others" checked={gender==="others"}  onChange={handleChange}/>  <label htmlFor="">Others</label>

                </div>

                <div className="formGroup">

                    <label htmlFor="">select subjects</label>
                    <input type="checkbox" name="subjects" value="html"  onChange={handleSujects} checked={subjects.includes("html")} /> <label htmlFor="">HTML</label>
                    <input type="checkbox" name="subjects" value="css" onChange={handleSujects} checked={subjects.includes("css")}/> <label htmlFor="">CSS</label>
                    <input type="checkbox" name="subjects" value="js" onChange={handleSujects} checked={subjects.includes("js")}/> <label htmlFor="">JS</label>

                </div>

                <button>register</button>

           </form>

    </>
  )
}

export default App