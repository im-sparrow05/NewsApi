import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import News from './components/News';
import Footer from './components/footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const tempNews = await axios.get('https://newsapi-lujd.onrender.com/api/v1/news');
        setNews(tempNews.data);
      } catch (err) {
        setError('Failed to fetch news');
      } finally {
        setLoading(false);
      }
    };
    getNews()
  }, []);

  if (loading) {
    return <div>Wait a sec...</div>;
  }

  if (error) {
    return <div>Throw Error: {error}</div>;
  }

  // removed the empty news getting from api
  const filteredNews = news.filter(article => article.title && article.content);

  // removed redudent news with headline "[Removed]"
  const finalNews = filteredNews.filter(article => article.title !== "[Removed]");

  return (
    <div className="App">
      <h1 className="animated-title">Latest News Headlines</h1>
      <News finalNews={finalNews} />
      <Footer />
    </div>
  );
};

export default App;
