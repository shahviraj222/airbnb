import React from 'react'
import {db} from "./firebase";
import {collection, getDocs,addDoc,updateDoc,doc} from 'firebase/firestore'
import { async } from '@firebase/util';
import './abcform.css'
import { useState } from 'react';
// function App() {
//     const[newName,setNewName]=useState("");
//     const[newPass,setNewPass]=useState("");
//     const [users, setUsers] = useState([]);
//     const usersCollection= collection(db,"users");
  
//     //adding entry in database 
//   const createUser= async()=>{
//     await addDoc(usersCollection,{username:newName,password:newPass})
//   }
//   const updateUser= async(id,pass,updatepass)=>{
//     const userDoc=doc(db,"users",id);
//    const newFields={password:updatepass};
//    await updateDoc(userDoc,newFields);
//   }
  
//     // use effect is function call when ever our page is displayed
//     useEffect(()=>{
//       // async function is used for killing database call after the work is over
//       const getUsers = async() =>{
//         const data =await getDocs(usersCollection);
//         console.log(data)
//         setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
//       }
//       getUsers()
//     },[])
  
  
//     return (
//       <div className="App">
//         <h2>Fire Base Tutorial </h2>
//       {/* taking input from user and storing it into database */}
//         <input placeholder='Username' onChange={(event)=>setNewName(event.target.value)} />
//         <input type="string" placeholder='password'  onChange={(event)=>setNewPass(event.target.value)} />
  
//         <button onClick={createUser}>CreateUser</button>
//         {/* reading data from data-base */}
//         {users.map((user)=>{
//           return <div>
//             <h1>UserName:{user.username}</h1>
//             <h1>Password:{user.password}</h1>
//             <button onClick={()=> {updateUser(user.id,user.pass,'VIRAJ')}}>modify</button>
//           </div>;
//         })}
        
//       </div>
//     );
//   }

export default function Newuser() {
    const[newName,setNewName]=useState("");
    const[newPass,setNewPass]=useState("");
    const [users, setUsers] = useState([]);
    const usersCollection= collection(db,"users");
    // adding user data
    const createUser= async()=>{
        if(newName=="" || newPass=="")
      {
        alert("Please Fill All Data");
      }
      else{
      alert("Your Data is Stored Successfully");
      await addDoc(usersCollection,{username:newName,password:newPass});
      }
      }

  return (
    <div>
        <div className='container'>
  <form action="">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="no" >UserName</label>
    <input type="text" onChange={(event)=>setNewName(event.target.value)} id="no" name="number" placeholder="Contact number"/>

    <label for="hid" >PassWord</label>
    <textarea id="hid" onChange={(event)=>setNewPass(event.target.value)} name="homeid" placeholder="Enter Home Id"></textarea>
    </form>
    <button type='submit' onClick={createUser} ><a href='/'>submit</a></button>
  </div>
    </div>
  )
}
