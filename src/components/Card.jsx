export default function Card({ title = "title", data = "3", className = "" }) {
  return (
    <article
      className={`border border-stone-700 bg-stone-800 rounded p-4 flex flex-col gap-2 dark:bg-stone-300  ${className}`}
    >
      <h3 className="text-sm text-stone-500 ">{title}</h3>
      <p className="text-2xl sm:text-4xl dark:text-stone-600">{data}</p>
    </article>
  );
}
