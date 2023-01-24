import React from 'react';
import './App.scss'

export default class App extends React.Component {
  render() {
    return (
      <div className='app-wrapper'>
        <header className='header'>
          <img src = 'https://1000logos.net/wp-content/uploads/2022/02/Logo-Yazilim-logo-tumb.jpg'/>
        </header>
        <nav className='nav'>
          <div>
            <a> Profile </a>
          </div>

          <div>
            <a> Messahes </a>
          </div>

          <div>
            <a> News </a>
          </div>

          <div>
            <a> Music </a>
          </div>

          <div>
            <a> Settings </a>
          </div>
        </nav>
        <div className='content'>
          <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR26OBBY0pJdQ7HK9dQh1nEaVaQnnGyLudOwOdoD_znhQfVNnrGqm-O5q-GXq_DOX2zORI&usqp=CAU' />
          </div>

          <div>
            ava + desc          
          </div>

          <div>
            My post
            <div>
              new post
            </div>

            <div>
              <div>
                post 1
              </div>

              <div>
                post 2
              </div>
            </div>

          </div>


          
        </div>
      </div>
            
    )
  }
}
