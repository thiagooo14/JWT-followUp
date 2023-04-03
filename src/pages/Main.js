import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import TextComponent from '../components/TextComponent';
import './style.css'

const Main = () => {
  const [token, setToken] = useState('');
  const [decode, setDecode] = useState();
  const [string, setString] = useState('');
  const [show, setShow] = useState('')

  const changeName = (token) => {
    setToken(token)
  }

  useEffect(() => {
    try {
      setDecode(jwtDecode(token))
      setShow('visible')
    } catch (error) {
      setString('Token Invalido')
      setShow('none')
    }
  }, [token]);

  useEffect(() => {
    setString(decode);
  }, [decode]);
  
  const formatObject = () => {
    if (string) {
      return string.split(/[,{}]/)
    }
  }

  return (
    <>
      <h1>Token:</h1>
      <TextComponent changeName={changeName} />
      <h2>Decode:</h2>
      <pre className='show-code'>
        {/* {JSON.stringify(string, null, 4)} */}
        {string.name}
      {/* {string && (
        <>
          <p className={show}>{ '{' }</p>
          {formatObject().map((e, i) => (
            <p key={i} className="text-code">{e}</p>
          ))}
          <p className={show}>{'}'}</p>
        </>
        )} */}
      </pre>
    </>
  );
}

export default Main;
