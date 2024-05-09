import React, {useContext} from 'react';
import {Mycontext} from "../App";
import {useNavigate} from "react-router-dom";

function StudentProfile(props) {

    let value = useContext(Mycontext);
    const navigate = useNavigate();

    return (
        <div id={'student-profile'}>
            <div className="student-profile-left">
                <div className="student-profile-logo">
                    <div className="student-profile-img">

                    </div>

                    {value.arryStudent[value.studentProfileIndex].firstname + " "  }
                    {value.arryStudent[value.studentProfileIndex].middleName + " " }
                    {value.arryStudent[value.studentProfileIndex].lastname + " " }
                    {value.arryStudent[value.studentProfileIndex].phone + ""   }
                </div>
                <div className="student-profile-left-bottom">

                </div>
            </div>
            <div className="student-profile-right">
                <div className="position">POSITION</div>
                <div className="student-profile-right-body">
                    <div className="row m-0  w-100 h-100"></div>
                    <div className="btn-edit">
                        <button onClick={()=>{
                            navigate('/students')
                        }} className={'btn btn-danger  '} type={"button"}>Exit</button>
                        <button onClick={()=>{
                            navigate('/edit-student-page')
                            // console.log(value.arryTeacher)
                        }} className={'btn btn-danger  '} type={"button"}>Edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentProfile;