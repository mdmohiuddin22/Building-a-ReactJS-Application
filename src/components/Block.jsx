
function Block({ direction }) {
  const styles = {
    up: 'translate-y-[-100px]',
    down: 'translate-y-[100px]',
    left: 'translate-x-[-100px]',
    right: 'translate-x-[100px]',
  };

  return (
    <div
      className={`w-16 h-16 bg-blue-500 absolute transform ${styles[direction]}`}
    ></div>
  );
}

export default Block;
