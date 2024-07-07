import React, { useEffect, useState } from 'react'

const Userapi = () => {
    const [user, setUser] = useState([])

    const userapi = async () => {
        const ApiUrl = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await ApiUrl.json();
        console.log(data)
        setUser(data);
    }

    useEffect(() => {
        userapi()
    }, [])

    return (
        <div><h2 className=''></h2>
            <div>
                <ul className="">
                    {
                        user.map((items) => {
                            return (
                                <div className="" key={items.id}>
                                    <h2>{items.title}</h2>
                                    <p>{items.body}</p>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Userapi