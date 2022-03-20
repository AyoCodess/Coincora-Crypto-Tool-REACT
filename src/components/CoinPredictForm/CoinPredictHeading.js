import Tooltip from '../Tooltip/Tooltip';
import DropdownList from '../DropdownList/DropdownList';

function CoinPredictHeading({ title, subHeading, setData, search }) {
  return (
    <div
      className='border-2 px-4 pb-4 pt-20 gradient text-white coinShadow'
      style={{
        borderRadius: '0% 100% 0% 100% / 100% 17% 83% 0% ',
      }}>
      <div className=' flex flex-col mt-[-4rem]  px-2'>
        <div className='flex gap-6 items-center'>
          <h2 className='text-2xl'> {title}</h2>
        </div>
        <p className='text-lg mt-1 text-white '>
          <p>{subHeading}</p>
        </p>
      </div>
      {search && (
        <div className='mt-6 pl-2'>
          <div className='flex flex-col sm:items-center gap-2 sm:gap-4 sm:flex-row '>
            <Tooltip message={'hey'} title={'Coin'} />
            <DropdownList setData={setData} />
          </div>
        </div>
      )}
    </div>
  );
}

export default CoinPredictHeading;
