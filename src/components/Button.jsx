export default function Button({ onClick, text }) {
  return (
    <button
      className="bg-stone-700 rounded-sm py-1 px-8 hover:opacity-80 w-fit"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
