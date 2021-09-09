import React, { Component } from 'react'

export class NewsItes extends Component {
    constructor(){
        super();
    }

  

    render() {

        let {title ,desc ,img,newsurl,author,publishedAt} =this.props;
        return (
            <div className="container pl-2">
                <div className="card" style={{width: "18rem"}}>
                  <img src={!img ?"//thehill.com/sites/default/files/doordash_022720getty.jpg":img} className="card-img-top" alt="..."  height="200px"/>
                    <div className="card-body">
                     <h5 className="card-title">{title}....</h5>
                      <p className="card-text text-truncate">{!desc?"The City of Chicago filed lawsuits against DoorDash and Grubhub on Fr...":desc}...</p>
                      <p class="card-text"><small class="text-muted">by{!author?"unknown":author}</small></p>
                      <p class="card-text"><small class="text-muted">Publish at{publishedAt}</small></p>
                      <a href={newsurl} target="_blank" className="btn btn-dark ">Go somewhere</a>
                    </div>
                 </div>
            </div>
        )
    }
}

export default NewsItes
