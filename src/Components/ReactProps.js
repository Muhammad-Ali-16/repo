import React from 'react';


export default function ReactProps(props) {
    return (
        <>
            <div className="col-3">
                <div className="card" style={{ width: '18rem', backgroundColor:props.background, color:props.color }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.Title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        </>
    );
    
}