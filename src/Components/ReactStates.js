import React, { useState } from 'react';

export default function ReactState(props) {

    const HandleUpperCase = () => {
        let NewText = text.toUpperCase();
        setText(NewText);
    };

    const HandleLowerCase = () => {
        let NewText = text.toLowerCase();
        setText(NewText);
    };

    const HandleClear = () => {
        let NewText = "";
        setText(NewText);
    };

    const HandleCopyText = () => {
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        alert("Copied To Clipboard");
    };
    

    const FormChange = (e) => {
        setText(e.target.value);
    };


    const [text, setText] = useState('');
    return (
        <>
            <div className="container">
                <h1 className='mt-5'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="8" placeholder='Your Text Here' onChange={FormChange} style={{backgroundColor:props.txtAreaBg, border:'1px solid black'}}></textarea>
                </div>
                <button className="btn btn-primary mx-2" disabled={text.length === 0} onClick={HandleUpperCase}>UpperCase</button>
                <button className="btn btn-primary mx-2" disabled={text.length === 0} onClick={HandleLowerCase}>LowerCase</button>
                <button className="btn btn-primary mx-2" disabled={text.length === 0} onClick={HandleCopyText}>Copy Text</button>
                <button className="btn btn-primary mx-2" disabled={text.length === 0} onClick={HandleClear}>Clear Text</button>
            </div>
            <div className="container my-4" style={{color:props.color}}>
                <h1>Your Text Summary</h1>
                <h6>{text.split(" ").length - 1} words and {text.length} Character</h6>
                <details>
                    <summary><h3>Preview</h3></summary>
                    <p>{text}</p>
                </details>
            </div>
        </>
    );
}