import React, { Component } from 'react'
import NewsItes from './newitemes/NewsItes'
import Spinner from './Spinner';

import PropTypes from 'prop-types'


 class NewsComponent extends Component {
   
    static defaultProps={
        country:"in",
        pageSize:8,
        category:"bussiness"
    }

   static propTypes = {
       country : PropTypes.string.isRequired,
       pageSize:PropTypes.number.isRequired,
       category:PropTypes.string.isRequired
      };
      
    constructor(props){
        super(props);
        this.state = {
          commitHistory: [],
          page: 1,
          isLoading: true,
         
        };
        document.title=`${ this.capatalize(this.props.category)} --News `
    }

  capatalize =(string)=>{
      return    string.charAt(0).toUpperCase()+string.slice(1);
     }

 async updateComponent(pageno){
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=58ec8551b61944a38709dca942807e27&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    await fetch(url)
    .then(res => res.json())
      .then(response =>
     this.setState({ commitHistory: response.articles, 
         isLoading: false
         })
   )
     
 }


    async componentDidMount(){
       this.updateComponent();
    }
   handleNext = async ()=>{
     this.setState( {page:this.state.page +1 })
     this.updateComponent();
    }
    handlePrev =()=>{
    this.setState( {page:this.state.page +1 })
    this.updateComponent();
       } 

    render() {
        
        const { commitHistory, isLoading } = this.state;
        return (
            <div>
                <div className="container">
                    <h2 className="text text-center text-light">News-Top {this.capatalize(this.props.category)} Headlines</h2>
                    {this.state.isLoading && <Spinner/>}
                    <div className="row ">
                       {
                           !this.state.isLoading && commitHistory.map((data, index) => (
                        <div className="col-sm-4 col-md-4 col-lg-4 my-3 " key={index}>
                            <NewsItes title={data.title.slice(0,40)} desc={data.description} img={data.urlToImage} newsurl={data.url}  author={data.author} publishedAt={data.publishedAt}/>
                        </div>
                      
                            ))}
                    </div>
                </div>
                <div className="container">
                    <div className="d-flex justify-content-around my-5">
                        <button className="btn btn-dark" disabled={this.state.page <=1 } onClick={this.handlePrev}> &larr; Previous </button>
                        <button className="btn btn-lg btn-dark" disabled={this.state.page +1 > Math.ceil(this.state.totalResule / this.props.pageSize)} onClick={this.handleNext}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default NewsComponent