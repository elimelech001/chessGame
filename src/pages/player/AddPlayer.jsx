// import React from "react"
// import { useRef } from "react";
// import { getDatabase, ref, child, push, set, update } from "firebase/database";
// import { getAuth } from "firebase/auth";
// import Cookies from "js-cookie";
// import { app } from "../../fireBaseConfig";
// import board from "../insertCharachters";
// import { useNavigate } from "react-router-dom";
// const AddPlayer = (props) => {
//     const [newLink, setNewLink] = useState("")
//     const [link, updateLink] = useState("")

//     const createLink = () => {
//         if (!auth.currentUser) {
//             // navigate('/signInWithGoogle')
//         }
//         const newPostKey = push(child(ref(db), 'games')).key;
//         set(ref(db, 'Games/' + newPostKey), {
//             "players": {
//                 [auth.currentUser.uid]: {
//                     points: 0,
//                     color: "white",
//                     moves: 0,
//                     name: auth.currentUser.displayName
//                 }
//             },
//             board: board
//         });
//         setNewLink(newPostKey)
//     }

//     const sendLink = () => {
//         getLink(link)
//         navigate(`/playBoard/${link}`)
//     }
//   return (
//      <div>
//             <br />
//             <div>{newLink}</div>
//             <button onClick={createLink}>request new game</button>
//             <br /><br /><br /><br /><br />
//             <label ><h5>input link to start game</h5></label> <br />
//             <form action="">
//                 <input type="text" onChange={e => updateLink(e.target.value)} required /> <br />
//                 <button type="send" onClick={sendLink}>send link</button>

//             </form>
//         </div>
//   ) 
// };

// export default AddPlayer;
