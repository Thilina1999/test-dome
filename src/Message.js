const Message = () => { 
  const [ close, setClose ] = useState(false);
  return (
    <React.Fragment>
      <a href="#" onClick={()=>{
        if(close){
          setClose(false);
        }else {
          setClose(true);
        }
      }}>Want to buy a new car?</a>
      {close ? <p>Call +11 22 33 44 now!</p> : ""}
    </React.Fragment>
  );
}