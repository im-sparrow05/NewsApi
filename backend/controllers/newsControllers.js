const axios = require('axios');
const NodeCache = require('node-cache');
const API_KEY = 'bf92799f61884bf881d70722bdd3cbca';

// Initialize a cache with 10 min time
const cache = new NodeCache({ stdTTL: 600 });

exports.newsController = async(req,res) => {
    try {
        // Check data catched
        const cachedData = cache.get('newsData');
        if (cachedData) {
          console.log('Cached Data recived');
          return res.json(cachedData);
        }
    
        const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`);
        if (!news.data.articles || news.data.articles.length === 0) {
            throw new Error('No news articles found');
        }
        const newsData = news.data.articles;
    
        // Cache the data
        cache.set('newsData', newsData);
        console.log('saved to cache data');
        res.json(newsData);
      } catch (err) {
        console.error('Error occured while fetching news:', err);
        res.status(500).json({ err: 'Error occured while fetching news' });
      }
}

