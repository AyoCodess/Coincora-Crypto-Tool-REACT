import { React, useState } from 'react';

import DonateCryptoModal from './DonateCryptoModal.js';
//-qr codes
import ethQrCode from '../../assets/qr-code-images/eth-qr-code.png';
import btcQrCode from '../../assets/qr-code-images/btc-qr-code.png';
//-coin logos
import btcLogo from '../../assets/coinLogos/bitcoin-btc-logo.png';
import ethLogo from '../../assets/coinLogos/ethereum-eth-logo.png';
import ltcLogo from '../../assets/coinLogos/litecoin-ltc-logo.png';
import usdtLogo from '../../assets/coinLogos/tether-usdt-logo.png';
import usdcLogo from '../../assets/coinLogos/usd-coin-usdc-logo.png';
import maticLogo from '../../assets/coinLogos/polygon-matic-logo.png';
import bnbLogo from '../../assets/coinLogos/binance-coin-bnb-logo.png';
import adaLogo from '../../assets/coinLogos/cardano-ada-logo.png';
import solLogo from '../../assets/coinLogos/solana-sol-logo.png';
import linkLogo from '../../assets/coinLogos/chainlink-link-logo.png';

import DonateButton from '../../components/Buttons/DonateButton.js';

export default function DonateCrypto() {
  const [open, setOpen] = useState(false);
  const [coinLogo, setCoinLogo] = useState(null);
  const [ticker, setTicker] = useState(null);
  const [coinName, setCoinName] = useState(null);
  const [address, setAddress] = useState(null);
  const [network, setNetwork] = useState(null);
  const [qr, setQr] = useState(null);

  return (
    <>
      <div className='text-3xl font-bold mt-10'>
        Support us with CryptoCurrency
      </div>
      <div className='flex flex-wrap gap-3 mt-5'>
        <DonateButton
          borderColor={'border-green-500'}
          text={'USDT'}
          textColorHover={'hover:text-green-500'}
          coinLogo={usdtLogo}
          onClick={() => {
            setOpen(true);
            setCoinName('USDT');
            setAddress('0xe97792bB58217ec865c7FA865CbBb0945CEE8803');
            setQr(ethQrCode);
            setCoinLogo(usdtLogo);
            setTicker('usdt');
            setNetwork('Tron');
          }}
        />
        <DonateButton
          borderColor={'border-blue-700'}
          text={'USDC'}
          textColorHover={'hover:text-blue-700'}
          coinLogo={usdcLogo}
          onClick={() => {
            setOpen(true);
            setCoinName('USDC');
            setAddress('0xe97792bB58217ec865c7FA865CbBb0945CEE8803');
            setQr(ethQrCode);
            setCoinLogo(usdcLogo);
            setTicker('usdc');
            setNetwork('Tron');
          }}
        />
        <DonateButton
          borderColor={'border-purple-500'}
          text={'Matic'}
          textColorHover={'hover:text-purple-500'}
          coinLogo={maticLogo}
          onClick={() => {
            setOpen(true);
            setCoinName(' Matic');
            setAddress('0xe97792bB58217ec865c7FA865CbBb0945CEE8803');
            setQr(ethQrCode);
            setCoinLogo(maticLogo);
            setTicker('matic');
            setNetwork('Polygon');
          }}
        />
        <DonateButton
          borderColor={'border-yellow-500'}
          text={'BNB'}
          textColorHover={'hover:text-yellow-500'}
          coinLogo={bnbLogo}
          onClick={() => {
            setOpen(true);
            setCoinName('Binance');
            setAddress('0xe97792bB58217ec865c7FA865CbBb0945CEE8803');
            setQr(ethQrCode);
            setCoinLogo(bnbLogo);
            setTicker('bnb');
            setNetwork('Bep20');
          }}
        />

        <DonateButton
          borderColor={'border-blue-500'}
          text={'Cardano'}
          textColorHover={'hover:text-blue-500'}
          coinLogo={adaLogo}
          onClick={() => {
            setOpen(true);
            setCoinName('Cardano');
            setAddress('0xe97792bB58217ec865c7FA865CbBb0945CEE8803');
            setQr(ethQrCode);
            setCoinLogo(adaLogo);
            setTicker('ada');
            setNetwork('Cardano');
          }}
        />
        <DonateButton
          borderColor={'border-violet-500'}
          text={'Solana'}
          textColorHover={'hover:text-violet-500'}
          coinLogo={solLogo}
          onClick={() => {
            setOpen(true);
            setCoinName('Solana');
            setAddress('0xe97792bB58217ec865c7FA865CbBb0945CEE8803');
            setQr(ethQrCode);
            setCoinLogo(solLogo);
            setTicker('sol');
            setNetwork('Solana');
          }}
        />
        <DonateButton
          borderColor={'border-sky-500'}
          text={'Link'}
          textColorHover={'hover:text-sky-500'}
          coinLogo={linkLogo}
          onClick={() => {
            setOpen(true);
            setCoinName('Link');
            setAddress('0xe97792bB58217ec865c7FA865CbBb0945CEE8803');
            setQr(ethQrCode);
            setCoinLogo(linkLogo);
            setTicker('link');
            setNetwork('Ethereum');
          }}
        />
        <DonateButton
          borderColor={'border-orange-500'}
          text={'Bitcoin'}
          textColorHover={'hover:text-orange-500'}
          coinLogo={btcLogo}
          onClick={() => {
            setOpen(true);
            setCoinName('Bitcoin');
            setAddress('bc1qu2s0dcys88wc4cz3lzndmzevfe6acypcsdfdlh');
            setQr(btcQrCode);
            setCoinLogo(btcLogo);
            setTicker('btc');
            setNetwork('Bitcoin');
          }}
        />

        <DonateButton
          borderColor={'border-gray-500'}
          text={'Ethereum'}
          textColorHover={'hover:text-gray-500'}
          coinLogo={ethLogo}
          onClick={() => {
            setOpen(true);
            setCoinName(' Ethereum');
            setAddress('0xe97792bB58217ec865c7FA865CbBb0945CEE8803');
            setQr(ethQrCode);
            setCoinLogo(ethLogo);
            setTicker('eth');
            setNetwork('Ethereum');
          }}
        />
        <DonateButton
          borderColor={'border-blue-900'}
          text={'Litecoin'}
          textColorHover={'hover:text-blue-900'}
          coinLogo={ltcLogo}
          onClick={() => {
            setOpen(true);
            setCoinName('Litecoin');
            setAddress('bc1qu2s0dcys88wc4cz3lzndmzevfe6acypcsdfdlh');
            setQr(btcQrCode);
            setCoinLogo(ltcLogo);
            setTicker('ltc');
            setNetwork('Litecoin');
          }}
        />
      </div>
      <DonateCryptoModal
        coinLogo={coinLogo}
        coinName={coinName}
        address={address}
        network={network}
        qr={qr}
        ticker={ticker}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}
