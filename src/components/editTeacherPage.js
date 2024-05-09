import React, {useContext} from 'react';
import {Mycontext} from "../App";
import {useNavigate} from "react-router-dom";

function EditTeacherPage(props) {

    let value = useContext(Mycontext);
    const navigate = useNavigate();


    

    function EditTeacher() {
        let obj = value.arryTeacher[value.teacherProfileIndex]
        obj['firstname'] =   value.teacherFirstName;
        obj['middleName'] =  value.teacherMiddleName;
        obj['lastname'] =    value.teacherLastName;
        obj['phone'] =       value.teacherPhone;
        obj['sciences'] =    value.teacherSciences;
        obj['status'] =      value.teacherStatus;
        obj['group'] =       value.teacherGroups;
        obj['begdata'] =     value.teacherBeginingDate;
        obj['finData'] =     value.teacherFinishingDate;





        value.setTeacherFirstName('')
        value.setTeacherMiddleName('')
        value.setTeacherLastName('')
        value.setTeacherPhone('')
        value.setTeacherSciences('')
        value.setTeacherStatus('')
        value.setTeacherGroups('')
        value.setTeacherFinishingDate('')
        value.setTeacherBeginingDate('')


        console.log(value.arryTeacher)
        navigate('/teacher-profile')
    }







    return (
        <div id="edit-teacher-page">
            <div className="navbar-teacher">
                Create techer
            </div>
            <div className="row">
                <div className="col-4"><input id='edit-firstname' onChange={(e) => {
                    value.setTeacherFirstName(e.target.value)
                    console.log(value.arryTeacher[value.teacherProfileIndex].firstname)
                }} className={'form-control'} placeholder={value.arryTeacher[value.teacherProfileIndex].firstname} type={"text"}/></div>
                <div className="col-4"><input onChange={(e) => {
                    value.setTeacherMiddleName(e.target.value)
                    // console.log(value.teacherMiddleName)
                }} className={'form-control '} placeholder={value.arryTeacher[value.teacherProfileIndex].middleName} type={"text"}/></div>
                <div className="col-4"><input onChange={(e) => {
                    value.setTeacherLastName(e.target.value)
                    // console.log(value.teacherLastName)

                }} className={'form-control'} placeholder={value.arryTeacher[value.teacherProfileIndex].lastname} type={"text"}/></div>
                <div className="col-4"><input onChange={(e) => {
                    value.setTeacherPhone(e.target.value)
                    // console.log(value.teacherPhone)
                }} className={'form-control'} placeholder={value.arryTeacher[value.teacherProfileIndex].phone} type={"text"}/></div>
                <div className="col-4">
                    <select onChange={(e) => {
                        value.setTeacherSciences(e.target.value)
                        // console.log(value.teacherSciences)
                    }} className={'form-control'} >
                        <option></option>
                        <option>Sciences</option>
                        <option>w</option>
                        <option>e</option>
                        <option>f</option>
                    </select>
                </div>
                <div className="col-4">
                    <select onChange={(e) => {
                        value.setTeacherGroups(e.target.value)
                        // console.log(value.teacherGroups)
                    }} className={'form-control'}>
                        <option></option>

                        <option>Groups</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="col-4">
                    <select onChange={(e) => {
                        value.setTeacherStatus(e.target.value)
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
                        value.setTeacherBeginingDate(e.target.value)
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
                        value.setTeacherFinishingDate(e.target.value)
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
                    navigate('/teacher-profile')
                }} type={"button"}>Exit
                </button>
                <button onClick={() => {
                   EditTeacher()
                }} type={"button"}>Create
                </button>
            </div>

        </div>
    );
}

export default EditTeacherPage;