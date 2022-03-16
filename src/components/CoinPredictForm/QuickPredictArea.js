import AlinkStandardButton from '../Buttons/AlinkStandardButton';

function QuickPredictArea() {
  return (
    <div>
      <div className='prose mt-5 border-t-2 border-appBlue pt-2'>
        <h4>Quick Predict - Coming Soon</h4>
      </div>
      <div className='mt-2 prose'>
        <p>This tool compares your favorite crypto projects.</p>
        <p>
          Note: one way to perform a comparison is to check new emerging crypto
          projects against established ones. Allowing you to better assess the
          new coin’s potential.
        </p>
        <AlinkStandardButton
          text={'Quick Predict'}
          href={'https://www.beta.coincora.com/quick-predict'}
          width={'w-32'}
          color={'bg-appBlue'}
        />
      </div>
    </div>
  );
}

export default QuickPredictArea;
