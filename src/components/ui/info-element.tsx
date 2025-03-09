export default function InfoElement({ topic }: { topic: string }) {
  return (
    <span className=" select-none uppercase bg-muted px-2 py-1 rounded-lg border border-neutral-500 block w-fit">
      {topic}
    </span>
  );
}
