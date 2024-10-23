import React from "react";
class UserClass extends React.Component {
    constructor(Props) {
        super(Props)
        console.log("constructor", this.props);
        this.state = {
            count: 0,
            count2: 2,
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "Dummy"
            }
        }

    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Lumyrani")
        const json = await data.json()

        this.setState({
            userInfo: json
        })
        console.log(json)
        console.log("componentDidMount")
    }
    render() {
        const { name, location, avatar_url } = this.state.userInfo
        console.log("render", name)
        // debugger;
        return (

            <div className="user-card">
                <h2> Name:{name}</h2>
                <img src={avatar_url} />
                <h3> Location: {location}</h3>
                <h4> Contact: @Joseph.com</h4>
                <h1>{this.state.count}</h1>
                <h1>{this.state.count2}</h1>
                <button
                    onClick={() => {

                        this.setState({
                            count: this.state.count + 1
                        })
                    }}>
                    Counter</button>
            </div>
        )
    }
}
export default UserClass;