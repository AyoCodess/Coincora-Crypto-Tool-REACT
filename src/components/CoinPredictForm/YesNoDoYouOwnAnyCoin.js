function yesNoDoYouOwnAnyCoin({
  coinName,
  setDoYouOwnAnyCoin,
  setDoYouWantToBuyMoreCoin,
  doYouOwnAnyCoin,
}) {
  return (
    <div className='mb-4 mt-4'>
      <label className='text-base font-medium text-gray-900'>
        {`Do you own any ${coinName}?`}
      </label>
      <p className='text-sm leading-5 text-gray-500'>
        The form will update automatically
      </p>
      <fieldset className='mt-4'>
        <div className='space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10'>
          <div key={'yesMore'} className='flex items-center'>
            <input
              onChange={() => {
                setDoYouOwnAnyCoin(true);
              }}
              id={'yesMore'}
              name='notification-method'
              type='radio'
              className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
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
                setDoYouOwnAnyCoin(false);
                setDoYouWantToBuyMoreCoin(false);
              }}
              id={'noMore'}
              name='notification-method'
              type='radio'
              defaultChecked={doYouOwnAnyCoin === false}
              className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
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

export default yesNoDoYouOwnAnyCoin;
