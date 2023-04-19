import { useState, useEffect } from "react";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import board from "../helpFunctions/insertCharachters";

const dbBoard = (user) => {
    const db = getDatabase();
    const starCountRef = ref(db, "users/" + "2CWCB9h9DDattnopHbtfWwvw23E3");
    onValue(starCountRef, (snapshot) => {
        const  dbBoard  = snapshot.val();
        return dbBoard&&dbBoard.board;
    });
};
const setDBboard =() => {
    try {
        const db = getDatabase();
        const user = auth.currentUser.uid;
        const auth = getAuth();
        set(ref(db, "users/" + "mNIXAycvXWQG1nZE347LS2Z55Az1"), {
            board: board,
        });
        console.log("added");
    } catch (error) {
        console.log(error.message);
    }
};
export { dbBoard, setDBboard };
