// // Register.js
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { register } from "../slices/authSlices";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.auth);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(register({ name, email, password }));
//   };

//   return (
//     <div className="max-w-md mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Register</h2>
//       {error && <p className="text-red-500 mb-4">{error}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="name" className="block mb-1">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email" className="block mb-1">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password" className="block mb-1">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
//           disabled={loading}
//         >
//           {loading ? "Registering..." : "Register"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;
