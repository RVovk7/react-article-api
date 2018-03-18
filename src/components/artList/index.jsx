import React, { PureComponent } from 'react';
import Article from '../Article';
import './style.css';
export default class artList extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            openArtId: null
        }
    }
    render() {
        const allArt = this.props.arrA.map((e, i) =>
            <li key={e.id} className="liStyle" >
                <Article
                    art={e} isOpen={this.state.openArtId === e.id}      // defOp= {i==0} => isOpen...
                    sButton={this.sClick.bind(this, e.id)}
                />
            </li>);
        return (
            <ul>
                {allArt}
            </ul>
        )
    }
    sClick = openArtId => this.setState({
        openArtId: this.state.openArtId === openArtId ? null : openArtId
    });
}
