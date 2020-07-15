import React, {Component} from 'react';
import Chat from './ChatFirebase';

class TextBox extends Component {
    render() {
        return(
            <div className="boxalign">
                <div className="textbox">
                    <Chat />
                </div>
            </div>
        )
    }
}

export default TextBox;