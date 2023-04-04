// import '../../public/css/Register.css'
// import React, { useState } from "react";
// // import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// function Register(props) {
//     const [firstname, setFirstname] = useState('')
//     const [lastname, setLastname] = useState('')
//     const [phonenumber, setPhonenumber] = useState('')
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
//     console.log('run');
//     const navigate = useNavigate()
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         navigate('/login');
//     };
//     return (
//         <div class='register'>
//             <section>
//                 <div class="form-box">
//                     <div class="form-value">
//                         <form onSubmit={handleSubmit}>
//                             <h2>Sign up</h2>
//                             <div className="box-name">
//                                 <div class="inputbox">
//                                     <input type="text" onChange={(event) => setFirstname(event.target.value)} />
//                                     <label >First Name</label>
//                                 </div>
//                                 <div class="inputbox">
//                                     <input type="text" onChange={(event) => setLastname(event.target.value)} />
//                                     <label >Lastname</label>
//                                 </div>
//                             </div>
//                             <div class="inputbox">
//                                 <input type="text" onChange={(event) => setPhonenumber(event.target.value)} />
//                                 <label>Phonenumber</label>
//                             </div>
//                             <div class="inputbox">
//                                 <input type="text" onChange={(event) => setUsername(event.target.value)} />
//                                 <label>Username</label>
//                             </div>
//                             <div class="inputbox">
//                                 <input type="password" onChange={(event) => setPassword(event.target.value)} />
//                                 <label >Password</label>
//                             </div>
//                             <button className="sign-up">Sign up</button>
//                         </form>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }
// export default Register;