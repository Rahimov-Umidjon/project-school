import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {Mycontext} from "../App";

function Group(props) {

    const navigate = useNavigate()

    let value = useContext(Mycontext)


    function GroupIndex(index){
        value.setGroupIndex(index)
    }


    return (
        <div id={'home-container'}>
            <div className="navbars">
                <div className="navbar-logo"><h3>Group</h3></div>
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


                <div className="home-body-right-group">
                    <div className="row">
                        <div  onClick={()=>{
                            navigate('/create-group-page')
                        }} className="col-6 center-div">
                            <div className="add-group-logo center-div"><h1 >+</h1></div>
                        </div>


                        {
                            value.arryGroup.map(function (value, index){
                                return(
                                    <div className="col-6">
                                        <div  className="group-name-edit horizontal-div">
                                            <div className="group-name">{value.groupName}</div>
                                            <button onClick={()=> {
                                                GroupIndex(index)
                                                navigate('/edit-group-page')
                                            }} type={"button"} className={'btn btn-danger'}>Edit</button>
                                        </div>
                                        <table>
                                            <tr>
                                                <td>{value.subjectName}</td>
                                                <td>{value.teacherName}</td>
                                            </tr>
                                            <tr>
                                                <td>level : {value.levelStage}</td>
                                                <td>payment : {value.price}</td>
                                            </tr>
                                            <tr>
                                                <td>Date : {value.beginingDate}</td>
                                                <td>Student :  Quantity</td>
                                            </tr>
                                        </table>
                                    </div>
                                );
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Group;