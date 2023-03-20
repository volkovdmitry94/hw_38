import React from 'react';

const Start = (props) => {
    return (
        <div onSubmit={props.changeName} className="table">
            <div className="startHeader">Ready for WAR</div>
            <form className="formName">
                <input className="nameInput" name="nameInput" type="text"
                       minLength="3" maxLength="15" placeholder="Enter your name"/>
                <button className="btn" type="submit">start</button>
            </form>
        </div>
    );
};

export default Start;
