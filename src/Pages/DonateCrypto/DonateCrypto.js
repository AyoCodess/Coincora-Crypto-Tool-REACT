import { React, useState } from 'react';
import StandardButton from '../../components/Buttons/StandardButton.js';
import DonateCryptoModal from './DonateCryptoModal.js';
//-qr codes
import ethQrCode from '../../assets/qr-code-images/eth-qr-code.png';
import btcQrCode from '../../assets/qr-code-images/btc-qr-code.png';
//-coin logos
import btcLogo from '../../assets/coinLogos/bitcoin-btc-logo.png';
import ethLogo from '../../assets/coinLogos/ethereum-eth-logo.png';

export default function DonateCrypto() {
  const [open, setOpen] = useState(false);
  const [coinLogo, setCoinLogo] = useState(null);
  const [ticker, setTicker] = useState(null);
  const [coinName, setCoinName] = useState(null);
  const [address, setAddress] = useState(null);
  const [qr, setQr] = useState(null);
  return (
    <>
      <div>Crypto</div>
      <StandardButton
        text={'Bitcoin'}
        onClick={() => {
          setOpen(true);
          setCoinName('Bitcoin');
          setAddress('bc1qu2s0dcys88wc4cz3lzndmzevfe6acypcsdfdlh');
          setQr(btcQrCode);
          setCoinLogo(btcLogo);
          setTicker('btc');
        }}
      />
      <StandardButton
        text={'ETH'}
        onClick={() => {
          setOpen(true);
          setCoinName(' Ethereum');
          setAddress('0xe97792bB58217ec865c7FA865CbBb0945CEE8803');
          setQr(ethQrCode);
          setCoinLogo(ethLogo);
          setTicker('eth');
        }}
      />
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
