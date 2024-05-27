import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Mycontext} from "../../App";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Subject(props) {
    const navigate = useNavigate();
    let value = useContext(Mycontext)

    const [editSubjectName,setEditSubjectName] = useState()
    const [editSubjectPrice,setEditSubjectPrice] = useState()
    const [subjectIndex,setSubjectIndex] = useState()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdi = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    // useEffect(() => {
    //
    // } ,[]);

    function AddArrySubject() {
        let obj = {
            subjectName: document.getElementById('subject-name').value,
            price: document.getElementById('subject-price').value
        }

        value.arrySubject.push(obj)
        console.log()
    }

    function EditArrySubject(index) {
        value.arrySubject[subjectIndex]["subjectName"] = editSubjectName
        value.arrySubject[subjectIndex]["price"] = editSubjectPrice
    }


    return (
        <div id={'home-container'}>
            <div className="navbars">
                <div className="navbar-logo"><h3>Subject</h3></div>
                <div className="navbar-search ">
                    <input className={'form-control'} type="text"/>
                    <button className={'btn btn-danger'} type={"button"}>Find</button>
                </div>
            </div>

            <div className="home-body">

                <div className={'subject-create-modal'}>
                    <Modal show={show} onHide={handleClose}>
                        {/*<Modal.Header closeButton>*/}
                        {/*    <Modal.Title></Modal.Title>*/}
                        {/*</Modal.Header>*/}
                        <Modal.Body className={'d-flex m-3 gap-3'}>
                            <input id={'subject-name'} className={'form-control'} type="text"
                                   placeholder={'subject name'}/>
                            <input id={'subject-price'} className={'form-control'} type="text" placeholder={'price'}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Exit
                            </Button>
                            <Button variant="primary" onClick={() => {
                                handleClose()
                                AddArrySubject()
                            }}>
                                Create
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className={'subject-edit-modal'}>
                    <Modal show={showEdit} onHide={handleCloseEdi}>
                        {/*<Modal.Header closeButton>*/}
                        {/*    <Modal.Title></Modal.Title>*/}
                        {/*</Modal.Header>*/}
                        <Modal.Body className={'d-flex m-3 gap-3'}>
                            <input onChange={(e)=> setEditSubjectName(e.target.value)} id={'subject-edit-name'} className={'form-control'} type="text"
                                   placeholder={'subject name'}/>
                            <input onChange={(e)=> setEditSubjectPrice(e.target.value)} id={'subject-edit-price'} className={'form-control'} type="text"
                                   placeholder={'price'}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseEdi}>
                                Exit
                            </Button>
                            <Button variant="primary" onClick={()=> {
                                handleCloseEdi()
                                EditArrySubject()
                            }}>
                                Create
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <div className="home-body-left">
                    <div onClick={() => {
                        navigate('/')
                        localStorage.setItem('ActiveComponent', "1")
                    }}
                         className={localStorage.getItem('ActiveComponent') === '1' ? "left-item-active" : "left-item"}>Dashboard
                    </div>
                    <div onClick={() => {
                        navigate('/teacher')
                        localStorage.setItem('ActiveComponent', "2")
                    }}
                         className={localStorage.getItem('ActiveComponent') === '2' ? "left-item-active" : "left-item"}>Teacher
                    </div>
                    <div onClick={() => {
                        navigate('/group')
                        localStorage.setItem('ActiveComponent', "3")
                    }}
                         className={localStorage.getItem('ActiveComponent') === '3' ? "left-item-active" : "left-item"}>Group
                    </div>
                    <div onClick={() => {
                        navigate('/subject')
                        localStorage.setItem('ActiveComponent', "4")
                    }}
                         className={localStorage.getItem('ActiveComponent') === '4' ? "left-item-active" : "left-item"}>Subject
                    </div>
                    <div onClick={() => {
                        navigate('/students')
                        localStorage.setItem('ActiveComponent', "5")
                    }}
                         className={localStorage.getItem('ActiveComponent') === '5' ? "left-item-active" : "left-item"}>Student
                    </div>
                </div>
                <div className="home-body-right-subject">
                    {/*<div className="subject-header">*/}

                    {/*</div>*/}
                    <div className="subject-body">
                        <table>
                            <tr>
                                <th>New subject</th>
                                <th>Price</th>
                                <th>
                                    <button onClick={handleShow} type={"button"} className={'btn btn-danger'}> create
                                    </button>
                                </th>
                            </tr>


                            {
                                value.arrySubject.map(function (value, index) {
                                    return (
                                        <tr id={`subject-${index}`}>
                                            <td>{value.subjectName}</td>
                                            <td>{value.price}</td>
                                            <td>
                                                <button onClick={() => {
                                                    handleShowEdit()
                                                    setSubjectIndex(index)
                                                }} type={"button"} className={'btn btn-dark'}>Edit
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }

                        </table>
                    </div>
                    <div className="subject-footer">
                        <div className="total"></div>
                        <div className="next-previous"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Subject;