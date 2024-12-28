export default function UserChat({ data }) {
  return (
    <div id="user-chat" className="p-2  flex justify-end">
      <div className="border border-slate-950/50 p-2 w-[70%] md:w-[30%] bg-slate-900/20">
        <p className="text-[0.8em]">{data.content}</p>
      </div>
    </div>
  );
}
