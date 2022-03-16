import Tooltip from '../Tooltip/Tooltip';
import DropdownList from '../DropdownList/DropdownList';
import InputTextWithCheckIcon from '../InoutFields/InputTextWithCheckIcon';
import InputTextWithDollarIconReadOnly from '../InoutFields/InputTextWithDollarIconReadOnly';
import InputWithNumGrayBoxLarge from '../InoutFields/InputWithNumGrayBoxLarge';

function CoinInformation({
  setData,
  selectedFromDropdown,
  circulatingSupply,
  currentPrice,
  currentMarketCap,
  coinName,
  coinCurrentRBM,
}) {
  return (
    <>
      <div className='prose  border-t-2 border-appBlue pt-2 '>
        <h4>Coin information</h4>
        <p>Select the coin you want to forecast</p>
      </div>
      <div className='flex flex-col shadow overflow-hidden border-b border-gray-200 sm:rounded-lg '>
        <div className='flex gap-2 items-center '>
          <div className='w-[50%]  px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
            <Tooltip message={'hey'} title={'Coin'} />
          </div>
          <DropdownList setData={setData} />
        </div>
        <div className='flex gap-2 items-center'>
          <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
            <Tooltip message={'hey'} title={'Current Circulating Supply'} />
          </div>
          {selectedFromDropdown && (
            <InputTextWithCheckIcon value={circulatingSupply} sign={'%'} />
          )}
        </div>
        <div className='flex gap-2 items-center'>
          <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
            <Tooltip message={'hey'} title={' Current Price'} />
          </div>
          {selectedFromDropdown && (
            <InputTextWithDollarIconReadOnly value={currentPrice} />
          )}
        </div>
        <div className='flex gap-2 items-center'>
          <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
            <Tooltip message={'hey'} title={'  Current Market Cap'} />
          </div>
          {selectedFromDropdown && (
            <InputTextWithDollarIconReadOnly value={currentMarketCap} />
          )}
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
            <Tooltip
              message={`${coinName}'s market cap in % of Bitcoins current market cap.`}
              title={`${coinName}'s current RBM `}
            />
          </div>

          <InputWithNumGrayBoxLarge value={coinCurrentRBM} sign={'%'} />
        </div>
      </div>
    </>
  );
}

export default CoinInformation;
