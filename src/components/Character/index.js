export const Character = ({image, name, species, status, type})=> {
    return(
        <div>
            <img src={image} alt=""/> 
            <p>name: {name}</p>
            <p>species:{species}</p>
            <p>status:{status}</p>
            <p>type:{ type !== "" ? type: 'not type'}</p>
        </div>
    )
}