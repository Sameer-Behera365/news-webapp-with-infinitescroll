
// without infinite scrolling   and class based component


// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from  "./Spinner"
 
// import PropTypes from 'prop-types'

// export default class News extends Component {

//   static defaultProps = {
//     country: "in",
//     pageSize: 8,
//     category: "general",
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };

//   capitalizeFirstLetter=(string)=>
//   {
//     return string.charAt(0).toUpperCase() + string.slice(1);   //first letter i want capital or uppercase


//   }

//   constructor(props){
//     super(props);
//     this.state={                                    // this is the default state and i am setting the state u can lern more about set state in documentation of react
//       articles:[],                          //u can rename whatever name u want articles to lala:this.articles  but not that loading:false
//       loading: false,
//       page:1
//     }
//     document.title= `${this.capitalizeFirstLetter(props.category)}-NewsApp`;
//    }


// /*

//    async componentDidMount()           //look i dont need to add async here but as we are using await so we need to use async here
//    {
//     // console.log("inside component did mount");
//     let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=caaae91458f74e5286a52cb8b01fedb2&page=1&pageSize=20";   //this is the api for the top headlines in the newsapi.org    and in the headlines link i appended page=1 so that for saftey always 1st page opens   and i put page size as 20    it means   Each page will contain maximum 20 news articles from the API.

    
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     // console.log(parsedData); 
//     this.setState({ 
//       articles: parsedData.articles,
//       totalResults:parsedData.totalResults    //see i didnt use the totalResults in the class so the value is undefined in totalResults  by default now here we update totalResults

//     });    //This line updates the component's state, specifically the articles array in your state object.
//   }

// */


// async componentDidMount() 
// {
//   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c75628745e2e4ffca4cc6f18a26ec36e&page=1&pageSize=${props.pageSize}`;


//   this.setState({loading:true});

//   let data = await fetch(url);
//   let parsedData = await data.json();

//   this.setState({ 
//     articles: parsedData.articles,
//     totalResults: parsedData.totalResults,            //see i didnt use the totalResults in the class so the value is undefined in totalResults  by default now here we update totalResults
//     loading:false
//   });                    //This line updates the component's state, specifically the articles array in your state object.

// }






// handlePreviousClick = async () => {
//   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c75628745e2e4ffca4cc6f18a26ec36e&page=${this.state.page - 1}&pageSize=${props.pageSize}`;

//   this.setState({loading:true});

//   let data = await fetch(url); 
//   let parsedData = await data.json();


//   this.setState({       
//     page: this.state.page - 1,
//     articles: parsedData.articles,
//     loading :false
//   });

// };




// handleNextClick = async () => {
//   if(    !(this.state.page + 1 > Math.ceil(this.state.totalResults / (props.pageSize)))           ) 
//   {
//     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c75628745e2e4ffca4cc6f18a26ec36e&page=${this.state.page + 1}&pageSize=${props.pageSize}`;

//     this.setState({loading:true});   //as fetching is happening so loading image i show

//     let data = await fetch(url);
//     let parsedData = await data.json();
   
//     this.setState({
//       page: this.state.page + 1,
//       articles: parsedData.articles,
//       loading:false
//     });
//   }

// };


  
//   render() {

//     return (

//     <div className="container my-4">
//       <h2 className="text-center"    >NewsApp-Top Headlines from {this.capitalizeFirstLetter(props.category)}</h2>  {/* className="text-center"  this is a  bootstrap class which align text in centre*/}



//       {this.state.loading && <Spinner/>}  {/* this line means if teh loading is true then only show the spinner else not */}




//       <div className="row ">
//       { !this.state.loading  && this.state.articles.map(                    //map function to copy the array and modify as per our means    and only when this.state.loading is false   means !false=true then only show the content

//       (element)=>{
//       return(
//       <div className="col-md-4" key={element.url}>         {/*as the unique element can be url so we put that here*/}

//       <NewsItem                
//       title={element.title ? element.title.slice(0, 20) : "No Title Available"}  
//       description={element.description ? element.description.slice(0, 60) : "No Description Available"}
//       imageurl={element.urlToImage}
//       newsUrl={element.url} 
//       author={element.author}
//       date={element.publishedAt}
//       source={element.source.name}

//       />
//       </div>  
//       )

//       })}
//       </div>


//       <div className="d-flex justify-content-between">              {/* i used a flex box here to separate teh two buttons and i took it from bootstarp */}
      

//       <button 
//       disabled={this.state.page<=1}                              //i am disabling the button whenever page is <=1
//       type="button" 
//       className="btn btn-secondary" 
//       onClick={this.handlePreviousClick}>
//       &larr; previous
//       </button>


//       <button 
//       type="button" 
//       className="btn btn-secondary"
//       onClick={this.handleNextClick}>
//       next &rarr;
//       </button>

//       </div>

//     </div>

//     )
//   }
// }

//------------------------------------------------------------------------------------------------------------------------------------------------


// with infinite scrolling    and class based component

// import React, { Component } from 'react';
// import NewsItem from './NewsItem';
// import Spinner from './Spinner';
// import InfiniteScroll from "react-infinite-scroll-component";



// export default class News extends Component {


//   capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//     };
//     document.title = `${this.capitalizeFirstLetter(props.category)} - NewsApp`;
//   }


//   async updateNews()
//   {
//     props.setProgress(0);        //to dispaly teh loading bar i used PROGRESS AS 0 initially 

//     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c75628745e2e4ffca4cc6f18a26ec36e&page=${this.state.page}&pageSize=${props.pageSize}`;
//     this.setState({ loading: true });
    
//     let data = await fetch(url);
//     props.setProgress(30);       //to dispaly the loading bar slowly  i used PROGRESS AS 30  here so that it directly dont go to 100 as it wil be very fast not viisib;e

//     let parsedData = await data.json();
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//     props.setProgress(100);


//   }

//   async componentDidMount() {

//     this.updateNews();
 
//   }


//   fetchMoreData = async() => {       //this function fetchMoreData is to fetch more data on scrolling  and inside teh content we will use teh updatenew()  content only but remove  only this.setState({ loading: true });  because thsi wil make bugs in scrolling

//     this.setState({page:this.state.page+1});
//     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c75628745e2e4ffca4cc6f18a26ec36e&page=${this.state.page}&pageSize=${props.pageSize}`;
//     let data = await fetch(url);
//     let parsedData = await data.json();

//     this.setState({
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });

//   };

 


//   render() {
//     return (
//       <div className="container my-4">

//         <h3 className="text-center">
//           NewsApp - Top Headlines from {this.capitalizeFirstLetter(props.category)}
//         </h3> 

//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length < this.state.totalResults}
//           loader={<Spinner />}
//         >


//         <div className="row">
//           {!this.state.loading &&   this.state.articles.map((element) => {
//               return (
//                 <div className="col-md-4" key={element.url}>
//                   <NewsItem
//                     title={element.title ? element.title.slice(0, 20) : 'No Title Available'}
//                     description={element.description ? element.description.slice(0, 60) : 'No Description Available'}
//                     imageurl={element.urlToImage}
//                     newsUrl={element.url}
//                     author={element.author}
//                     date={element.publishedAt}
//                     source={element.source.name}
//                   />
//                 </div>
//               );
//             })}
//         </div>

//         </InfiniteScroll>
        
        
        
//       </div>
//     );
//   }
// }


//----------------------------------------------------------------------------------------------------------------------------------------
//infinite scrolling and  functional based

import React,{useEffect, useState} from "react";
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types';



const News=(props)=>{

  //default values
  const [articles,setArticles] =useState([]);
  const [loading,setLoading] =useState(true);
  const [page,setPage] =useState(1);
  const [totalResults,setTotalResults] =useState(0);

  const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  };



const updateNews =async()=>{

    props.setProgress(0);
    setLoading(true);

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c75628745e2e4ffca4cc6f18a26ec36e&page=${page}&pageSize=${props.pageSize}`;

    let data = await fetch(url);

    props.setProgress(30);
    let parsedData = await data.json();

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    
    props.setProgress(100);
  }



useEffect(()=>{
  updateNews();

},[])




const handlePreviousClick=()=>{   //eventhough we wont be using this feature previous and next in infinite dcroll just for understanding how to use this in functional based i am writing it

  setPage(page-1);
  updateNews();
};

const handleNextClick =()=>{

  setPage(page+1);
  updateNews();
};





const fetchMoreData = async () =>{
  
    setPage(page+1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c75628745e2e4ffca4cc6f18a26ec36e&page=${page+1}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);

  };


    return (
      <div className="container my-4">
        <h3 className="text-center"         style={{ margin: "25px 0px", marginTop: "90px" }}>
          NewsApp - Top Headlines from {capitalizeFirstLetter(props.category)}
        </h3>

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={ <Spinner />}
        >
          <div className="row">
            { !loading   && articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 20) : 'No Title Available'}
                    description={element.description ? element.description.slice(0, 60) : 'No Description Available'}
                    imageurl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
  
  


  News.defaultprops = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

   News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  export default News;















