import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {Mycontext} from "../App";

function CreateGroup(props) {

    const navigate = useNavigate();
    let value = useContext(Mycontext)






    return (
        <div id="create-group-page">
            <div className="navbar-group">
                Create group
            </div>
            <div className="row">
                <div className="col-4"></div>

                <div className="col-4"><input   onChange={(e)=> {
                    // setStudentFirstName(e.target.value)
                }} className={'form-control'} placeholder={'Group name'} type={"text"}/></div>

                <div className="col-4"></div>

                <div className="col-4">
                    <select onChange={(e) => {
                        // setStudentStatus(e.target.value)
                        // console.log(value.teacherStatus)
                    }} className={'form-control'}>
                        <option>subject name</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                    </select>
                </div>
                <div className="col-4">
                    <select onChange={(e) => {
                        // setStudentGroupsName(e.target.value)
                        // console.log(value.teacherGroups)
                    }} className={'form-control'}>
                        <option>Teacher name</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="col-4">
                    <select onChange={(e) => {
                        // setStudentGroupsName(e.target.value)
                        // console.log(value.teacherGroups)
                    }} className={'form-control'}>
                        <option>Student name</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="col-4">
                    <select onChange={(e) => {
                        // setStudentGroupsName(e.target.value)
                        // console.log(value.teacherGroups)
                    }} className={'form-control'}>
                        <option>Price</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="col-4">
                    <select onChange={(e) => {
                        // setStudentGroupsName(e.target.value)
                        // console.log(value.teacherGroups)
                    }} className={'form-control'}>
                        <option>Status</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="col-4">
                    <select onChange={(e) => {
                        // setStudentGroupsName(e.target.value)
                        // console.log(value.teacherGroups)
                    }} className={'form-control'}>
                        <option>level/stage</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="col-4">
                    <select onChange={(e) => {
                        // setStudentBeginingDate(e.target.value)
                        // console.log(value.teacherBeginingDate)
                    }} className={'form-control'}>
                        <option>Begining date</option>
                        <option>6</option>
                        <option>9</option>
                        <option>7</option>
                    </select>
                </div>
                <div className="col-4">
                    <select      onChange={(e) => {
                        // setStudentFinishingDate(e.target.value)
                        // console.log(value.teacherFinishingDate)
                    }} className={'form-control'}>
                        <option>Finishing data</option>
                        <option>6</option>
                        <option>5</option>
                        <option>10</option>
                    </select>
                </div>
            </div>

            <div className="create-btn">
                <button onClick={()=>{
                    navigate('/group')
                }}  type={"button"}>Exit</button>
                <button onClick={()=>{
                    // value.createTeacher()
                    // addArryTeacher()
                    // navigate('/students')
                    // addArryStudent()
                }}  type={"button"}>Create</button>
            </div>

        </div>
    );
}

export default CreateGroup;