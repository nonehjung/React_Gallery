import './SuperstarPost.css';

function SuperstarPost(props) {

    const { superstar, onBgClick } = props;

    return (


        <div className="superstar-post">
            <div className="superstar-post-bg" onClick={onBgClick} />
            <div className="superstar-post-content">
                <img src={superstar.thumbnailURL} />
                <h4>{superstar.title}</h4>
            </div>
            
        </div>

    );
}

export default SuperstarPost;