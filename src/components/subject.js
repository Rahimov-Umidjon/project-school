import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {Mycontext} from "../App";

function Subject(props) {
    const navigate = useNavigate();
    let value = useContext(Mycontext)


    return (
        <div id={'home-container'}>
            <div className="navbars">
                <div className="navbar-logo"><h3>dashboard</h3></div>
                <div className="navbar-search ">
                    <input className={'form-control'} type="text"/>
                    <button className={'btn btn-danger'} type={"button"}>Find</button>
                </div>
            </div>

            <div className="home-body">
                <div className="home-body-left">
                    <div onClick={() => {
                        navigate('/')
                        localStorage.setItem('ActiveComponent', "1")
                    }}
                         className={localStorage.getItem('ActiveComponent') === '1' ? "left-item-active" : "left-item"}>Dashboard
                    </div>
                    <div onClick={() => {
                        navigate('/teacher')
                        localStorage.setItem('ActiveComponent', "2")
                    }}
                         className={localStorage.getItem('ActiveComponent') === '2' ? "left-item-active" : "left-item"}>Teacher
                    </div>
                    <div onClick={() => {
                        navigate('/group')
                        localStorage.setItem('ActiveComponent', "3")
                    }}
                         className={localStorage.getItem('ActiveComponent') === '3' ? "left-item-active" : "left-item"}>Group
                    </div>
                    <div onClick={() => {
                        navigate('/subject')
                        localStorage.setItem('ActiveComponent', "4")
                    }}
                         className={localStorage.getItem('ActiveComponent') === '4' ? "left-item-active" : "left-item"}>Subject
                    </div>
                    <div onClick={() => {
                        navigate('/students')
                        localStorage.setItem('ActiveComponent', "5")
                    }}
                         className={localStorage.getItem('ActiveComponent') === '5' ? "left-item-active" : "left-item"}>Student
                    </div>
                </div>
                <div className="home-body-right-subject">
                    <div className="subject-header">

                    </div>
                    <div className="subject-body">
                        <table>
                            <tr>
                                <th>New subject</th>
                                <th>Price</th>
                                <th><button type={"button"} className={'btn btn-danger'}> create</button></th>
                            </tr>
                            <tr>
                                <td>SubjectName</td>
                                <td>Price</td>
                                <td><button type={"button"} className={'btn btn-dark'}>Edit</button></td>
                            </tr>
                            <tr>
                                <td>SubjectName</td>
                                <td>Price</td>
                                <td><button type={"button"} className={'btn btn-dark'}>Edit</button></td>
                            </tr>
                            <tr>
                                <td>SubjectName</td>
                                <td>Price</td>
                                <td><button  type={"button"} className={'btn btn-dark'}>Edit</button></td>
                            </tr>
                            <tr>
                                <td>SubjectName</td>
                                <td>Price</td>
                                <td><button type={"button"} className={'btn btn-dark'}>Edit</button></td>
                            </tr>
                        </table>
                    </div>
                    <div className="subject-footer">
                        <div className="total"></div>
                        <div className="next-previous"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Subject;