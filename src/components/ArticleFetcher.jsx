import { useEffect, useState } from 'react';
import ShareArticle from './ShareArticle';

const ArticleFetcher = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://enterprise.gridaly.com/frontend/articles.json');
        const data = await response.json();
        
        const randomArticle = data[Math.floor(Math.random() * data.length)];
        setArticle(randomArticle);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!article) return <p>No articles found.</p>;

  return (
      <ShareArticle url={article.url} />
  );
};

export default ArticleFetcher;
