import YesNoDoYouOwnAnyCoin from './YesNoDoYouOwnAnyCoin';
import YesNoDoYouWantToBuyMoreCoin from './YesNoDoYouWantToBuyMoreCoin';
import Tooltip from '../Tooltip/Tooltip';
import InputTextWithNoIconOnChange from '../InoutFields/InputTextWithNoIconOnChange';
import InputTextWithDollarIconOnChange from '../InoutFields/InputTextWithDollarIconOnChange';
import InputTextWithDollarIconReadOnly from '../InoutFields/InputTextWithDollarIconReadOnly';
import CoinPredictHeading from './CoinPredictHeading';
import SectionContainer from './SectionContainer';
import YesNoToggle from './YesNoToggle.js';

function YourPrediction({
  coinName,
  doYouOwnAnyCoin,
  setDoYouOwnAnyCoin,
  setDoYouWantToBuyMoreCoin,
  selectedFromDropdown,
  setTotalAmountOwned,
  setAvgPriceBought,
  setPreviousProfit,
  doYouWantToBuyMoreCoin,
  setBuyMore,
  setAvgFuturePriceBought,
  predictedPrice,
  setPredictedPrice,
  predictedMarketcap,
  setData,
}) {
  return (
    <>
      <CoinPredictHeading
        setData={setData}
        title={'Your Prediction'}
        subHeading={
          'Plug in numbers that make sense in your investing strategy.'
        }
        search={false}
      />

      <SectionContainer>
        <YesNoToggle
          text={`Do you own any ${coinName}?`}
          state={doYouOwnAnyCoin}
          setState={setDoYouOwnAnyCoin}
          otherSetState={setDoYouWantToBuyMoreCoin}
        />
      </SectionContainer>

      <div>
        <div className='flex flex-col shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
          {doYouOwnAnyCoin && (
            <div>
              <div className='flex gap-2 items-center mt-5 '>
                <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                  <Tooltip
                    message={'hey'}
                    title={`Total Amount of ${coinName} you
                              own?`}
                  />
                </div>
                {selectedFromDropdown && (
                  <InputTextWithNoIconOnChange
                    onChange={(e) => {
                      if (e.target.value === '') {
                        return 0;
                      } else {
                        setTotalAmountOwned(e.target.valueAsNumber);
                      }
                    }}
                  />
                )}
              </div>
              <div className='flex gap-2 items-center '>
                <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                  <Tooltip
                    message={'hey'}
                    title={`Average price you bought ${coinName} at?`}
                  />
                </div>
                {selectedFromDropdown && (
                  <InputTextWithDollarIconOnChange
                    onChange={(e) => {
                      if (e.target.value === '') {
                        return 0;
                      } else {
                        setAvgPriceBought(e.target.valueAsNumber);
                      }
                    }}
                  />
                )}
              </div>
              <div className='flex gap-2 items-center '>
                <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                  <Tooltip
                    message={'hey'}
                    title={`How much profit or loss have you made on ${coinName} so far?`}
                  />
                </div>
                {selectedFromDropdown && (
                  <InputTextWithDollarIconOnChange
                    onChange={(e) => {
                      if (e.target.value === '') {
                        return 0;
                      } else {
                        setPreviousProfit(e.target.valueAsNumber);
                      }
                    }}
                  />
                )}
              </div>
            </div>
          )}
          {doYouOwnAnyCoin && (
            <YesNoDoYouWantToBuyMoreCoin
              coinName={coinName}
              setDoYouWantToBuyMoreCoin={setDoYouWantToBuyMoreCoin}
              doYouWantToBuyMoreCoin={doYouWantToBuyMoreCoin}
            />
          )}
          {doYouWantToBuyMoreCoin && (
            <div>
              <div className='flex gap-2 items-center mt-4'>
                <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                  <Tooltip
                    message={'hey'}
                    title={` If you want to buy more ${coinName}, how much (Units)?`}
                  />
                </div>
                {selectedFromDropdown && (
                  <InputTextWithNoIconOnChange
                    onChange={(e) => {
                      if (e.target.value === '') {
                        return 0;
                      } else {
                        setBuyMore(e.target.valueAsNumber);
                      }
                    }}
                  />
                )}
              </div>
              <div className='flex gap-2 items-center'>
                <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                  <Tooltip
                    message={'hey'}
                    title={`Average price you think you will buy more ${coinName} at?`}
                  />
                </div>
                {selectedFromDropdown && (
                  <InputTextWithDollarIconOnChange
                    onChange={(e) => {
                      if (e.target.value === '') {
                        return 0;
                      } else {
                        setAvgFuturePriceBought(e.target.valueAsNumber);
                      }
                    }}
                  />
                )}
              </div>
            </div>
          )}
        </div>
        <div className='flex flex-col shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
          <div className='flex gap-2 items-center border-2 '>
            <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
              <Tooltip
                message={'hey'}
                title={`What are you predicting ${coinName}'s future price at?`}
              />
            </div>
            {selectedFromDropdown && (
              <InputTextWithDollarIconOnChange
                value={predictedPrice}
                onChange={(e) => {
                  if (e.target.value === '') {
                    return 0;
                  } else {
                    setPredictedPrice(e.target.valueAsNumber);
                  }
                }}
              />
            )}
          </div>
          <div className='flex gap-2 items-center'>
            <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
              <Tooltip
                message={'hey'}
                title={`${coinName}'s future market cap based off your
                          prediction`}
              />
            </div>
            {selectedFromDropdown && (
              <InputTextWithDollarIconReadOnly value={predictedMarketcap} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default YourPrediction;
