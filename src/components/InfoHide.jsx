function InfoHide({value, lib_value, hidden, onShowInfo}) {

  return (
    <button onClick={onShowInfo} className={`min-w-3/4 mx-auto my-2 px-4 py-1 text-sm ${hidden ? 'bg-teal-600 text-white' : 'border-teal-400 text-teal-600 cursor-default'} font-semibold rounded-full border`}>
      {hidden ? lib_value : value}
    </button>
  );
}

export default InfoHide;