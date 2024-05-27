import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {Mycontext} from "../../App";

function CreateGroup(props) {

    const navigate = useNavigate();
    let value = useContext(Mycontext)

    function AddGroup(){

        let obj = {
            groupName : document.getElementById('group-name').value,
            subjectName : document.getElementById('group-subject-name').value,
            teacherName : document.getElementById('group-teacher-name').value,
            studentName : document.getElementById('group-student-name').value,
            price : document.getElementById('group-price').value,
            Status : document.getElementById('group-status').value,
            levelStage : document.getElementById('group-level-stage').value,
            beginingDate : document.getElementById('group-begining-date').value,
            finishingDate : document.getElementById('group-finishing-data').value,
        }


        value.arryGroup.push(obj)

        console.log(value.arryGroup)


        navigate('/group')



    }





    return (
        <div id="create-group-page">
            <div className="navbar-group">
                Create group
            </div>
            <div className="row">
                <div className="col-4"></div>

                <div className="col-4"><input   onChange={(e)=> {
                    // setStudentFirstName(e.target.value)
                }} className={'form-control'} placeholder={'Group name'} type={"text"}  id={'group-name'} /></div>

                <div className="col-4"></div>

                <div className="col-4">
                    <select onChange={(e) => {

                        // setStudentStatus(e.target.value)
                        // console.log(value.teacherStatus)
                    }} className={'form-control'} id={'group-subject-name'}>

                        {
                            value.arrySubject.map(function (value, index){
                                return(
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
                    }} className={'form-control'} id={'group-teacher-name'}>
                        {
                            value.arryTeacher.map(function (value, index){
                                return(
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
                    }} className={'form-control'} id={'group-student-name'}>
                        {
                            value.arryStudent.map(function (value, index){
                                return(
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
                    }} className={'form-control'} id={'group-price'}>
                        <option value={'Price'}>Price</option>
                        <option  value={'1'} >1</option>
                        <option  value={'2'} >2</option>
                        <option  value={'3'} >3</option>
                    </select>
                </div>
                <div className="col-4">
                    <select onChange={(e) => {
                        // setStudentGroupsName(e.target.value)
                        // console.log(value.teacherGroups)
                    }} className={'form-control'} id={'group-status'}>
                        <option value={'Status'}>Status</option>
                        <option  value={'1'} >1</option>
                        <option  value={'2'} >2</option>
                        <option  value={'3'} >3</option>
                    </select>
                </div>
                <div className="col-4">
                    <select onChange={(e) => {
                        // setStudentGroupsName(e.target.value)
                        // console.log(value.teacherGroups)
                    }} className={'form-control'} id={'group-level-stage'}>
                        <option value={'level/stage'}>level/stage</option>
                        <option  value={'1'} >1</option>
                        <option  value={'2'} >2</option>
                        <option  value={'3'} >3</option>
                    </select>
                </div>
                <div className="col-4">
                    <select onChange={(e) => {
                        // setStudentBeginingDate(e.target.value)
                        // console.log(value.teacherBeginingDate)
                    }} className={'form-control'} id={'group-begining-date'}>
                        <option value={'Begining date'}>Begining date</option>
                        <option  value={'6'} >6</option>
                        <option  value={'9'} >9</option>
                        <option  value={'7'} >7</option>
                    </select>
                </div>
                <div className="col-4">
                    <select      onChange={(e) => {
                        // setStudentFinishingDate(e.target.value)
                        // console.log(value.teacherFinishingDate)
                    }} className={'form-control'} id={'group-finishing-data'}>
                        <option value={'Finishing data'}>Finishing data</option>
                        <option  value={'6'} >6</option>
                        <option  value={'5'} >5</option>
                        <option  value={'10'} >10</option>
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
                    AddGroup()
                }}  type={"button"}>Create</button>
            </div>

        </div>
    );
}

export default CreateGroup;