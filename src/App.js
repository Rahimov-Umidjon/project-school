import React, {createContext, useEffect, useState} from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Students from "./components/Students";
import Group from "./components/group";
import Subject from "./components/subject";
import Teacher from "./components/teacher";
import CreateTeacherpage from "./components/createTeacherpage";
import CreateStudentpage from './components/createStudent';
import TeacherProfile from "./components/teacherProfile";
import EditTeacherPage from "./components/editTeacherPage";
import StudentProfile from "./components/studentProfile";
import EditStudentPage from "./components/editStudentPage";
import CreateGroup from "./components/createGroup";
import EditGroup from "./components/editGroup";


export const Mycontext = createContext();


function App(props) {


    const [activecomponent, setActivecomponent] = useState(1)
    const [teacherFirstName, setTeacherFirstName] = useState('') ;
    const [teacherMiddleName, setTeacherMiddleName] = useState('');
    const [teacherLastName, setTeacherLastName] = useState('');
    const [teacherPhone, setTeacherPhone] = useState('');
    const [teacherSciences, setTeacherSciences] = useState('');
    const [teacherGroups, setTeacherGroups] = useState('');
    const [teacherStatus, setTeacherStatus] = useState('');
    const [teacherBeginingDate, setTeacherBeginingDate] = useState('');
    const [teacherFinishingDate, setTeacherFinishingDate] = useState('');

    // const [studentInfo , setStudentInfo] = useState([])

    const [arryTeacher , setArryTeacher] = useState([])
    const [arryStudent , setArryStudent] = useState([])
    const [arrySubject , setArrySubject] = useState([])
    const [arryGroup , setArryGroup] = useState([])
    const [teacherProfileIndex , setTeacherProfileIndex] = useState()
    const [studentProfileIndex , setStudentProfileIndex] = useState()
    const [groupIndex , setGroupIndex] = useState()






    return (


        <Mycontext.Provider value={{
            activecomponent,
            setActivecomponent,
            setTeacherFinishingDate,
            teacherFinishingDate,
            setTeacherBeginingDate,
            teacherBeginingDate,
            setTeacherFirstName,
            teacherFirstName,
            setTeacherMiddleName,
            teacherMiddleName,
            teacherLastName,
            setTeacherLastName,
            setTeacherPhone,
            teacherPhone,
            setTeacherSciences,
            teacherSciences,
            setTeacherStatus,
            teacherStatus,
            setTeacherGroups,
            teacherGroups,
            arryTeacher,
            setArryTeacher,
            teacherProfileIndex,
            setTeacherProfileIndex,
            arryStudent,
            setArryStudent,
            studentProfileIndex,
            setStudentProfileIndex,
            arrySubject,
            setArrySubject,
            arryGroup,
            setArryGroup,
            groupIndex,
            setGroupIndex
        }}>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/students"} element={<Students/>}/>
                <Route path={"/group"} element={<Group/>}/>
                <Route path={"/subject"} element={<Subject/>}/>
                <Route path={"/teacher"} element={<Teacher/>}/>
                <Route path={"/create-teacher-page"} element={<CreateTeacherpage/>}/>
                <Route path={"/create-student-page"} element={<CreateStudentpage/>}/>
                <Route path={"/create-group-page"} element={<CreateGroup/>}/>
                <Route path={"/teacher-profile"} element={<TeacherProfile/>}/>
                <Route path={"/student-profile"} element={<StudentProfile/>}/>
                <Route path={"/edit-teacher-page"} element={<EditTeacherPage/>}/>
                <Route path={"/edit-student-page"} element={<EditStudentPage/>}/>
                <Route path={"/edit-group-page"} element={<EditGroup/>}/>


            </Routes>
        </Mycontext.Provider>

    );
}

export default App;