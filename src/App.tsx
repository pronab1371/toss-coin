import './App.css'

import {useState} from "react";
import {Coin} from "./components/Coin.tsx";
import {Stat} from "./components/Stat.tsx";
import {Action} from "./components/Action.tsx";

function App() {
    const [headsCount, setHeadsCount] = useState(0);
    const [tailsCount, setTailsCount] = useState(0);
    const [animation, setAnimation] = useState('');
    const [isRunning, setIsRunning] = useState(false);


    function handleOnFlip() {
        setIsRunning(true);

        setAnimation('none');
        const randomNum = Math.floor(Math.random() * 2);

        if(randomNum){
            setTimeout(function () {
                setAnimation('spin-heads 3s forwards');
            }, 100);
            setHeadsCount(c => c + 1);
        } else {
            setTimeout(function () {
                setAnimation('spin-tails 3s forwards');
            }, 100);
            setTailsCount(c => c + 1);
        }

        setTimeout(function () {
            setIsRunning(false);
        }, 3000);
    }

    function handleOnReset() {
        setAnimation('none');
        setHeadsCount(0);
        setTailsCount(0);
        setIsRunning(false);
    }

    return (
      <div className="container">
          <Coin animation={animation}/>
          <Stat isRunning={isRunning} headsCount={headsCount} tailsCount={tailsCount}/>
          <Action isRunning={isRunning} onFlip={handleOnFlip} onReset={handleOnReset}/>
      </div>
  )
}

export default App
