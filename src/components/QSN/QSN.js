import React from 'react';
import { Form } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import './QSN.css';
const QSN = ({ qsn, idx }) => {
    const ans = qsn.correctAnswer;
    const isclick = (value) => {
        if (ans === value) {
            console.log("right");
            // <BasicExample ans={'right'}></BasicExample>
            <Toast className='toast-color'>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            </Toast>

        }
        else {
            console.log("wrong");
            // <BasicExample ans={'wrong'}></BasicExample>
        }
    }
    const crctans = () => {
        // <BasicExample ans={ans}></BasicExample>
        // console.log(ans);
    }
    return (
        <div className='card'>
            {/* 1 */}
            <h4>Quiz {idx + 1}:{qsn.question}</h4>
            <button onClick={crctans}>eye</button>
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
            </Form>

        </div>
    );
};

export default QSN;