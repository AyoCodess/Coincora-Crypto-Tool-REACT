import { React, useState } from 'react';
import StandardButton from '../../components/Buttons/StandardButton.js';
import DonateCryptoModal from './DonateCryptoModal.js';

export default function DonateCrypto() {
  const [open, setOpen] = useState(false);
  const [coinName, setCoinName] = useState('bitcoin');
  const [address, setAddress] = useState(false);
  const [qr, setQr] = useState(false);
  return (
    <>
      <div>Crypto</div>
      <StandardButton text={'Bitcoin'} onClick={() => setOpen(true)} />
      <StandardButton text={'ETH'} onClick={() => setOpen(true)} />
      <DonateCryptoModal
        address={address}
        qr={qr}
        coinName={coinName}
        info={'now'}
        thankyouMessage={'thank you for donating'}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}
