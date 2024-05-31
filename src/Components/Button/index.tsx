export const Button = ({onClick, text, light}:{onClick: ()=>void,text: string, light: boolean}) => {
  return (
    <button onClick={onClick}>
      {light ? (<p style={{fontWeight: "bold",color:"red"}}>{text}</p>)
      : (<p>{text}</p>) }
    </button>
  )
}

 