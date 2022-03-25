import CoinPredictHeading from './CoinPredictHeading';
import SectionContainer from './SectionContainer';

function Analysis({ coinName, setData }) {
  return (
    <>
      <CoinPredictHeading
        title={'The Analysis '}
        subHeading={`This section will tell you what {coinName}'s predicted RBM could
          objectively mean, and what you need to consider to asses if your
          prediction is feasible or not.`}
        setData={setData}
        search={false}
      />
      {/* <p>{coinName}'s predicted RBM is in the 'Top 10!'</p>
        <p className=' text-appBlue font-bold'>
          Cryptos in the top 10 generally have...
        </p>
        <ol>
          <li>Fully transparent and public team</li>
          <li>
            Partnerships with other crypto projects within the top 100
            cryptos
          </li>
          <li>Fully transparent and public team</li>
          <li>Fully transparent and public team</li>
          <li>Fully transparent and public team</li>
        </ol>
        <p>
          Does {coinName} meet the above criteria? if not re-consider your
          expectations and change your numbers.
        </p> */}

      <SectionContainer>
        <div className='text-black flex justify-center font-semibold text-lg text-center'>
          Coming soon
        </div>
      </SectionContainer>
    </>
  );
}
export default Analysis;
