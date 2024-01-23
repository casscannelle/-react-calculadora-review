import React, { useState, useEffect } from 'react';
import Display from '../Display';
import Button from '../Button';

const Calculator = () => {
  const [valorDisplay, setValorDisplay] = useState('');
  const [resultado, setResultado] = useState(0);
  const [acumulador, setAcumulador] = useState(0);
  const [operado, setOperado] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;

      switch (key) {
        case 'Enter':
          Operacao('=');
          break;
        case 'Backspace':
          Operacao('bs');
          break;
        case '+':
        case '-':
        case '*':
        case '/':
          addDigitoDisplay(key);
          break;
        case '.':
          addDigitoDisplay(key);
          break;
        default:
          if (/^\d$/.test(key)) {
            addDigitoDisplay(key)
          
          const valorDigitadoDisplay=valorDisplay+key
          setValorDisplay(valorDigitadoDisplay)
        }
          
        }
        
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [valorDisplay]);

  const addDigitoDisplay=(d)=>{
    if((d==='+' || d==='-' || d==='*' || d==='/') && operado){
      setOperado(false)
      setValorDisplay(resultado+d)
      return
    }
    if(operado){
      setValorDisplay(d)
      setOperado(false)
      return
    }

    const valorDigitadoDisplay=valorDisplay+d
    setValorDisplay(valorDigitadoDisplay)
  };

  const limparDisplay=()=>{
    setOperado(false)
    setValorDisplay('')
    setResultado(0)
    setAcumulador(0)
    return
  };

  const Operacao=(oper)=>{
    if(oper==='bs'){
      let vdisplay=valorDisplay
      vdisplay=vdisplay.substring(0,(vdisplay.length-1))
      setValorDisplay(vdisplay)
      setOperado(false)
      return
    }
    try{
      const r=eval(valorDisplay)
      setAcumulador(r)
      setResultado(r)
      setOperado(true)
    }catch{
      setResultado('Erro')
    }
  };

  return (
    <>
      <div className='cssContainer'>
        <Display valor={valorDisplay} resultado={resultado} />
        <div className='cssBotoes'>
          
          <Button label='AC' onClick={limparDisplay} />
          <Button label='(' onClick={() => addDigitoDisplay('(')} />
          <Button label=')' onClick={() => addDigitoDisplay(')')} />
          <Button label='÷' onClick={() => addDigitoDisplay('/')} />
          <Button label='7' onClick={() => addDigitoDisplay('7')} />
          <Button label='8' onClick={() => addDigitoDisplay('8')} />
          <Button label='9' onClick={() => addDigitoDisplay('9')} />
          <Button label='×' onClick={() => addDigitoDisplay('*')} />
          <Button label='4' onClick={() => addDigitoDisplay('4')} />
          <Button label='5' onClick={() => addDigitoDisplay('5')} />
          <Button label='6' onClick={() => addDigitoDisplay('6')} />
          <Button label='-' onClick={() => addDigitoDisplay('-')} />
          <Button label='1' onClick={() => addDigitoDisplay('1')} />
          <Button label='2' onClick={() => addDigitoDisplay('2')} />
          <Button label='3' onClick={() => addDigitoDisplay('3')} />
          <Button label='+' onClick={() => addDigitoDisplay('+')} />
          <Button label='0' onClick={() => addDigitoDisplay('0')} />
          <Button label='.' onClick={() => addDigitoDisplay('.')} />
          <Button label='←' onClick={() => Operacao('bs')} />
          <Button label='=' onClick={() => Operacao('=')} />
          
        </div>
      </div>
    </>
  );
};

export default Calculator;