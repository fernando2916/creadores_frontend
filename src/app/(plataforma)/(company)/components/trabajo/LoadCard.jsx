

export default function LoadCard() {
  return (
    <div className="bg-slate-800 rounded-2xl flex flex-col animate-pulse">
    <div className="p-10">
      <div className="h-8 bg-slate-700 rounded mb-4"></div> {/* Simula el título */}
      <ul className="mt-2 mb-5 space-y-2">
        <li className="h-4 bg-slate-700 rounded w-3/4"></li> {/* Simula la ubicación */}
        <li className="h-4 bg-slate-700 rounded w-2/3"></li> {/* Simula el horario */}
        <li className="h-4 bg-slate-700 rounded w-1/2"></li> {/* Simula el salario */}
        <li className="h-4 bg-slate-700 rounded w-3/4"></li> {/* Simula la fecha */}
      </ul>
      <div className="h-10 bg-slate-700 rounded"></div> {/* Simula el botón */}
    </div>
  </div>
  );
};
