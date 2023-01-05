import Comp from './component/Main'
import Display from './component/Display'
import Header from './component/Header'
import { useEffect } from 'react';
import './App.css';


const object = [
  {
    iconClassName: "html-title title",
    imgSrc: "https://img.icons8.com/color/512/html-5.png",
    tittle: "HTML",
    textID: "html-textcode",
    className: "hei-wid-100P html-inp",
    codeId: "html-code display-grid padd-1rem",
  },
  {
    iconClassName: "css-title title",
    imgSrc: "https://img.icons8.com/fluency/2x/css3.png",
    tittle: "CSS",
    textID: "css-textcode",
    className: "hei-wid-100P title js-inp",
    codeId: "js-code display-grid padd-1rem",
  },
  {
    iconClassName: "js-title title",
    imgSrc: "https://img.icons8.com/color/2x/javascript.png",
    tittle: "JS",
    textID: "js-textcode",
    className: "hei-wid-100P title css-inp",
    codeId: "css-code display-grid padd-1rem",
  },
];


function App() {


  useEffect(() => {
    window.addEventListener('keyup', runCode);
    return () => window.removeEventListener('keyup', runCode);
  })


  const runCode = () => {
    const html_inp = document.querySelector('.html-inp');
    const css_inp = document.querySelector('.css-inp');
    const jss_inp = document.querySelector('.js-inp');
    const result = document.querySelector('#result');
    result.contentDocument.body.innerHTML = `<style>${css_inp.value}</style>` + html_inp.value;
    result.contentWindow.eval(jss_inp.value)
  }



  return (
    <div className='App-container'>
      <Header />
      <Display />
      {object.map((items) => {
        return (
          <Comp key={Math.random()} prop={items} />
        )
      })}
    </div >
  );
}

export default App;
