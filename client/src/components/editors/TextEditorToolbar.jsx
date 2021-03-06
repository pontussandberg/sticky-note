import React from 'react';

const TextEditor = ({ id, isSaving }) => (
    <div className="toolbar-wrapper">
        <div id={id} className="toolbar">
            <span className="row1">
                <span className="ql-formats">
                    <select className="ql-font"></select>
                    <select className="ql-size"></select>
                </span>
                <span></span>
            </span>

            <span className="row2">
                <span className="ql-formats">
                    <button className="ql-bold"></button>
                    <button className="ql-italic"></button>
                    <button className="ql-underline"></button>
                    <button className="ql-strike"></button>
                    <select className="ql-background"></select>
                </span>
            </span>

            <span className="row3">
                <span className="ql-formats">
                    <button className="ql-code-block"></button>
                    <button className="ql-list" value="ordered"></button>
                    <button className="ql-list" value="bullet"></button>
                    <select className="ql-align"></select>
                </span>
            </span>
        </div>
        <div className="saved-indicator-container">
            <div className={isSaving ? 'saved-indicator--red' : 'saved-indicator--green'}><div></div><div></div></div>
        </div>
    </div>
);

export default TextEditor;