import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Mycontext} from "../App";
import Teacher from "./teacher";
import Group from "./group";
import Students from "./Students";
import Subject from "./subject";

function Home(props) {

    const navigate = useNavigate()

    let value = useContext(Mycontext)


    // function ChengeComponent(a) {
    //     // value.setNameCompanent(a)
    //     //
    //     // console.log(value.nameCompanent)
    //
    //     // console.log(as+1)
    // }
    //
    // ChengeComponent(value.nameCompanent)

    return (
        <div id={'home-container'}>
            <div className="navbars">
                <div className="navbar-logo"><h3>Dashboard</h3></div>
                <div className="navbar-search ">
                    <input className={'form-control'} type="text"/>
                    <button className={'btn btn-danger'} type={"button"}>Find</button>
                </div>
            </div>

            <div className="home-body">
                <div className="home-body-left">
                    <div onClick={() => {
                        navigate('/')
                        localStorage.setItem('ActiveComponent' , "1")
                    }} className={localStorage.getItem('ActiveComponent') === '1' ? "left-item-active" : "left-item"}>Dashboard
                    </div>
                    <div onClick={() => {
                        navigate('/teacher')
                        localStorage.setItem('ActiveComponent' , "2")
                    }} className={localStorage.getItem('ActiveComponent') === '2' ? "left-item-active" : "left-item"}>Teacher
                    </div>
                    <div onClick={() => {
                        navigate('/group')
                        localStorage.setItem('ActiveComponent' , "3")
                    }}className={localStorage.getItem('ActiveComponent') === '3' ? "left-item-active" : "left-item"}>Group
                    </div>
                    <div onClick={() => {
                        navigate('/subject')
                        localStorage.setItem('ActiveComponent' , "4")
                    }} className={localStorage.getItem('ActiveComponent') === '4' ? "left-item-active" : "left-item"}>Subject
                    </div>
                    <div onClick={() => {
                        navigate('/students')
                        localStorage.setItem('ActiveComponent' , "5")
                    }} className={localStorage.getItem('ActiveComponent') === '5' ? "left-item-active" : "left-item"}>Student
                    </div>
                </div>
                <div className="home-body-right">

                </div>
            </div>
        </div>
    );
}

export default Home;