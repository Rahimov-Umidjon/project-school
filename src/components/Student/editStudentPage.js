import React, {useContext, useState} from 'react';
import {Mycontext} from "../../App";
import {useNavigate} from "react-router-dom";

function EditStudentPage(props) {

    let value = useContext(Mycontext);
    const navigate = useNavigate();

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


    function EditStudent() {
        let obj = value.arryStudent[value.studentProfileIndex];

        obj['firstname'] = studentFirstName ;
        obj['middleName'] = studentMiddleName;
        obj['lastname'] =   studentLastName;
        obj['phone'] =      studentPhone;
        obj['parentName'] =  studentParentName ;
        obj['parentPhone'] =   studentParentPhone;
        obj['status'] =     studentStatus;
        obj['groupName'] =      studentGroupsName;
        obj['begData'] =    studentBeginingDate;
        obj['finData'] =    studentFinishingDate;

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


        // console.log(value.arryStudent)
        navigate('/student-profile')
    }


    return (
        <div id={'edit-student-page'}>
            <div className="navbar-student">
                Create student
            </div>
            <div className="row">
                <div className="col-4"><input id='edit-student-firstname' onChange={(e) => {
                    setStudentFirstName(e.target.value)
                    // console.log(value.arryStudent[value.studentProfileIndex])
                }} className={'form-control'} placeholder={value.arryStudent[value.studentProfileIndex].firstname} type={"text"}/></div>
                <div className="col-4"><input onChange={(e) => {
                    setStudentMiddleName(e.target.value)
                    // console.log(value.teacherMiddleName)
                }} className={'form-control '} placeholder={value.arryStudent[value.studentProfileIndex].middleName} type={"text"}/></div>
                <div className="col-4"><input onChange={(e) => {
                    setStudentLastName(e.target.value)
                    // console.log(value.teacherLastName)

                }} className={'form-control'} placeholder={value.arryStudent[value.studentProfileIndex].lastname} type={"text"}/></div>
                <div className="col-4"><input onChange={(e) => {
                    setStudentPhone(e.target.value)
                    // console.log(value.teacherPhone)
                }} className={'form-control'} placeholder={value.arryStudent[value.studentProfileIndex].phone} type={"text"}/></div>

                <div className="col-4"><input onChange={(e)=> {
                    setStudentParentName(e.target.value)
                    // console.log(value.teacherPhone)
                }} className={'form-control'} placeholder={value.arryStudent[value.studentProfileIndex].parentName} type={"text"}/></div>
                <div className="col-4"><input onChange={(e)=> {
                    setStudentParentPhone(e.target.value)
                    // console.log(value.teacherPhone)
                }} className={'form-control'} placeholder={value.arryStudent[value.studentProfileIndex].parentPhone} type={"text"}/></div>

                {/*<div className="col-4">*/}
                {/*    <select onChange={(e) => {*/}
                {/*        value.setTeacherSciences(e.target.value)*/}
                {/*        // console.log(value.teacherSciences)*/}
                {/*    }} className={'form-control'} >*/}
                {/*        <option></option>*/}
                {/*        <option>Sciences</option>*/}
                {/*        <option>w</option>*/}
                {/*        <option>e</option>*/}
                {/*        <option>f</option>*/}
                {/*    </select>*/}
                {/*</div>*/}
                <div className="col-4">
                    <select onChange={(e) => {
                        setStudentGroupsName(e.target.value)
                        // console.log(value.teacherGroups)
                    }} className={'form-control'}>
                        <option></option>
                        <option>Group name</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
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
                    <select onChange={(e) => {
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
                <button onClick={() => {
                    navigate('/student-profile')
                }} type={"button"}>Exit
                </button>
                <button onClick={() => {
                    EditStudent()
                }} type={"button"}>Create
                </button>
            </div>
        </div>
    );
}

export default EditStudentPage;