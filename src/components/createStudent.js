import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Mycontext} from "../App";


function CreateStudentpage(props) {
 
    const navigate = useNavigate();
    let value = useContext(Mycontext)

    const [studentFirstName, setStudentFirstName] = useState('');
    const [studentMiddleName, setStudentMiddleName] = useState('');
    const [studentLastName, setStudentLastName] = useState('');
    const [studentPhone, setStudentPhone] = useState('');
    const [studentParentName, setStudentParentName] = useState('');
    const [studentParentPhone, setStudentParentPhone] = useState('');
    const [studentGroupsName, setStudentGroupsName] = useState('');
    const [studentStatus, setStudentStatus] = useState('');
    const [studentBeginingDate, setStudentBeginingDate] = useState('');
    const [studentFinishingDate, setStudentFinishingDate] = useState('');
    

    function addArryStudent(e){

    let obj = {
        firstname: studentFirstName,
        middleName: studentMiddleName,
        lastname: studentLastName ,
        phone: studentPhone,
        parentName: studentParentName ,
        parentPhone: studentParentPhone ,
        status: studentStatus ,
        groupName:  studentGroupsName ,
        begData: studentBeginingDate ,
        finData: studentFinishingDate
    };

        value.arryStudent.push(obj)

        console.log(value.arryStudent)


        setStudentFirstName('')
        setStudentMiddleName('')
        setStudentLastName('')
        setStudentPhone('')
        setStudentParentName('')
        setStudentParentPhone('')
        setStudentGroupsName('')
        setStudentStatus('')
        setStudentFinishingDate('')
        setStudentBeginingDate('')



        navigate('/students')
        
    }

    return (
        <div id="create-student-page">
            <div className="navbar-student">
                Create student
            </div>
            <div className="row">
                <div className="col-4"><input id='studentFirstName' onChange={(e)=> {
                    setStudentFirstName(e.target.value)
                }} className={'form-control'} placeholder={'First name'} type={"text"}/></div>
                <div className="col-4"><input id='studentMiddleName' onChange={(e)=> {
                    setStudentMiddleName(e.target.value)
                    // console.log(value.teacherMiddleName)
                }}   className={'form-control '} placeholder={'Middle name'} type={"text"}/></div>
                <div className="col-4"><input onChange={(e)=> {
                    setStudentLastName(e.target.value)
                    // console.log(value.teacherLastName)
                    
                }} className={'form-control'} placeholder={'Last name'} type={"text"}/></div>
                <div className="col-4"><input onChange={(e)=> {
                    setStudentPhone(e.target.value)
                    // console.log(value.teacherPhone)
                }} className={'form-control'} placeholder={'Phone Number'} type={"text"}/></div>
                <div className="col-4"><input onChange={(e)=> {
                    setStudentParentName(e.target.value)
                    // console.log(value.teacherPhone)
                }} className={'form-control'} placeholder={'Parent name'} type={"text"}/></div>
                <div className="col-4"><input onChange={(e)=> {
                    setStudentParentPhone(e.target.value)
                    // console.log(value.teacherPhone)
                }} className={'form-control'} placeholder={'Parent Number'} type={"text"}/></div>
                {/* <div className="col-4">
                    <select onChange={(e)=>{
                        value.setTeacherSciences(e.target.value)
                        // console.log(value.teacherSciences)
                    }} className={'form-control'} aria-placeholder={'ass'} >
                        <option></option>
                        <option>Sciences</option>
                        <option>w</option>
                        <option>e</option>
                        <option>f</option>
                    </select>
                </div> */}
               
                <div className="col-4">
                    <select onChange={(e) => {
                        setStudentStatus(e.target.value)
                        // console.log(value.teacherStatus)
                    }} className={'form-control'}>
                        <option></option>
                        <option>Status</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                    </select>
                </div>
                <div className="col-4">
                    <select onChange={(e) => {
                        setStudentGroupsName(e.target.value)
                        // console.log(value.teacherGroups)
                    }} className={'form-control'}>
                        <option></option>
                        <option>Groups name</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="col-4">
                    <select onChange={(e) => {
                        setStudentBeginingDate(e.target.value)
                        // console.log(value.teacherBeginingDate)
                    }} className={'form-control'}>
                        <option></option>
                        <option>Begining date</option>
                        <option>6</option>
                        <option>9</option>
                        <option>7</option>
                    </select>
                </div>
                <div className="col-4">
                    <select      onChange={(e) => {
                        setStudentFinishingDate(e.target.value)
                        // console.log(value.teacherFinishingDate)
                    }} className={'form-control'}>
                        <option></option>
                        <option>Finishing data</option>
                        <option>6</option>
                        <option>5</option>
                        <option>10</option>
                    </select>
                </div>
            </div>

            <div className="create-btn">
                <button onClick={()=>{
                    navigate('/students')
                }}  type={"button"}>Exit</button>
                <button onClick={()=>{
                    // value.createTeacher()
                    // addArryTeacher()
                    // navigate('/students')
                    addArryStudent()
                }}  type={"button"}>Create</button>
            </div>

        </div>
    );
}

export default CreateStudentpage;