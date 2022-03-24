import Tooltip from '../Tooltip/Tooltip';
import DropdownList from '../DropdownList/DropdownList';
import InputTextWithCheckIcon from '../InoutFields/InputTextWithCheckIcon';
import InputTextWithDollarIconReadOnly from '../InoutFields/InputTextWithDollarIconReadOnly';
import InputWithNumGrayBoxLarge from '../InoutFields/InputWithNumGrayBoxLarge';
import AlinkStandardButton from '../Buttons/AlinkStandardButton';
import '../CoinPredictForm/CoinPredict.scss';
import CoinLogoDisplay from './CoinLogoDisplay';
import GeneralInput from './GeneralInput';
import GeneralInputDollarIcon from './GeneralInputDollarIcon';
import GeneralInputPercentageIcon from './GeneralInputPercentageIcon';
import CoinPredictHeading from './CoinPredictHeading';
import SectionContainer from './SectionContainer';
import { height } from '@mui/system';
import CoinInformationDisplay from './CoinInformationDisplay';

function CoinInformation({
  setData,
  data,
  selectedFromDropdown,
  circulatingSupply,
  currentPrice,
  currentMarketCap,
  coinName,
  coinCurrentRBM,
}) {
  return (
    <>
      <CoinPredictHeading
        setData={setData}
        title={'Coin Information'}
        subHeading={'Select the coin you want to forecast.'}
        search={true}
      />

      {/* <div className=' border-t-2 border-appBlue pt-2 '></div> */}

      <SectionContainer>
        {selectedFromDropdown && selectedFromDropdown.name !== 'Select Coin' ? (
          <>
            <CoinInformationDisplay
              selectedFromDropdown={selectedFromDropdown}
              data={data}
              value={circulatingSupply}
              sign={null}
              title={'Circulating Supply'}
              message={'hey'}
              coinLogo={true}
            />
            <CoinInformationDisplay
              selectedFromDropdown={selectedFromDropdown}
              data={data}
              value={currentPrice}
              sign={null}
              title={'Current Price'}
              message={'hey'}
              coinLogo={true}
            />
            <CoinInformationDisplay
              selectedFromDropdown={selectedFromDropdown}
              data={data}
              value={currentMarketCap}
              sign={'$'}
              title={'Current Marketcap'}
              message={'hey'}
              coinLogo={true}
            />
            <CoinInformationDisplay
              selectedFromDropdown={selectedFromDropdown}
              data={data}
              value={coinCurrentRBM}
              sign2={'%'}
              title={`${coinName}'s Current RBM`}
              message={'hey'}
              coinLogo={true}
            />
          </>
        ) : (
          <div className='text-black flex justify-center font-semibold text-lg text-center'>
            Please select a coin via the <br />
            search to enable all features.
          </div>
        )}
      </SectionContainer>
    </>
  );
}

export default CoinInformation;
