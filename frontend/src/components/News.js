import React from "react";

const News = ({finalNews}) => {
  
    
  return (
    <div className='container'>
    <div className='row'>
        {finalNews.map((article, index) => (
            <div key={index} className='col-md-4'>
                <div className='my-3'>
                    <div className='card h-100'>
                    <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
              <span className='badge rounded-pill bg-danger'>{article.source.name} </span>
            </div>
            <img
              src={
                !article.urlToImage
                  ? 'frontend/public/jack-sparrow.jpg'
                  : article.urlToImage
              }
              className='card-img-top'
              alt='...'
            />
            <div className='card-body d-flex flex-column h-100'>
              <h5 className='card-title'>{article.title}</h5>
              <p className='card-text'>{article.description}</p>
              <p className='card-text'>
                <small className='text-muted'>
                  {" "}
                  By {!article.author ? "Unknown" : article.author} on{" "}
                  {new Date(article.publishedAt).toGMTString()}
                </small>
              </p>
              <a
                href={article.url}
                target='_blank'
                rel='noreferrer'
                className='btn btn-sm btn-dark'
              >
                Read more
              </a>
            </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  </div>





    
  );
};

export default News;


