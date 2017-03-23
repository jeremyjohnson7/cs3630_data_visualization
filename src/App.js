import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

import '../node_modules/react-vis/dist/style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3080')
        .then(data => data.ok ? data.json() : Promise.reject())
        // .then(data => this.setState({data: data})
        .then(data => this.setState({data}))
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                
                {/*<XYPlot
                    width={300}
                    height={300}>
                    <HorizontalGridLines />
                    <LineSeries
                        data={[
                            { x: 1, y: 10 },
                            { x: 2, y: 5 },
                            { x: 3, y: 15 }
                        ]} />
                    <XAxis />
                    <YAxis />
                </XYPlot>*/}
                
                <XYPlot
                    width={300}
                    height={300}>
                    <HorizontalGridLines />
                    <LineSeries
                        data={this.state.data} />
                    <XAxis />
                    <YAxis />
                </XYPlot>
            </div>
        );
    }
}

export default App;
