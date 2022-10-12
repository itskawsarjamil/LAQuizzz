import React from 'react';
import { Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './QSN.css';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const QSN = ({ qsn, idx }) => {
    const ans = qsn.correctAnswer;
    const isclick = (value) => {
        if (ans === value) {
            console.log("right");
            toast('right');

        }
        else {
            console.log("wrong");
            toast('wrong');
        }
    }
    const crctans = () => {
        console.log('Answer:', ans);
        toast(ans);

    }
    return (
        <div className='card'>
            {/* 1 */}
            <h4>Quiz {idx + 1}:{qsn.question}</h4>
            <button onClick={crctans} className='eyebtn'><FontAwesomeIcon icon={faEye}></FontAwesomeIcon> </button>
            <Form>
                <div className='btndiv'>
                    <Form.Check
                        inline
                        label={qsn.options[0]}
                        name="group1"
                        type='radio'
                        id={`inline-radio-1`}
                        onClick={() => isclick(qsn.options[0])}

                    />
                    <Form.Check
                        inline
                        label={qsn.options[1]}
                        name="group1"
                        type='radio'
                        id={`inline-radio-2`}
                        onClick={() => isclick(qsn.options[1])}
                    />
                </div>
                {/* <ToastContainer /> */}
                <div className='btndiv'>
                    <Form.Check
                        inline
                        label={qsn.options[2]}
                        name="group1"
                        type='radio'
                        id={`inline-radio-3`}
                        onClick={() => isclick(qsn.options[2])}
                    />
                    
                    <Form.Check
                        inline
                        label={qsn.options[3]}
                        name="group1"
                        type='radio'
                        id={`inline-radio-4`}
                        onClick={() => isclick(qsn.options[3])}
                    />

                </div>
                <ToastContainer />
            </Form>

        </div>
    );
};

export default QSN;