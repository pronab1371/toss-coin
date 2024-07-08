export const Action = ({isRunning, onFlip, onReset}:
                           { isRunning: boolean, onFlip: () => void, onReset: () => void }) => {

    return (
        <div className="buttons">
            <button id="reset-button" onClick={onReset}>
                🔁 Reset
            </button>
            <button id="flip-button" onClick={onFlip} disabled={isRunning}>
                🌀 Flip Coin
            </button>
        </div>
    );
};