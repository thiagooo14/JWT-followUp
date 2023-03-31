import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import TextComponent from '../components/TextComponent';

// const tolken =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMn0.p5Csu2THYW5zJys2CWdbGM8GaWjpY6lOQpdLoP4D7V4';


const Main = () => {
  const [batata, setBatata] = useState('');
  const [token, setToken] = useState('');
  let decode;

  useEffect(() => {
    // setName(jwtDecode(tolken).username);
    setBatata(JSON.stringify(decode));
  }, [decode]);

  
  
  // const formatObject = (obj) => {
    //   return obj && obj.split(',')
    // }
    
    // console.log(formatObject(decode))
    
    try {
      decode = jwtDecode(token)
    } catch (error) {
      // console.error(error)
    }
  console.log(decode)
    
  const changeName = (token) => {
    setToken(token)
  }



  return (
    <>
      <TextComponent changeName={changeName} />
      <h2>token:</h2>
      <p>{batata}</p>
      {/* <p>{formatObject(batata)}</p> */}
      {/* <p>{formatObject(batata)[1]}</p>
      <p>{formatObject(batata)[2]}</p> */}
    </>
  );
}

export default Main;
