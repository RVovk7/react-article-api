import React, { Component } from 'react';
import ArtList from "./artList";
import articles from '../textArr';
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {
    constructor(props) { 
        super(props)
        this.state = {
            reverses: false
        }
    }

    render() {
        return (
            <div className="conatainer" >

                <div className="jumbotron">
                    <h1 className="display-3 text-info">Articles</h1>
                    <h5 className="text-muted" style={{ fontSize: "1.5em" }} >{new Date().toDateString()}
                        <button className="btn btn-light float-right " onClick={this.revers} >Reverse Article</button>
                    </h5>

                </div>
                <div>  <ArtList arrA={this.state.reverses ? articles.slice().reverse() : articles} /></div>
            </div>
        )
    }
    revers = () => {
        //articles.reverse()
        this.setState({
            reverses: !this.state.reverses
        })
    }
}
export default App;