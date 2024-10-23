import { useState } from "react"
const User = (props) => {

    // const arr = [1, 2];
    // const [a, b = 5, c = 10] = arr
    // console.log(a, b, c)
    console.log("kdk", props)
    const [count, setCount] = useState(0)
    const counter = () => setCount(count + 1)
    return (
        <div className="user-card">
            <h2> Name:{name}</h2>
            <h3> Location: KKK</h3>
            <h3> Contact: @lumy.com</h3>

            {count}
            <button onClick={() => setCount(count + 1)}>Counter</button>

        </div>
    )
}

export default User