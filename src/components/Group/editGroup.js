import React, {useContext} from 'react';
import {Mycontext} from "../../App";
import {useNavigate} from "react-router-dom";

function EditGroup(props) {


    let value = useContext(Mycontext)
    const navigate = useNavigate()


    function EditArryGroup() {



        let obj = value.arryGroup[value.groupIndex]

        obj["groupName"] = document.getElementById('group-name-edit').value
        obj["subjectName"] = document.getElementById('group-subject-name-edit').value
        obj["teacherName"] = document.getElementById('group-teacher-name-edit').value
        obj["studentName"] = document.getElementById('group-student-name-edit').value
        obj["price"] = document.getElementById('group-price-edit').value
        obj["Status"] = document.getElementById('group-status-edit').value
        obj["levelStage"] = document.getElementById('group-level-stage-edit').value
        obj["beginingDate"] = document.getElementById('group-begining-date-edit').value
        obj["finishingDate"] = document.getElementById('group-finishing-data-edit').value

        console.log(value.arryGroup)

        navigate('/group')
    }


    return (
        <div id="edit-group-page">
            <div className="navbar-group">
                Edit group
            </div>
            <div className="row">
                <div className="col-4"></div>

                <div className="col-4"><input onChange={(e) => {
                    // setStudentFirstName(e.target.value)
                }} className={'form-control'} placeholder={'Group name'} type={"text"} id={'group-name-edit'}/></div>

                <div className="col-4"></div>

                <div className="col-4">
                    <select onChange={(e) => {

                        // setStudentStatus(e.target.value)
                        // console.log(value.teacherStatus)
                    }} className={'form-control'} id={'group-subject-name-edit'}>

                        {
                            value.arrySubject.map(function (value, index) {
                                return (
                                    <>
                                        <option value={`${value.subjectName}`}>{value.subjectName}</option>
                                    </>
                                )
                            })
                        }

                    </select>
                </div>
                <div className="col-4">
                    <select onChange={(e) => {
                        // setStudentGroupsName(e.target.value)
                        // console.log(value.teacherGroups)
                    }} className={'form-control'} id={'group-teacher-name-edit'}>
                        {
                            value.arryTeacher.map(function (value, index) {
                                return (
                                    <>
                                        <option value={`${value.firstname}`}>{value.firstname}</option>
                                    </>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="col-4">
                    <select onChange={(e) => {
                        // setStudentGroupsName(e.target.value)
                        // console.log(value.teacherGroups)
                    }} className={'form-control'} id={'group-student-name-edit'}>
                        {
                            value.arryStudent.map(function (value, index) {
                                return (
                                    <>
                                        <option value={`${value.firstname}`}>{value.firstname}</option>
                                    </>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="col-4">
                    <select onChange={(e) => {
                        // setStudentGroupsName(e.target.value)
                        // console.log(value.teacherGroups)
                    }} className={'form-control'} id={'group-price-edit'}>
                        <option value={'Price'}>Price</option>
                        <option value={'1'}>1</option>
                        <option value={'2'}>2</option>
                        <option value={'3'}>3</option>
                    </select>
                </div>
                <div className="col-4">
                    <select onChange={(e) => {
                        // setStudentGroupsName(e.target.value)
                        // console.log(value.teacherGroups)
                    }} className={'form-control'} id={'group-status-edit'}>
                        <option value={'Status'}>Status</option>
                        <option value={'1'}>1</option>
                        <option value={'2'}>2</option>
                        <option value={'3'}>3</option>
                    </select>
                </div>
                <div className="col-4">
                    <select onChange={(e) => {
                        // setStudentGroupsName(e.target.value)
                        // console.log(value.teacherGroups)
                    }} className={'form-control'} id={'group-level-stage-edit'}>
                        <option value={'level/stage'}>level/stage</option>
                        <option value={'1'}>1</option>
                        <option value={'2'}>2</option>
                        <option value={'3'}>3</option>
                    </select>
                </div>
                <div className="col-4">
                    <select onChange={(e) => {
                        // setStudentBeginingDate(e.target.value)
                        // console.log(value.teacherBeginingDate)
                    }} className={'form-control'} id={'group-begining-date-edit'}>
                        <option value={'Begining date'}>Begining date</option>
                        <option value={'6'}>6</option>
                        <option value={'9'}>9</option>
                        <option value={'7'}>7</option>
                    </select>
                </div>
                <div className="col-4">
                    <select onChange={(e) => {
                        // setStudentFinishingDate(e.target.value)
                        // console.log(value.teacherFinishingDate)
                    }} className={'form-control'} id={'group-finishing-data-edit'}>
                        <option value={'Finishing data'}>Finishing data</option>
                        <option value={'6'}>6</option>
                        <option value={'5'}>5</option>
                        <option value={'10'}>10</option>
                    </select>
                </div>
            </div>

            <div className="create-btn">
                <button onClick={() => {
                    navigate('/group')
                }} type={"button"}>Exit
                </button>
                <button onClick={() => {
                    EditArryGroup()
                }} type={"button"}>Edit
                </button>
            </div>

        </div>
    );
}

export default EditGroup;