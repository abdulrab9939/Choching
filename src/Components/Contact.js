import React,{useState} from 'react'
import {addDoc,collection} from 'firebase/firestore'
import { Link } from 'react-router-dom';
import { auth,db } from "./../firebase";
const Contact = () => {
  const[name,setName] = useState();
  const [email,setEmail]= useState();
  const[message,setMessage] = useState();

  const userCollectionRef = collection(db,"contactdata")
 
  const handleSubmission = () =>{
    addDoc(userCollectionRef,{
    name:name,
    email:email,
    message:message
  })
    };
  return (
    <>
    <div class="container text-center">
  <div class="row">
    <div class="col justify  border">
   <h1>Contact Us</h1>
   <p  className='text-justify'>Lorem ipsum is a dummy text without any sense. It is a sequence of Lat
    in words that, as they are positioned, do not form sentences with a complete s
    ense, but give life to a test text useful to fill spaces that will subsequently 
    be occupied from ad hoc
     texts composed by communication professionals.</p>
    </div>
  
    <div class="col">
    <form>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Enter FullName</label>
    <input type="text" class="form-control" id="exampleInputName" 
    onChange={(event)=>{
      setName(event.target.value)
    }}
    />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
     onChange={(event)=>{
      setEmail(event.target.value)
    }}
   
    />
  </div>
  
  
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  
  onChange={(event)=>{
    setMessage(event.target.value)
  }}
           
          ></textarea>
</div>


</form>
<button onClick={handleSubmission} >
            Signup
          </button>
    </div>
  </div>
  </div>

  <nav aria-label="Page navigation example">
  <ul class="pagination">
  <li class="page-item"><a class="page-link" href="#">Previus</a></li>

  <li className="nav-item">
          <Link className="page-item" to="/feedback"><a class="page-link" to="contact2">1</a> </Link>
        </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
    </>
   
  )
}

export default Contact
