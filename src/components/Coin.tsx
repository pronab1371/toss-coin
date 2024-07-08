import HeadSide from "../assets/head.jpg";
import TailSide from "../assets/tail.jpg";

export const Coin = ({animation}: {animation: string}) => {
    return (
        <div className="coin" id="coin" style={{animation: `${animation}`}}>
            <div className="heads">
                <img src={HeadSide}/>
            </div>
            <div className="tails">
                <img src={TailSide}/>
            </div>
        </div>
    );
};