function YesNoDoYouWantToBuyMoreCoin({
  coinName,
  setDoYouWantToBuyMoreCoin,
  doYouWantToBuyMoreCoin,
}) {
  return (
    <div className='mt-4 mb-4'>
      <label className='text-base font-medium text-gray-900'>
        {`Are you going to buy any more ${coinName}?`}
      </label>
      <p className='text-sm leading-5 text-gray-500'>
        The form will update automatically
      </p>

      <fieldset className='mt-4'>
        <div className='space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10'>
          <div key={'yes'} className='flex items-center'>
            <input
              onChange={() => {
                setDoYouWantToBuyMoreCoin(true);
              }}
              id={'yesMore'}
              name='more'
              type='radio'
              className='focus:ring-appBlue h-4 w-4 text-appBlue border-gray-300'
            />
            <label
              htmlFor={'yesMore'}
              className='ml-3 block text-sm font-medium text-gray-700'>
              Yes
            </label>
          </div>
          <div key={'noMore'} className='flex items-center'>
            <input
              onChange={() => {
                setDoYouWantToBuyMoreCoin(false);
              }}
              id={'noMore'}
              name='more'
              type='radio'
              defaultChecked={doYouWantToBuyMoreCoin === false}
              className='focus:ring-appBlue h-4 w-4 text-appBlue border-gray-300'
            />
            <label
              htmlFor={'noMore'}
              className='ml-3 block text-sm font-medium text-gray-700'>
              No
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default YesNoDoYouWantToBuyMoreCoin;
