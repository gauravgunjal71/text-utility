import React from 'react';
import { InputGroup, FormControl, Dropdown } from 'react-bootstrap'


class Operations extends React.Component {

    state = {
        text: null,
        converted_text: null,

    }

    constructor() {
        super()
        // this.capitalize = this.capitalize.bind(this);
        this.state = {
            text: '',
            converted_text: '',
            show: false
        }
    }

    capitalize() {

        fetch('http://127.0.0.1:4996/capitalize', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "text": this.state.text })
        }).then(response => response.json()).then(data => {
            this.setState({ converted_text: data.converted_text })
            this.setState({ show: true })

        })

    }

    lower() {

        fetch('http://127.0.0.1:4996/lower', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "text": this.state.text })
        }).then(response => response.json()).then(data => {
            this.setState({ converted_text: data.converted_text })
            this.setState({ show: true })

        })

    }

    removepunc() {

        fetch('http://127.0.0.1:4996/removepunc', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "text": this.state.text })
        }).then(response => response.json()).then(data => {
            this.setState({ converted_text: data.converted_text })
            this.setState({ show: true })

        })

    }

    camelcase() {

        fetch('http://127.0.0.1:4996/camelcase', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "text": this.state.text })
        }).then(response => response.json()).then(data => {
            this.setState({ converted_text: data.converted_text })
            this.setState({ show: true })

        })

    }

    

    h1style = {
        textAlign: 'center'
    }
    render() {
        return (
            <div>
                <br />

                <div className='container'>

                    <InputGroup className="mb-3">
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="Enter your text here"
                            name="text"
                            value={this.state.text}
                            onChange={(e) => {
                                this.setState({ text: e.target.value });
                            }}
                        />
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Select Operation
  </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={this.capitalize.bind(this)}>Capital Case</Dropdown.Item>
                                <Dropdown.Item onClick={this.lower.bind(this)}>Lower Case</Dropdown.Item>
                                <Dropdown.Item onClick={this.camelcase.bind(this)}>Camel case</Dropdown.Item>
                                <Dropdown.Item onClick={this.removepunc.bind(this)}>Remove Punctuation</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </InputGroup>

                    {
                        this.state.show ?
                            <div>
                                <h1 style={this.h1style}>Converted Text -</h1>
                                <h2 style={this.h1style}>{this.state.converted_text}</h2>
                            </div>
                            : null
                    }



                </div>
            </div>



        );
    }
}

export default Operations;