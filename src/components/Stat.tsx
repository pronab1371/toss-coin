export const Stat = ({isRunning, headsCount, tailsCount}:
                         {isRunning: boolean, headsCount: number, tailsCount: number}) =>
{
    return (
        <div className="stats">
            <p id="heads-count">Heads: {isRunning ? '🖐' : headsCount}</p>
            <p id="tails-count">Tails: {isRunning ? '🖐' : tailsCount}</p>
        </div>
    );
};