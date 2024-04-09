export default function Button({ onClick, text, className }) {
  return (
    <button
      className={`bg-stone-700 rounded-sm py-1 px-8 hover:opacity-80 w-fit dark:bg-stone-300 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
