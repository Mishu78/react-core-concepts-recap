import './post.css'
export default function Post({post}){
    const {userId,id} =post;
    return(
        <div className='post'>
            <h5>Title:</h5>
            <p><small>UserId:{userId}</small></p>
            <p><small>PostId:{id}</small></p>           
        </div>
    )
}