// import React, { Component } from 'react'

// export default class NewsItem extends Component {


//   render() {
//     let {title,description,imageurl,newsUrl,author,date,source}=this.props;      //here we are taking the unique id is newsUrl
//     return (

// <div>

// <div className="card" style={{width: "18rem"}}>
//   <img src={!imageurl?"https://media.istockphoto.com/id/1253038960/photo/breaking-news-on-screen.jpg?s=1024x1024&w=is&k=20&c=5_km6_Hz4WZrlNdYTmU-lcn3_jkAnrH84mOGQ8qmiDE=":imageurl} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">{title}...</h5>
    
//     <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//     {source}
//     <span className="visually-hidden">unread messages</span>
//     </span>

//     <p className="card-text">
//     {description}...
//     </p>
//     <p className="card-text"><small className="text-body-secondary">by {!author?"unknown":author}  on {new Date(date).toGMTString()}</small></p>   


//     <a 
//     href={newsUrl} 
//     target="_blank"                                    //target="_blank" is a special keyword that will open links in a new tab every time
//     className="btn btn-sm btn-primary">you wanna read more buddy</a>
//   </div>
// </div>

// </div>

//     )
//   }
// }
 


//----------------------------------------------------------------------------------------

//functional based componnet




import React, { Component } from 'react'

const NewsItem=(props)=> {
    let {title,description,imageurl,newsUrl,author,date,source}=props;     
    return (

<div>

<div className="card" style={{width: "18rem"}}>
  <img src={!imageurl?"https://media.istockphoto.com/id/1253038960/photo/breaking-news-on-screen.jpg?s=1024x1024&w=is&k=20&c=5_km6_Hz4WZrlNdYTmU-lcn3_jkAnrH84mOGQ8qmiDE=":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
    <span className="visually-hidden">unread messages</span>
    </span>

    <p className="card-text">
    {description}...
    </p>
    <p className="card-text"><small className="text-body-secondary">by {!author?"unknown":author}  on {new Date(date).toGMTString()}</small></p>   


    <a 
    href={newsUrl} 
    target="_blank"                                    
    className="btn btn-sm btn-primary">you wanna read more buddy</a>
  </div>
</div>

</div>


  )
}

export default NewsItem;


 























