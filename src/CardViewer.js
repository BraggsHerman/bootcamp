import React from 'react';
import './CardEditor.css';
class CardViewer extends React.Component{
    render() {
        return (
            <div>
                <h2>Card Viewer</h2>
                <hr/>
                <button onClick = {this.props.switchMode}>Go to Card Editor</button>
            </div>
        );
    }
}

export default CardViewer;