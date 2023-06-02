import React, { useState } from "react";

import styles from '../App.module.css';
import { Route, Router, Routes ,useNavigate, Navigate } from "react-router-dom";

const ShowList = ({ shows, onSelectShow }) => {
    let navigate = useNavigate();
    const [redirect, setRedirect]= useState("");

    const buttonHandler = (id) => {
        console.log(id);
        let path=`/summary/${id}`;
        navigate(path);
        // setRedirect(path);
        // console.log(path);
        console.log(redirect);
    }

    if(redirect){
        <Navigate to = {redirect}/>
    }

    return (
        <div className={styles.showlist}>
            <h2> List </h2>
            <div className={styles.allbox}>
                {shows.map((show) => (
                    <div className={styles.show} key={show.id}>
                    <h3>{show.name}</h3>
                    <p>Language: {show.language}</p>
                    <p>Genre: {show.genres.join(', ')}</p>
                    {/* <button className={styles.button} onClick={() => } > */}
                    <button onClick={() => buttonHandler(show.id)}>
                    Show Summary
                    </button>
                </div>
                ))}
            </div>
        </div>
    );
};

export default ShowList;