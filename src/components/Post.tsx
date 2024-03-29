import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, useState } from "react";

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

interface Content {
  type: 'paragraph' | 'link',
  content: string
}

interface IPost {
  author: { name: string, role: string, avatarUrl: string },
  publishedAt: Date;
  content: { type: string, content: string }[]
}

export const Post = ({ author, content, publishedAt }: IPost) => {

  const [comments, setComments] = useState([
    'Post muito legal!'
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH'h'mm", {
    locale: ptBR,
  });

  const publishedRelativeDateToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const handleCreateNewComment = (e: FormEvent) => {
    e.preventDefault();
    //const newCommentText = e.target.comment.value;
    setComments([...comments, newCommentText]);
    setNewCommentText('');
    //e.target.comment.value = '';
  }

  const handleNewCommentText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewCommentText(e.target.value);
  }

  const deleteComment = (commentToDelete: string) => {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    
    setComments(commentsWithoutDeletedOne);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedRelativeDateToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if(line.type === 'paragraph'){
            return <p key={line.content}>{line.content}</p>
          } else if(line.type === 'link'){
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          onChange={handleNewCommentText} 
          value={newCommentText} 
          name="comment" 
          placeholder="Deixe um comentário" 
          required
          />
        <footer>
          <button type="submit" disabled={newCommentText.length === 0}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
        })}
      </div>
    </article>
  )
}