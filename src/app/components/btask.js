function Btask({ task }) {
  return (
    <>
      <div className="w-4/5 h-[500px] bg-slate-600 rounded-lg text-white px-14 items-center justify-center text-center flex flex-col overflow-hidden">
        <h1 className="text-amber-300 pb-10 uppercase font-bold">
          Beginning Task
        </h1>
        {task}
      </div>
    </>
  );
}

export default Btask;
