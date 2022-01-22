import { React } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

function ConvertBox({
  ticker,
  setConvertValue,
  coinValue,
  copiedCoinValue,
  setCopiedCoinValue,
  copiedAddress,
  setCopiedAddress,
  baseCurrency,
  setBaseCurrency,
  apiCallFail,
  setApiCallFail,
}) {
  return apiCallFail === false ? (
    <div
      style={{
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      }}
      className='p-4 my-5 rounded-xl w-[300px] sm:w-[480px]'>
      <p className='mt-3 text-left'>
        Enter the amount you want wish you support us with below.
      </p>
      <div>
        <div className='mt-5 '>
          <div className='flex gap-5 items-center'>
            <span className='text-2xl  font-bold'>
              {baseCurrency.toUpperCase()}
            </span>
            <input
              onChange={(event) => {
                setConvertValue(event.target.valueAsNumber);
              }}
              type='number'
              name='entry.1204200204'
              className='lg:w-60 xl:w-80 w-48 h-10 lg:text-xl  xl:text-2xl rounded-full textFieldGoogleForm placeholder p-5 text-center  hover:border-sky-300 focus:outline-sky-300 border-appBlue border-2'
              placeholder='Enter amount'
              required
            />
          </div>
        </div>
        <p className='mt-5 text-left'>
          Below is the <b>{ticker.toUpperCase()}</b> amount you wish to support
          us with.
        </p>
        <div className='mt-5'>
          <div className='flex gap-5 items-center'>
            <span className='text-2xl font-bold'>{ticker.toUpperCase()}</span>
            <input
              type='number'
              readOnly
              name='entry.2005307353'
              value={coinValue}
              className=' lg:w-60 xl:w-80 w-48 h-10 lg:text-xl  xl:text-2xl rounded-full textFieldGoogleForm placeholder p-5 text-center  hover:border-sky-300 focus:outline-sky-300 border-appBlue border-2'
            />
          </div>

          <div className=''>
            <CopyToClipboard
              text={coinValue}
              onCopy={() => {
                setCopiedCoinValue({ copied: true });

                setCopiedAddress({ copied: false });
              }}>
              <span className=' inline-block text-center w-32 mt-5 ml-14  text-lg p-2 rounded-md border-2 border-gray-300 shadow-md hover:bg-appBlue hover:text-white transition duration-500 ease-in-out'>
                Copy Amount
              </span>
            </CopyToClipboard>
            {copiedCoinValue.copied && !copiedAddress.copied === true && (
              <span className='ml-2 text-red-500'>copied</span>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default ConvertBox;
