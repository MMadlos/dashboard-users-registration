export default function Card({ title = "title", data = "3", className }) {
  return (
    <article
      className={`border border-stone-700 bg-stone-800 rounded p-4 flex flex-col gap-2 dark:bg-stone-300 dark:border-stone-400/50`}
    >
      <h3 className="text-sm text-stone-500 ">{title}</h3>
      <p className={` dark:text-stone-600 ${className}`}>{data}</p>
    </article>
  );
}
