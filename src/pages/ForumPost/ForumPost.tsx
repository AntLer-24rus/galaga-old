import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ForumPost.module.css';
import { Message } from './components/Message';
import { TOwnProps } from './components/Message/types';
import { SendMessageForm } from './components/SendMessageForm';

type TMessageData = TOwnProps & {
  id: number;
};

const fakeFetch = (postId?: string) => {
  return new Promise((resolve) => {
    if (postId !== '0') {
      setTimeout(() => {
        resolve('ok');
      }, 500);
    } else {
      throw new Error('error');
    }
  });
};

const ForumPost = () => {
  const { postId } = useParams();
  const [isPending, setIsPending] = useState(true);
  const [title, setTitle] = useState('');
  const [messages, setMessages] = useState<TMessageData[]>([]);
  const navigate = useNavigate();

  const sendMessage = (text: string) => {
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        userDisplayName: 'Pavel Born',
        date: '01.01.2022',
        text,
        commentsNumber: 10,
      },
    ]);
  };

  useEffect(() => {
    fakeFetch(postId)
      .then(() => {
        setTitle('The 4-step SEO framework that led to a 1000% increase in!');
        setMessages([
          {
            id: 1,
            userDisplayName: 'Pavel Born',
            date: '01.01.2022',
            text: 'Привет, всем! Давайте обсудим эту важную тему :)',
            commentsNumber: 10,
          },
          {
            id: 2,
            userDisplayName: 'I am',
            date: '01.01.2022',
            text: 'Я думаю вот так!',
            commentsNumber: 11,
            isMine: true,
          },
          {
            id: 3,
            userDisplayName: 'Olya Born',
            date: '01.01.2022',
            text: 'Я со всеми согласна)',
            commentsNumber: 12,
          },
        ]);
        setIsPending(false);
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        navigate('/404');
      });
  }, [navigate, postId]);

  return (
    <div className="container mx-auto flex flex-col items-center h-screen">
      {!isPending && (
        <>
          <h1 className="mt-3 text-3xl font-bold">Forum</h1>
          <div className={styles.body}>
            <h2 className={styles.title}>{title}</h2>
            {messages.map((item) => (
              <Message key={item.id} {...item} />
            ))}
          </div>
          <SendMessageForm emitSubmit={sendMessage} />
        </>
      )}
    </div>
  );
};

export default ForumPost;
