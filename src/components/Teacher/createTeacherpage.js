import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {Mycontext} from "../../App";


function CreateTeacherpage(props) {

 
    const navigate = useNavigate();

    let value = useContext(Mycontext)



    function addArryTeacher(){

    let obj = {
        firstname :   value.teacherFirstName,
        middleName :  value.teacherMiddleName,
        lastname :    value.teacherLastName,
        phone :       value.teacherPhone,
        sciences :    value.teacherSciences,
        status :      value.teacherStatus,
        group :       value.teacherGroups,
        begdata :     value.teacherBeginingDate,
        finData :     value.teacherFinishingDate        
    }

        value.arryTeacher.push(obj);

   
        value.setTeacherFirstName('')
        value.setTeacherMiddleName('')
        value.setTeacherLastName('')
        value.setTeacherPhone('')
        value.setTeacherSciences('')
        value.setTeacherStatus('')
        value.setTeacherGroups('')
        value.setTeacherFinishingDate('')
        value.setTeacherBeginingDate('')


            navigate('/teacher')
    }

    return (
        <div id="create-teacher-page">
            <div className="navbar-teacher">
                Create techer
            </div>
            <div className="row">
                <div className="col-4"><input id='firstname' onChange={(e)=> {
                    value.setTeacherFirstName(e.target.value)
                    // document.getElementById(`${e.target.id}`).focus()
                    // console.log(e.target.id)
                   
                    // console.log(value.teacherFirstName)
                }} className={'form-control'} placeholder={'Fristname'} type={"text"}/></div>
                <div className="col-4"><input onChange={(e)=> {
                    value.setTeacherMiddleName(e.target.value)
                    // console.log(value.teacherMiddleName)
                }}   className={'form-control '} placeholder={'Middle name'} type={"text"}/></div>
                <div className="col-4"><input onChange={(e)=> {
                    value.setTeacherLastName(e.target.value)
                    // console.log(value.teacherLastName)
                    
                }} className={'form-control'} placeholder={'Last name'} type={"text"}/></div>
                <div className="col-4"><input onChange={(e)=> {
                    value.setTeacherPhone(e.target.value)
                    // console.log(value.teacherPhone)
                }} className={'form-control'} placeholder={'Phone Number'} type={"text"}/></div>
                <div className="col-4">
                    <select onChange={(e)=>{
                        value.setTeacherSciences(e.target.value)
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
                <button onClick={()=>{
                    navigate('/teacher')
                }}  type={"button"}>Exit</button>
                <button onClick={()=>{
                    // value.createTeacher()
                    addArryTeacher()
                    
                }}  type={"button"}>Create</button>
            </div>

        </div>
    );
}

export default CreateTeacherpage;