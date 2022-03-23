import CoinPredictHeading from './CoinPredictHeading';
import SectionContainer from './SectionContainer';
import YesNoToggle from './YesNoToggle.js';
import GeneralInputNoIconOnChange from './GeneralInputNoIconOnChange';
import GeneralInputDollarIconOnChange from './GeneralInputDollarIconOnChange';
import GeneralInputDollarIcon from './GeneralInputDollarIcon';

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
  setPredictedPrice,
  predictedMarketcap,
  setData,
}) {
  console.log({ selectedFromDropdown });
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

      {!selectedFromDropdown && (
        <p className='mx-auto text-lg font-semibold text-center'>
          Please select a coin via the
          <br /> search to enable all features.
        </p>
      )}
      <SectionContainer>
        <GeneralInputDollarIconOnChange
          message={'hey'}
          title={`What are you predicting ${coinName}'s future price at?`}
          onChange={(e) => {
            if (e.target.value === '') {
              return 0;
            } else {
              setPredictedPrice(e.target.valueAsNumber);
            }
          }}
        />
        <GeneralInputDollarIcon
          message={'hey'}
          title={`${coinName}'s future market cap based off your
                          prediction`}
          value={predictedMarketcap}
        />
      </SectionContainer>

      <SectionContainer>
        <YesNoToggle
          text={`Do you own any ${coinName}?`}
          state={doYouOwnAnyCoin}
          setState={setDoYouOwnAnyCoin}
          disabled={selectedFromDropdown}
        />
        {!selectedFromDropdown && (
          <p className='mx-auto text-lg text-black font-semibold text-center '>
            Please select a coin via the search.
          </p>
        )}

        {doYouOwnAnyCoin && (
          <>
            {selectedFromDropdown && (
              <>
                <GeneralInputNoIconOnChange
                  title={`Total Amount of ${coinName} you own?`}
                  type={'number'}
                  message={'hey'}
                  onChange={(e) => {
                    if (e.target.value === '') {
                      return 0;
                    } else {
                      setTotalAmountOwned(e.target.valueAsNumber);
                    }
                  }}
                />
                <GeneralInputDollarIconOnChange
                  title={`Average price you bought ${coinName} at?`}
                  message={'hey'}
                  onChange={(e) => {
                    if (e.target.value === '') {
                      return 0;
                    } else {
                      setAvgPriceBought(e.target.valueAsNumber);
                    }
                  }}
                />
                <GeneralInputDollarIconOnChange
                  message={'hey'}
                  title={`How much profit or loss have you made on ${coinName} so far?`}
                  onChange={(e) => {
                    if (e.target.value === '') {
                      return 0;
                    } else {
                      setPreviousProfit(e.target.valueAsNumber);
                    }
                  }}
                />
              </>
            )}

            <YesNoToggle
              text={`Are you going to buy anymore ${coinName}?`}
              state={doYouWantToBuyMoreCoin}
              setState={setDoYouWantToBuyMoreCoin}
            />
            {!selectedFromDropdown && (
              <p className='mx-auto text-lg text-black font-semibold text-center '>
                Please select a coin via the search.
              </p>
            )}
          </>
        )}
        {doYouWantToBuyMoreCoin && doYouOwnAnyCoin && (
          <>
            {selectedFromDropdown && (
              <>
                <GeneralInputNoIconOnChange
                  message={'hey'}
                  title={` If you want to buy more ${coinName}, how much (Units)?`}
                  onChange={(e) => {
                    if (e.target.value === '') {
                      return 0;
                    } else {
                      setBuyMore(e.target.valueAsNumber);
                    }
                  }}
                />
                <GeneralInputDollarIconOnChange
                  message={'hey'}
                  title={`Average price you think you will buy more ${coinName} at?`}
                  onChange={(e) => {
                    if (e.target.value === '') {
                      return 0;
                    } else {
                      setAvgFuturePriceBought(e.target.valueAsNumber);
                    }
                  }}
                />
              </>
            )}
          </>
        )}
      </SectionContainer>
    </>
  );
}

export default YourPrediction;
