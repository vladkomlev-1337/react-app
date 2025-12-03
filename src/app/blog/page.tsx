"use client";

export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { blogApi, BlogPost } from '@/lib/supabase';
import './blog.css';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    author: ''
  });
  const [submitting, setSubmitting] = useState(false);

  // Загружаем посты при загрузке страницы
  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoading(true);
    try {
      const data = await blogApi.getPosts();
      setPosts(data);
    } catch (error) {
      console.error('Ошибка загрузки постов:', error);
      alert('Не удалось загрузить посты');
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newPost.title.trim() || !newPost.content.trim()) {
      alert('Заполните заголовок и содержание');
      return;
    }
    
    setSubmitting(true);
    try {
      const createdPost = await blogApi.createPost(
        newPost.title,
        newPost.content,
        newPost.author || 'Аноним'
      );
      
      if (createdPost) {
        // Добавляем новый пост в начало списка
        setPosts([createdPost, ...posts]);
        setNewPost({ title: '', content: '', author: '' });
        alert('Пост успешно опубликован!');
      }
    } catch (error) {
      console.error('Ошибка создания поста:', error);
      alert('Не удалось создать пост');
    }
    setSubmitting(false);
  };

  const handleLike = async (postId: number) => {  // Должно быть number!
  try {
    const updatedPost = await blogApi.likePost(postId);
    if (updatedPost) {
      setPosts(posts.map(post => 
        post.id === postId  // Теперь оба number
          ? { ...post, likes_count: updatedPost.likes_count }
          : post
      ));
    }
  } catch (error) {
    console.error('Ошибка лайка:', error);
  }
};

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    
    <div className="blog-container">
      <header className="blog-header">
  <div className="header-content">
    <h1>📝 Блог сообщества</h1>
    <p>Делитесь мыслями, читайте других, общайтесь!</p>
  </div>
  <Link href="/" className="home-button">
    ← На главную
  </Link>
</header>

      <div className="blog-content">
        {/* Левая колонка - форма создания поста */}
        <div className="create-post-section">
          <h2>✍️ Создать новый пост</h2>
          <form onSubmit={handleSubmit} className="post-form">
            <div className="form-group">
              <label htmlFor="title">Заголовок</label>
              <input
                id="title"
                type="text"
                placeholder="О чем будет пост?"
                value={newPost.title}
                onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="author">Ваше имя (необязательно)</label>
              <input
                id="author"
                type="text"
                placeholder="Как к вам обращаться?"
                value={newPost.author}
                onChange={(e) => setNewPost({...newPost, author: e.target.value})}
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="content">Содержание</label>
              <textarea
                id="content"
                placeholder="Поделитесь своими мыслями..."
                value={newPost.content}
                onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                className="form-textarea"
                rows={5}
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="submit-button"
              disabled={submitting}
            >
              {submitting ? 'Публикация...' : '📤 Опубликовать пост'}
            </button>
          </form>
          
          <div className="refresh-section">
            <button onClick={loadPosts} className="refresh-button">
              🔄 Обновить ленту
            </button>
            <p className="post-count">
              Всего постов: {posts.length}
            </p>
          </div>
        </div>

        {/* Правая колонка - лента постов */}
        <div className="posts-section">
          <div className="section-header">
            <h2>📰 Последние посты</h2>
            {loading && <span className="loading-indicator">Загрузка...</span>}
          </div>
          
          {loading ? (
            <div className="loading-posts">
              <div className="spinner"></div>
              <p>Загружаем посты...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="empty-state">
              <p>😴 Пока нет постов. Будьте первым!</p>
            </div>
          ) : (
            <div className="posts-list">
              {posts.map((post) => (
                <article key={post.id} className="post-card">
                  <div className="post-header">
                    <h3 className="post-title">{post.title}</h3>
                    <button 
                      onClick={() => handleLike(post.id)}
                      className="like-button"
                      title="Поставить лайк"
                    >
                      ❤️ {post.likes_count}
                    </button>
                  </div>
                  
                  <div className="post-meta">
                    <span className="post-author">
                      👤 {post.author_name || 'Аноним'}
                    </span>
                    <span className="post-date">
                      📅 {formatDate(post.created_at)}
                    </span>
                  </div>
                  
                  <div className="post-content">
                    {post.content}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      <footer className="blog-footer">
        <p>© {new Date().getFullYear()} Блог сообщества • Все посты хранятся в Supabase</p>
        <p className="tech-info">
          Технологии: Next.js • TypeScript • Supabase • React
        </p>
      </footer>
    </div>
  );
}