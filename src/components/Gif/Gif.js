import React, { Component } from 'react';
import { Col, Row, Card, CardTitle } from 'react-materialize';
//if you are doing your own custom css, don't forget to import the css file here
import './gif.css';
class Gif extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        //THIS IS USING NPM PACKAGE REACT-MATERIALIZE
        return (
            <Row>
                {this.props.data.map((d, index) => {
                    return (
                        <Col m={4} s={12} key={index}>
                            <Card header={<CardTitle image={d.images.fixed_height.url} />} actions={[<a />]}>
                                {d.title}
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        )
        //THIS IS USING BOOTSTRAP
        // return (
        //     <div className='row no-gutters'>
        //         {this.props.data.map((d, index) => {
        //             return (
        //                 <div className='col-md-3' key={d.id}>
        //                     <div className="card" style={{width: "18rem"}}>
        //                         <img src={d.images.fixed_height.url} className="card-img-top" alt="..." />
        //                         <div className="card-body">
        //                             <h5 className="card-title">{d.title}</h5>
        //                             <p className="card-text">rating: {d.rating}</p>
        //                             <a href={d.url} className="btn btn-primary">Go somewhere</a>
        //                         </div>
        //                     </div>
        //                 </div>
        //             )
        //         })}
        //     </div>
        // )
        //THIS IS CREATING CSS FROM SCRATCH. BE SURE TO COMMENT OUT BOOTSTRAP LINKS IN INDEX.HTML
        // return (
        //     <div className="row">
        //         {this.props.data.map(d => {
        //             return (
        //                 <div className="column">
        //                     <img src={d.images.original.url} />
        //                     <br />
        //                     <div>
        //                         {d.title}
        //                         <br />
        //                         {d.rating}
        //                     </div>
        //                 </div>
        //             )
        //         })}
        //     </div>
        // )
    }
}

export default Gif;