import React, { useEffect, useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Userapi from './component/Userapi';
const App = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch('https://api.github.com/users');

    const data = await response.json();
    setUsers(data)
    console.log(data)
  }

  useEffect(() => {
    getUsers()
  }, [])
  return (
    <>
      <h2 className="text-center">List of Github USers</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {
            users.map((CurElement, index) => {
              return (<div className="col-10 col-md-4 mt-5">
                <div className="card p-2" key={CurElement.id}>
                  <div className="d-flex align-items-center gap-2">
                    <div className="image">
                      <img src={CurElement.avatar_url} onError={(e) => {
                        e.target.src = CurElement.site_admin;
                      }} className='rounded' width="155" alt='heloo' />
                    </div>
                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 textLeft">{CurElement.login}</h4> <span className="textleft">{CurElement.type}</span>
                      <div className="mb-0 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column">
                          <span className="">Articles</span> <span className="number1">38</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="">Follower</span> <span className="number1">980</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="">Rating</span> <span className="number1">8.9</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )
            })
          }
        </div>
      </div>
      <div className="">
        <Userapi />
      </div>
    </>
  )
}

export default App
