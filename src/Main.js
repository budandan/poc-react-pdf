import React, { useState } from 'react';
import { StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import MyPDF from './MyPDF';

const Main = () => {
    const [text, setText] = useState('');
    const [textToSend, setTextToSend] = useState(text);
    const save = () => {
        setTextToSend(text);
    }
    return (
        <div>
            <input type='text' onChange={event => setText(event.target.value)}></input>
            <button onClick={save}>Save</button>
            <PDFDownloadLink document={<MyPDF text={textToSend}/>} fileName="somename.pdf">
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>
            <PDFViewer width='80%' height='800'>
                <MyPDF text={textToSend}/>
            </PDFViewer>
        </div>
    );
}

export default Main;