import React from "react";

export default class Like extends React.Component {



    state = {
        likes: 100,
        toggle: true
    };

    addLike = () => {
        let newCount = this.state.likes + 1
        this.setState({
            likes: newCount,
            toggle: false
        })
    }
    removeLike = () => {
        let newCount = this.state.likes - 1
        this.setState({
            likes: newCount,
            toggle: true
        })
    }



    render() {

        return (
            <>

                <style>{`
                         .like-button {
                             font-size: 1rem;
                             padding: 5px 10px;
                            color:  #585858;
                         }
                        .liked {
                             font-weight: bold;
                             color: #1565c0;
                        }
                `}</style>

                <button className={this.state.toggle ? "like-button" : "liked"} onClick={this.state.toggle ? this.addLike : this.removeLike}>Like||{this.state.likes}</button>

            </>
        )
    }
}

