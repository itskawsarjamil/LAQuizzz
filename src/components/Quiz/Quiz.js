import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QSN from '../QSN/QSN';

const Quiz = () => {
    const quizes = useLoaderData();
    const questions = quizes.data.questions;
    return (
        <div>
            <h2>Quiz of {quizes.data.name}</h2>
            {
                questions.map((qsn,idx) => <QSN key={qsn.id} qsn={qsn} idx={idx}></QSN>)
            }
        </div>
    );
};

export default Quiz;