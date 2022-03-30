import CoinPredictHeading from './CoinPredictHeading';
import SectionContainer from './SectionContainer';
import YesNoToggle from './YesNoToggle.js';
import GeneralInputNoIconOnChange from './GeneralInputNoIconOnChange';
import GeneralInputDollarIconOnChange from './GeneralInputDollarIconOnChange';
import GeneralInputDollarIcon from './GeneralInputDollarIcon';
import CoinInformationDisplayOnChange from './CoinInformationDisplayOnChange';
import CoinInformationDisplay from './CoinInformationDisplay';

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
  setPredictedMarketcap,
  setCoinPredictedRBM,
  isPredicting,
  setIsPredicting,
  setData,
  data,
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
        <>
          {selectedFromDropdown &&
          selectedFromDropdown.name !== 'Select Coin' ? (
            <>
              <YesNoToggle
                text={'Do you want to make a prediction?'}
                state={isPredicting}
                setState={setIsPredicting}
                disabled={selectedFromDropdown}
                tooltip={true}
                message={'calculate your potential profit quickly.'}
              />

              {isPredicting && (
                <>
                  <CoinInformationDisplayOnChange
                    selectedFromDropdown={selectedFromDropdown}
                    data={data}
                    sign2={'%'}
                    title={`What are you predicting ${coinName}'s future price at?`}
                    message={
                      'Check the RMB list below for realistic prediction reference points.'
                    }
                    icon={'dollarIcon'}
                    inputType={'number'}
                    onChange={(e) => {
                      if (e.target.value === '') {
                        setPredictedMarketcap(0);
                        setCoinPredictedRBM(0);
                        return 0;
                      } else {
                        setPredictedPrice(e.target.valueAsNumber);
                      }
                    }}
                  />
                  <CoinInformationDisplay
                    selectedFromDropdown={selectedFromDropdown}
                    data={data}
                    title={`${coinName}'s future market cap based off your prediction.`}
                    message={
                      'Compare this figure to the RBM list below for realistic prediction reference points.'
                    }
                    icon={'dollarIcon'}
                    coinLogo={true}
                    sign={'$'}
                    value={predictedMarketcap}
                  />
                </>
              )}

              <YesNoToggle
                text={`Do you own any ${coinName}?`}
                state={doYouOwnAnyCoin}
                setState={setDoYouOwnAnyCoin}
                disabled={selectedFromDropdown}
                tooltip={true}
                message={'calculate your current profit and loss quickly.'}
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
                      <CoinInformationDisplayOnChange
                        selectedFromDropdown={selectedFromDropdown}
                        data={data}
                        sign2={null}
                        title={`Total Amount of ${coinName} you own?`}
                        message={
                          'Calculate your current profit and loss quickly.'
                        }
                        icon={null}
                        coinLogo={true}
                        inputType={'number'}
                        onChange={(e) => {
                          if (e.target.value === '') {
                            return 0;
                          } else {
                            setTotalAmountOwned(e.target.valueAsNumber);
                          }
                        }}
                      />

                      <CoinInformationDisplayOnChange
                        selectedFromDropdown={selectedFromDropdown}
                        data={data}
                        sign2={null}
                        title={`Average price you bought ${coinName} at?`}
                        message={'coming soon'}
                        coinLogo={null}
                        icon={'dollarIcon'}
                        inputType={'number'}
                        onChange={(e) => {
                          if (e.target.value === '') {
                            return 0;
                          } else {
                            setAvgPriceBought(e.target.valueAsNumber);
                          }
                        }}
                      />

                      {/* <CoinInformationDisplayOnChange
                      selectedFromDropdown={selectedFromDropdown}
                      data={data}
                      sign2={null}
                      title={`How much profit or loss have you made on ${coinName} so far?`}
                      message={'coming soon'}
                      coinLogo={null}
                      icon={'dollarIcon'}
                      inputType={'number'}
                      onChange={(e) => {
                        if (e.target.value === '') {
                          return 0;
                        } else {
                          setPreviousProfit(e.target.valueAsNumber);
                        }
                      }}
                    /> */}
                    </>
                  )}

                  <YesNoToggle
                    text={`Are you going to buy anymore ${coinName}?`}
                    state={doYouWantToBuyMoreCoin}
                    setState={setDoYouWantToBuyMoreCoin}
                  />
                </>
              )}
              {doYouWantToBuyMoreCoin && doYouOwnAnyCoin && (
                <>
                  {selectedFromDropdown && (
                    <>
                      <CoinInformationDisplayOnChange
                        selectedFromDropdown={selectedFromDropdown}
                        data={data}
                        sign2={null}
                        title={`How many units?`}
                        message={null}
                        coinLogo={true}
                        icon={null}
                        inputType={'number'}
                        onChange={(e) => {
                          if (e.target.value === '') {
                            return 0;
                          } else {
                            setBuyMore(e.target.valueAsNumber);
                          }
                        }}
                      />

                      <CoinInformationDisplayOnChange
                        selectedFromDropdown={selectedFromDropdown}
                        data={data}
                        sign2={null}
                        title={`Average price you think you will buy more ${coinName} at?`}
                        message={'coming soon'}
                        coinLogo={null}
                        icon={'dollarIcon'}
                        inputType={'number'}
                        onChange={(e) => {
                          if (e.target.value === '') {
                            return 0;
                          } else {
                            setAvgPriceBought(e.target.valueAsNumber);
                          }
                        }}
                      />
                    </>
                  )}
                </>
              )}
            </>
          ) : (
            <div className='text-black flex justify-center font-semibold text-lg text-center'>
              Please select a coin via search
            </div>
          )}
        </>
      </SectionContainer>
    </>
  );
}

export default YourPrediction;
