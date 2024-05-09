import React, { useContext } from "react";
import { Mycontext } from "../App";
import {useNavigate} from "react-router-dom";




function TeacherProfile(props){

    let value = useContext(Mycontext)
    const navigate = useNavigate();

    return (
        <div id={'teacherProfile'}>
            <div className="teacher-profile-left">
                <div className="teacher-profile-logo">
                    <div className="teacher-profile-img">

                    </div>

                    {value.arryTeacher[value.teacherProfileIndex].firstname + " "  }
                    {value.arryTeacher[value.teacherProfileIndex].middleName + " " }
                    {value.arryTeacher[value.teacherProfileIndex].lastname + " " }
                    {value.arryTeacher[value.teacherProfileIndex].phone + ""   }
                </div>
                <div className="teacher-profile-left-bottom">

                </div>
            </div>
            <div className="teacher-profile-right">
                <div className="position">POSITION</div>
                <div className="teacher-profile-right-body">
                    <div className="row m-0  w-100 h-100"></div>
                    <div className="btn-edit">
                        <button onClick={()=>{
                            navigate('/teacher')
                        }} className={'btn btn-danger  '} type={"button"}>Exit</button>
                        <button onClick={()=>{
                            navigate('/edit-teacher-page')
                            console.log(value.arryTeacher)
                        }} className={'btn btn-danger  '} type={"button"}>Edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherProfile ; 
