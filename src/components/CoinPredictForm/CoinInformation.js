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
        <GeneralInput
          message={'hey'}
          name={'Circulating Supply'}
          value={circulatingSupply}
        />
        <GeneralInputDollarIcon
          message={'hey'}
          name={'Coin Price'}
          value={currentPrice}
        />
        <GeneralInputDollarIcon
          message={'hey'}
          name={'Current Marketcap'}
          value={currentMarketCap}
        />
        <GeneralInputPercentageIcon
          message={'hey'}
          name={`${coinName}'s Current RBM`}
          value={coinCurrentRBM}
        />
      </SectionContainer>
    </>
  );
}

export default CoinInformation;
