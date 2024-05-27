import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {Mycontext} from "../../App";

function Students(props) {
    const navigate = useNavigate();
    let value = useContext(Mycontext)


    function StudentProfileIndex(index){
        value.setStudentProfileIndex(index)
    }





    return (
        <div id={'home-container'}>
            <div className="navbars">
                <div className="navbar-logo"><h3>Students</h3></div>
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
                <div className="home-body-right-student">
                <div id={"addStudent"} className="row">
                            <div onClick={() => {
                                navigate('/create-student-page')
                            }} className="col-4">
                                <div className="student-img"></div>
                                <img src="../images/add-friend.png" alt="add- friend"/>
                            </div>


                            {
                                value.arryStudent.map(function (value , index){
                                    return (
                                        <div onClick={()=> {
                                            navigate('/student-profile')
                                            StudentProfileIndex(index)
                                            // console.log(value.arryStudent)
                                        }} className="col-4"><div className="student-img"></div> <div><h5>{value.firstname} {value.middleName} {value.lastname}    </h5><h5>Phone: {value.phone}</h5> </div></div>
                                    );
                                })
                            }
                            
                        </div>
                </div>
            </div>
        </div>
    );
}


export default Students;

