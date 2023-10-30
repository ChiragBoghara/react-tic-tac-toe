

export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => {
        const { row, col } = turn.square;
        const player = turn.player;
        //string literal
        return <li key={`${row},${col}`}>{player} selected {row},{col}</li>;
      })}
    </ol>
  );
}
