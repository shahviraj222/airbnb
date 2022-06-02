import React from 'react'
import './abcform.css'
import {db} from "./firebase";
import {collection, getDocs,addDoc,updateDoc,doc} from 'firebase/firestore'
import { async } from '@firebase/util';
import { useState } from 'react';
import { FreeBreakfastRounded } from '@material-ui/icons';
export default function Form() {
  const[newName,setNewName]=useState("");
  const[newLName,setLName]=useState("");
  const[newHomeid,setNewHomeid]=useState("");
  const[newNumber,setNewNumber]=useState("");
  const [users, setUsers] = useState([]);
  const usersCollection= collection(db,"userdata");
  // adding user data
  const createUser= async()=>{
      if(newName=="" || newHomeid=="" || newNumber=="")
      {
        alert("Please Fill All Data");
      }
      else{
      alert("Your Data is Stored Successfully");
      await addDoc(usersCollection,{fname:newName,lname:newLName,homeid:newHomeid,number:newNumber});
      }
    
    }

  return (
    <div>
   <div className='container'>
  <form action="">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" onChange={(event)=>setNewName(event.target.value)} placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" onChange={(event)=>setLName(event.target.value)} placeholder="Your last name.."/>

    <label for="no">Number</label>
    <input type="text" id="no" name="number" onChange={(event)=>setNewNumber(event.target.value)} placeholder="Contact number"/>

    <label for="hid" >Home Id</label>
    <textarea id="hid" name="homeid" placeholder="Enter Home Id" onChange={(event)=>setNewHomeid(event.target.value)} ></textarea>
    </form>
    <button onClick={createUser}>submit</button>
    
  </div>
</div>


  )

}
