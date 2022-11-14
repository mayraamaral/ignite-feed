import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/mayraamaral.png',
      name: 'Mayra Amaral',
      role: 'Software Developer @ DBC Company'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio.' },
      { type: 'link', content: 'mayraamaral.me'}
    ],
    publishedAt: new Date('2022-11-13 11:20:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/mayraamaral.png',
      name: 'Mayra Amaral',
      role: 'Software Developer @ DBC Company'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Estou aprendendo React.' },
      { type: 'link', content: 'mayraamaral.me'}
    ],
    publishedAt: new Date('2022-11-06 21:20:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/mayraamaral.png',
      name: 'Mayra Amaral',
      role: 'Software Developer @ DBC Company'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Estou gostando bastante.' },
      { type: 'link', content: 'mayraamaral.me'}
    ],
    publishedAt: new Date('2022-11-01 21:20:00')
  },
]

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
