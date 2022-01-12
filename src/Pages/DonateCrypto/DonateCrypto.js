import { React, useState } from 'react';

import DonateCryptoModal from './DonateCryptoModal.js';
//-qr codes
import ethQrCode from '../../assets/qr-code-images/eth-qr-code.png';
import btcQrCode from '../../assets/qr-code-images/btc-qr-code.png';
//-coin logos
import btcLogo from '../../assets/coinLogos/bitcoin-btc-logo.png';
import ethLogo from '../../assets/coinLogos/ethereum-eth-logo.png';
import DonateButton from '../../components/Buttons/DonateButton.js';

export default function DonateCrypto() {
  const [open, setOpen] = useState(false);
  const [coinLogo, setCoinLogo] = useState(null);
  const [ticker, setTicker] = useState(null);
  const [coinName, setCoinName] = useState(null);
  const [address, setAddress] = useState(null);
  const [qr, setQr] = useState(null);

  return (
    <>
      <div className='text-3xl font-bold mt-10 overflow-x-hidden'>
        Support us with CryptoCurrency
      </div>
      <div className='flex flex-wrap gap-3 mt-5'>
        <DonateButton
          borderColor={'border-orange-500'}
          text={'Bitcoin'}
          coinLogo={btcLogo}
          onClick={() => {
            setOpen(true);
            setCoinName('Bitcoin');
            setAddress('bc1qu2s0dcys88wc4cz3lzndmzevfe6acypcsdfdlh');
            setQr(btcQrCode);
            setCoinLogo(btcLogo);
            setTicker('btc');
          }}
        />
        <DonateButton
          borderColor={'border-gray-500'}
          text={'Ethereum'}
          coinLogo={ethLogo}
          onClick={() => {
            setOpen(true);
            setCoinName(' Ethereum');
            setAddress('0xe97792bB58217ec865c7FA865CbBb0945CEE8803');
            setQr(ethQrCode);
            setCoinLogo(ethLogo);
            setTicker('eth');
          }}
        />
      </div>
      <DonateCryptoModal
        coinLogo={coinLogo}
        coinName={coinName}
        address={address}
        qr={qr}
        ticker={ticker}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}
