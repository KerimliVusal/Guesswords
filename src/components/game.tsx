import 'bootstrap/dist/css/bootstrap.min.css';
import { Container ,Row,Col} from 'react-bootstrap';
import { word } from './words';
import { useEffect, useRef, useState } from 'react';
const Swal = require('sweetalert2')
const Game=()=>{
const [wordarray,setWordarray]=useState<any>([])
const [targtvalue,setTargtvalue]=useState<any>('')
const [timer,setTimer]=useState<number>()
const [start,setStart]=useState<boolean>(false)
const [status,setStatus]=useState<boolean>(true)
const [correct,setCorrect]=useState<number>(0)
const [correct3,setCorrect3]=useState<number>(-1)
const [correct1,setCorrect1]=useState<any>([0])
const [incorrect,setIncorrect]=useState<number>(4)
const inputref=useRef<any>()
const wordref=useRef<any>()
const colorref=useRef<any>()
const tarref=useRef<any>()
const itervalref=useRef<any>()
const xref=useRef<any>(0)
const xfref=useRef<any>(4)
const correct3ref=useRef<any>(0)


    const Randomwords=()=>{
    setCorrect1([])
    correct3ref.current=0

    const randmword:number=Math.floor(Math.random()*word.length)
    //  const newword:any=wordarray.push(word[randmword])
    const newword:any=word[randmword]
     setWordarray([newword])
     for(let i=0;i<wordarray[0].Word.split('').length;i++){
        let targ=document.querySelector<HTMLElement>(`.word${i}`)!;
        colorref.current=document.querySelector<HTMLElement>(`#game8${i}`)!;
        colorref.current.style.borderColor='rgb(75, 74, 74)'
        targ.style.display='none';
     }
    
    }
const guessword=(event:React.ChangeEvent<HTMLInputElement>)=>{
    let guessvalue=event.target.value
    setTargtvalue([...targtvalue])
    let targted=targtvalue.push(guessvalue)
         event.target.value=''
        


    for(let i=0;i< wordarray[0].Word.split('').length;i++){
        if(wordarray[0].Word[i].toLowerCase()===guessvalue){
        let targ=document.querySelector<HTMLElement>(`.word${i}`)!;
        tarref.current=document.querySelector<HTMLElement>(`#game8${i}`)!;
        targ.style.display='block';
        tarref.current.style.borderColor='green'
        // setTargtvalue('')
        inputref.current.value=''
        setStatus(false)
     if(correct3ref.current<i+1||correct3ref.current>i+1){        
        correct3ref.current=i+1;
        if(correct3ref.current===correct3){
            return}
        let cl=correct1.push(correct3ref.current)
        setCorrect1([...correct1])
    setCorrect3(correct3ref.current)

}



         if(correct1.length===wordarray[0].Word.split('').length){
            let a=0;
            a=correct+1;
            setCorrect(a)
            xref.current=correct+1
            setTimeout(()=>{
                Randomwords();
            },500)
           setTargtvalue([])
           
        }
       
       
    } 
 
  else if(wordarray[0].Word[i].toLowerCase()!==guessvalue){
    inputref.current.value=''
  setStatus(true)
  }


  
}  
if(xfref.current===0){
    Swal.fire({
        title: 'Chance is over!',
        text: `You Guess  Words ${xref.current}`,
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    
    resetbtn()
    return
}

return

}

const duration=()=>{
    let a=60
    
    if(start===true){
 itervalref.current=setInterval(()=>{
 a-=1;
 setTimer(a)
 if(a===0){
    inputref.current.disabled=true
const rsebn=document.querySelector<HTMLElement>('.nextbt')!.style.visibility='hidden'
const stbn=document.querySelector<HTMLElement>('.startbt')!.style.visibility='visible'
const rsbt=document.querySelector<HTMLElement>('.resetbt')!.style.visibility='hidden'

Swal.fire({
    title: 'Finish!',
    text: `You Guess  Words ${xref.current}`,
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })

clearInterval(itervalref.current)}
},1000)}

}   
const startbtn=()=>{
    inputref.current.disabled=false
const stbtn=document.querySelector<HTMLElement>('.startbt')!.style.visibility='hidden'
const rsbtn=document.querySelector<HTMLElement>('.resetbt')!.style.visibility='visible'
const rsebtn=document.querySelector<HTMLElement>('.nextbt')!.style.visibility='visible'
setStart(true)
Randomwords();
duration()
setCorrect(0)
setIncorrect(4)
    xref.current=0
     xfref.current=4


}
const resetbtn=()=>{
    inputref.current.disabled=true
    const stbt=document.querySelector<HTMLElement>('.startbt')!.style.visibility='visible'
    const rsb=document.querySelector<HTMLElement>('.resetbt')!.style.visibility='hidden'
    const rseb=document.querySelector<HTMLElement>('.nextbt')!.style.visibility='hidden'
    clearInterval(itervalref.current)
    setTimer(0)
    setIncorrect(4)
    setCorrect(0)
    xref.current=0
    xfref.current=4
}
useEffect(()=>{
duration();
},[start])
useEffect(()=>{
    if(status===true){
        xfref.current-=1
    }
    
},[status])
    return(<Container fluid>
        <Row lg={1} className='game1'>
            <Col lg={5} className='game2'>
                <Row lg={5} className='game3 py-4'>
                    <Col lg={10} xs ={9} sm={9} className='game4'><h3>Guess The Word </h3> <h4>Time: {timer}</h4></Col>
                    <Col lg={12} xs ={9} sm={9} className='game5'><input ref={inputref} type='text' className='wordinpt' disabled={true} onChange={(event:React.ChangeEvent<HTMLInputElement>)=>guessword(event)}/>{wordarray.map((item:any,index:number)=>`${item.Word}`.split('').map((ite:any,inde:number)=><div className='game8' key={inde} id={`game8${inde}`}><span ref={wordref} className={`word${inde}`} style={{display:'none'}} id='word'>{ite}</span></div>))}</Col>
                    <Col lg={12} className='game6'>{wordarray.map((item:any,index:number)=><h5>Hint :{item.Hint}</h5>)}</Col>
                    <Col lg={9} className='game6'><h5>Chances :{xfref.current}</h5></Col>
                    <Col lg={9} className='game7'><h5>Correct words :{correct}</h5></Col>
                    <Col lg={9} className='game9'><div className='game10'><button onClick={()=>resetbtn()} className='resetbt' style={{visibility:'hidden'}} >Reset</button><button onClick={()=>startbtn()} className='startbt'>Start</button><button onClick={()=>Randomwords()} className='nextbt' style={{visibility:'hidden'}}>Next</button></div></Col>
                     </Row>
            </Col>
        </Row>
    </Container>)
};export default Game