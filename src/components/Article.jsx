import React, { Component } from 'react';
class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //isOpen: props.defOp
        }
    }
   /*  shouldComponentUpdate(nProps, nState) { 
        return this.state.isOpen !== nState.isOpen;  /// for optimize willUpdate
    } */
    componentWillMount() {
        console.log(`---Mounting`)
    }
    /*  componentWillReceiveProps(nextProps) {
         console.log(nextProps.defOp, this.props.defOp)
         if (nextProps.defOp !== this.props.defOp) {
             this.setState({
                 isOpen: nextProps.defOp
             })
         }
     } */
    componentWillUpdate() {
        console.log(`---
willUpdate
---`)
    }
    render() {
        const { art, isOpen,sButton } = this.props;
        
        const body = isOpen && <section className="card-text">{art.text}</section>;
        const btS = isOpen ? " active" : " disabled"
        return (
            <div className="card mx-auto" style={{ width: '75%' }}>
                <div className="card-header">
                    <h2>{art.title}
                        <button className={`btn btn-secondary ${btS} float-right`} onClick={sButton}>
                            {isOpen ? 'close' : 'open'}</button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted " style={{ textDecorationLine: "underline" }}> Creation date Date: {art.date}
                    </h6>
                    {body}
                </div>
            </div>
        )
    }
     hClick = () => {
         /* this.setState({
             isOpen: !this.state.isOpen
         })  */
    } 
}
export default Article;




