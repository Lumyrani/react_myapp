import { useState } from "react"

const LikeFn = () => {

    const [likes, setLike] = useState(100)
    const [liked, setLiked] = useState(true)

    const handleClick = () => {

        liked ? setLike(likes + 1) : setLike(likes - 1)
        setLiked(!liked)
    }
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
            <button className={liked ? "like-button" : "liked"} onClick={handleClick}>
                Like | {likes}
            </button>
        </>
    )
}

export default LikeFn