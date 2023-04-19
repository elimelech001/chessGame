import React, { useEffect, useState } from "react"
import { useRef } from "react";
import { getDatabase, ref, child, push, set, update, get } from "firebase/database";
import { getAuth } from "firebase/auth";
import Cookies from "js-cookie";
import { app } from "../../../config/fireBaseConfig";
import board from "../../helpFunctions/insertCharachters";
import { useNavigate } from "react-router-dom";
const db = getDatabase(app);
const auth = getAuth();
const dbRef = ref(getDatabase());

const PickGame = ({ getLink }) => {
    const navigate = useNavigate()
    const [newLink, setNewLink] = useState("")
    const [link, updateLink] = useState("")

    const createLink = () => {
        if (!auth.currentUser) {
            // navigate('/signInWithGoogle')
        }
        const newPostKey = push(child(ref(db), 'games')).key;
        set(ref(db, 'Games/' + newPostKey), {
            "players": {
                [auth.currentUser.uid]: {
                    points: 0,
                    color: "white",
                    moves: 0,
                    name: auth.currentUser.displayName
                }
            },
            board: board,
            turn: "white"
        });
        setNewLink(newPostKey)
    }

    const sendLink = () => {

        const updates = {};
        const newUser = {
            points: 0,
            color: "black",
            moves: 0,
            name: auth.currentUser.displayName
        }
        get(child(dbRef, `Games/${link}`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                const user = snapshot.val().players[auth.currentUser.uid]
               
                if(!user){
                    updates[`Games/${link}/players/${auth.currentUser.uid}`] = newUser
                    update(dbRef, updates);

                }

            }
        })
       
        navigate(`/PlayBoard/${link}`)
    }

    return (
        <div>
            <br />
            <div>{newLink}</div>
            <button onClick={createLink}>request new game</button>
            <br /><br /><br /><br /><br />
            <label ><h5>input link to start game</h5></label> <br />
            {/* <AddPlayer/> */}
            <input type="text" onChange={e => updateLink(e.target.value)} required /> <br />
            <button type="send" onClick={sendLink}>send link</button>


        </div>
    )
};

export default PickGame;
