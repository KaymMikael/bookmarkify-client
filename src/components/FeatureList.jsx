import React from "react";

const FeatureList = () => {
  return (
    <ul className="flex flex-col items-center mt-6 sm:flex-row gap-4">
      <li className="w-2/3 rounded border border-slate-600 p-3 flex flex-col items-center">
        <span className="text-4xl">🌟</span>
        <p className="text-slate-500 mt-3 dark:text-slate-300">
          Save Your Favorite Links
        </p>
      </li>
      <li className="w-2/3 rounded border border-slate-600 p-3 flex flex-col items-center">
        <span className="text-4xl">📂</span>
        <p className="text-slate-500 mt-3 dark:text-slate-300">
          Organized Categories
        </p>
      </li>
      <li className="w-2/3 rounded border border-slate-600 p-3 flex flex-col items-center">
        <span className="text-4xl">🔒</span>
        <p className="text-slate-500 mt-3 dark:text-slate-300">
          Privacy or Public Sharing
        </p>
      </li>
      <li className="w-2/3 rounded border border-slate-600 p-3 flex flex-col items-center">
        <span className="text-4xl">🔍</span>
        <p className="text-slate-500 mt-3 dark:text-slate-300">Quick Search</p>
      </li>
    </ul>
  );
};

export default FeatureList;
