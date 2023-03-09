   
    export function CardComponents(props) {
      
        return(
        
            <div className="card">
                <img src = {props.User.image} style={{width:'100px', height:'100px'}}/>
                <span className="des">{props.User.designation}</span>
                <span className="name">{props.User.name}</span>
                <p>{props.User.description}</p>
            </div>
            
        )
        
    }
