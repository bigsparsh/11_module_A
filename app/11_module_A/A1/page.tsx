const A1 = () => {
  return (
    <div className="bg-emerald-900 h-screen w-screen grid place-items-center">
      <div className="rounded-xl bg-white flex flex-col w-full max-w-1/2 p-10 justify-center items-center">
        <span className="text-emerald-900 text-sm tracking-widest">
          FILTER BY
        </span>
        <label className="text-emerald-900 text-2xl font-bold" htmlFor="sal">
          Price Range
        </label>
        <input
          type="range"
          step={25}
          list="salary"
          id="sal"
          min={0}
          max={1000}
          className="accent-emerald-500 w-full "
        />
        <datalist
          id="salary"
          className="flex"
          style={{ writingMode: "vertical-lr" }}
        >
          <option value={300}></option>
          <option value={700}></option>
        </datalist>

        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col">
            <span className="text-emerald-900 text-sm tracking-widest">
              MIN
            </span>
            <h1 className="text-emerald-900 text-3xl font-bold">$300</h1>
          </div>

          <div className="flex flex-col">
            <span className="text-emerald-900 text-sm tracking-widest text-right">
              MAX
            </span>
            <h1 className="text-emerald-900 text-3xl font-bold">$700</h1>
          </div>
        </div>

        <div className="flex text-emerald-500 gap-3">
          <div className="px-3 text-sm rounded-xl bg-emerald-100 border border-emerald-200">
            Difference: $400
          </div>
          <div className="px-3 text-sm rounded-xl bg-emerald-100 border border-emerald-200">
            40% of Range
          </div>
        </div>
      </div>
    </div>
  );
};

export default A1;
