import sadFace from "./descarga.png" 

const Message = props => {

    return (
        <div className="message"> 
            <img src={sadFace} alt="sad-face" style={{width:"300px"}} />
            <p>{props.children}</p>
        </div>
    )
}

export default Message;
