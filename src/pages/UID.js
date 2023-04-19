import React, { Children } from "react";
import { getAuth } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
function checkAuthStatus() {
    return new Promise((resolve, reject) => {
        try {
            getAuth().onAuthStateChanged((user) => resolve(user));
        } catch (err) {
            reject(err);
        }
    });
}

function CheckUser() {
    const [loading, setLoading] = useState(true);
    const [uid, setUID] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        checkAuthStatus()
            .then((e) => setUID(e))
            .then(() => {
                setLoading(false);
            });
    });
    const nav = () => {
        navigate("/signInWithGoogle");
    };
    if (uid) {
        return uid.uid;
    } else if (!uid && !loading) {
        return "no user";
    } else return "not loaded";
}

export default CheckUser;
