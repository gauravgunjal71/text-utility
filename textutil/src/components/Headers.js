import React from 'react';
import Typing from 'react-typing-animation';

class Headers extends React.Component {

    h1style = {
        textAlign: 'center'
    }

    render() {
        return (

            <div>
                <br />
            <h1 style={this.h1style}>Text Utility</h1>
            <br />

            <div>
                <Typing>
                    <Typing.Speed ms={20} />
                    <h2 style={this.h1style}><span>Welcome to Text Utility service.</span></h2>
                    <Typing.Delay ms={1000} />
                    <Typing.Backspace count={32} />
                    <h2 style={this.h1style}><span>Here you can do anything with your text.</span></h2>
                    <Typing.Delay ms={1000} />
                    <Typing.Backspace count={40} />
                    <h2 style={this.h1style}><span>Enter the text below to see the magic!!!</span></h2>
                </Typing>
            </div>
            </div>  );
    }
}

export default Headers;