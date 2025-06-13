'use client';
import {Encounter} from "../../types/api/pokeapi";

export default function Results({encounters}: {encounters: Encounter[]}) {
  return (
    <>
      <table className="border-collapse table-auto w-full text-sm">
        <thead>
        <tr>
          <th className="border-b font-medium pr-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Location</th>
          <th className="border-b font-medium pr-1 pl-8 pt-0 pb-3 text-slate-400 text-right">Version</th>
          <th className="border-b font-medium pr-4 pl-1 pt-0 pb-3 text-slate-400 text-left">Chance</th>
        </tr>
        </thead>
        <tbody className="bg-white">
        {encounters.map((encounter, index) => (
          <tr key={index}>
            <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">{encounter.location_area.name}</td>
            <td className="border-b border-slate-100 py-4 pl-8 pr-1 text-slate-500">
              {encounter.version_details.map((versionDetail, index) => (
                <div key={index} className="text-right">{versionDetail.version.name}:</div>
              ))}
            </td>
            <td className="border-b border-slate-100 p-4 pl-1 text-slate-500">
              {encounter.version_details.map((versionDetail, index) => (
                <div key={index} className="text-left">{versionDetail.max_chance}</div>
              ))}
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  );
}
