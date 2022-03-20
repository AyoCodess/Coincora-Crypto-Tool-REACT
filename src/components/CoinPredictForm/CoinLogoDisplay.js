function CoinLogoDisplay({ selectedFromDropdown, data, height, width }) {
  return (
    <div className='p-2 bg-white rounded-md'>
      <i>
        <span className={`flex items-center ${width}`}>
          <img
            src={
              !selectedFromDropdown ? data[0].image : selectedFromDropdown.image
            }
            alt='crypto coin logo'
            className={`flex-shrink-0 h-6 ${height} w-6 ${width} rounded-full`}
          />
        </span>
        <span className='ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'></span>
      </i>
    </div>
  );
}

export default CoinLogoDisplay;
