import './SuperstarItem.css';

function SuperstarItem(props) {
    
  const { superstar, onSuperstarClick } = props;

  
  return (
        <div className="superstar-item" >
          <img src={superstar.thumbnailURL} onClick={() => {onSuperstarClick(superstar)}} />
          <h4>{superstar.title}</h4>
        </div>
    );
}

export default SuperstarItem;