import React from "react";
const ContentSection = () => {
    const formStyle = {
        padding: '8px',
        border: '1px solid #1388ef',
        borderRadius: '4px',
        marginRight: '10px',
        width: '300px',
    };
    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#1388ef',
        color: 'white',
        borderRadius: '3px',
    };
    return (
        <>
            <input
                type="text"
                value="Rutuja"
                style={formStyle}
            />
            <button type="submit" style={buttonStyle}>Submit</button>
            <footer className="footers">
                <div>
                    <p>PRIVACY POLICY   |    TERMS & CONDITIONS @RUTUJA</p>
                </div>
            </footer>
        </>

    )
}
export default ContentSection;