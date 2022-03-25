import Tooltip from '../Tooltip/Tooltip';
import InputWithNumGrayBoxSmall from '../InoutFields/InputWithNumGrayBoxSmall';
import CoinPredictHeading from './CoinPredictHeading';
import SectionContainer from './SectionContainer';

function YourAssessment({
  top10CryptoRBM,
  top50CryptoRBM,
  top100CryptoRBM,
  top500CryptoRBM,
  top1000CryptoRBM,
  ethRBM,
  coinName,
  coinCurrentRBM,
  coinPredictedRBM,
  isResults,
}) {
  return (
    <>
      <CoinPredictHeading
        title={'Assessment of your prediction'}
        subHeading={'Check out your prediction assessment below'}
        setData={false}
        search={false}
      />
      <SectionContainer>
        {isResults ? (
          <>
            <div className='mt-5'>Coming soon</div>
          </>
        ) : (
          <div className='text-black flex justify-center font-semibold text-lg text-center'>
            Coming soon
          </div>
        )}
      </SectionContainer>
    </>
  );
}

export default YourAssessment;
