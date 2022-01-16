import { React, useState } from 'react';

import DonateCryptoModal from './DonateCryptoModal.js';
import DonateCryptoModalStablecoin from './DonateCryptoModalStablecoin';
//-qr codes
import ethQrCode from '../../assets/qr-code-images/eth-qr-code.png';
import btcQrCode from '../../assets/qr-code-images/btc-qr-code.png';
import linkQrCode from '../../assets/qr-code-images/link-qr-code.png';
import ltcQrCode from '../../assets/qr-code-images/ltc-qr-code.png';
import usdtQrCode from '../../assets/qr-code-images/usdt-qr-code.png';
import usdcQrCode from '../../assets/qr-code-images/usdc-qr-code.png';
import bnbQrCode from '../../assets/qr-code-images/bnb-qr-code.png';
import adaQrCode from '../../assets/qr-code-images/ada-qr-code.png';
import solQrCode from '../../assets/qr-code-images/sol-qr-code.png';
import stellaQrCode from '../../assets/qr-code-images/stella-qr-code.png';
import xrpQrCode from '../../assets/qr-code-images/xrp-qr-code.png';
import maticQrCode from '../../assets/qr-code-images/matic-qr-code.png';
import vechainQrCode from '../../assets/qr-code-images/vechain-qr-code.png';
import sandboxQrCode from '../../assets/qr-code-images/sandbox-qr-code.png';
import shibQrCode from '../../assets/qr-code-images/shib-qr-code.png';
import dotQrCode from '../../assets/qr-code-images/dot-qr-code.png';
import nearQrCode from '../../assets/qr-code-images/near-qr-code.png';
import daiQrCode from '../../assets/qr-code-images/dai-qr-code.png';
import iotaQrCode from '../../assets/qr-code-images/iota-qr-code.png';
import dogeQrCode from '../../assets/qr-code-images/doge-qr-code.png';
import cosmosQrCode from '../../assets/qr-code-images/cosmos-qr-code.png';
import algoQrCode from '../../assets/qr-code-images/algo-qr-code.png';
import aaveQrCode from '../../assets/qr-code-images/aave-qr-code.png';

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
import stellaLogo from '../../assets/coinLogos/stellar-xlm-logo.png';
import xrpLogo from '../../assets/coinLogos/xrp-xrp-logo.png';
import vechainLogo from '../../assets/coinLogos/vechain-vet-logo.png';
import sandboxLogo from '../../assets/coinLogos/the-sandbox-sand-logo.png';
import shibLogo from '../../assets/coinLogos/shiba-inu-shib-logo.png';
import dotLogo from '../../assets/coinLogos/polkadot-new-dot-logo.png';
import nearLogo from '../../assets/coinLogos/near-protocol-near-logo.png';
import daiLogo from '../../assets/coinLogos/multi-collateral-dai-dai-logo.png';
import iotaLogo from '../../assets/coinLogos/iota-miota-logo.png';
import dogeLogo from '../../assets/coinLogos/dogecoin-doge-logo.png';
import cosmosLogo from '../../assets/coinLogos/cosmos-atom-logo.png';
import algoLogo from '../../assets/coinLogos/algorand-algo-logo.png';
import aaveLogo from '../../assets/coinLogos/aave-aave-logo.png';

import DonateButton from '../../components/Buttons/DonateButton.js';
import AlinkStandardButton from '../../components/Buttons/AlinkStandardButton.js';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import wallet from '../../wallet.js';
import DonateCryptoModalNoConvert from '../DonateCrypto/DonateCryptoModalNoConvert';

export default function DonateCrypto() {
  // - modal open/close
  const [open, setOpen] = useState(false);

  // - modal props
  const [coinLogo, setCoinLogo] = useState(null);
  const [ticker, setTicker] = useState(null);
  const [coinName, setCoinName] = useState(null);
  const [address, setAddress] = useState(null);
  const [network, setNetwork] = useState(null);
  const [qr, setQr] = useState(null);

  // - modal type displayed depending on button click
  const [stablecoin, setStablecoin] = useState(false);
  const [noConvert, setNoConvert] = useState(false);

  return (
    <>
      <div className='text-3xl font-bold mt-10'>
        Support us with Crypto Currency
      </div>
      <div className='text-xl  mt-5'>
        Click below and get the crypto currency <b>$</b> dollar amount you wish
        to support us with below.
      </div>
      <div className='flex flex-wrap gap-3 mt-5'>
        <DonateButton
          borderColor={'border-green-500'}
          text={'USDT'}
          textColorHover={'hover:text-green-500'}
          coinLogo={usdtLogo}
          onClick={() => {
            setStablecoin(true);
            setNoConvert(false);
            setOpen(true);
            setCoinName('USDT');
            setAddress(wallet.usdt.tron);
            setQr(usdtQrCode);
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
            setStablecoin(true);
            setNoConvert(false);
            setOpen(true);
            setCoinName('USDC');
            setAddress(wallet.usdc.tron);
            setQr(usdcQrCode);
            setCoinLogo(usdcLogo);
            setTicker('usdc');
            setNetwork('Tron');
          }}
        />

        <DonateButton
          borderColor={'border-yellow-500'}
          text={'BNB'}
          textColorHover={'hover:text-yellow-500'}
          coinLogo={bnbLogo}
          onClick={() => {
            setStablecoin(false);
            setNoConvert(false);
            setOpen(true);
            setCoinName('Binance');
            setAddress(wallet.bnb.bsc);
            setQr(bnbQrCode);
            setCoinLogo(bnbLogo);
            setTicker('bnb');
            setNetwork('BEP20');
          }}
        />

        <DonateButton
          borderColor={'border-sky-500'}
          text={'Link'}
          textColorHover={'hover:text-sky-500'}
          coinLogo={linkLogo}
          onClick={() => {
            setStablecoin(false);
            setNoConvert(false);
            setOpen(true);
            setCoinName('Link');
            setAddress(wallet.link.eth);
            setQr(linkQrCode);
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
            setStablecoin(false);
            setNoConvert(false);
            setOpen(true);
            setCoinName('Bitcoin');
            setAddress(wallet.btc.btc);
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
            setStablecoin(false);
            setNoConvert(false);
            setOpen(true);
            setCoinName('Ethereum');
            setAddress(wallet.eth.eth);
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
            setStablecoin(false);
            setNoConvert(false);
            setOpen(true);
            setCoinName('Litecoin');
            setAddress(wallet.ltc.ltc);
            setQr(ltcQrCode);
            setCoinLogo(ltcLogo);
            setTicker('ltc');
            setNetwork('Litecoin');
          }}
        />
      </div>
      <div className='text-3xl font-bold mt-10'>
        Send Crypto Currency{' '}
        <span className=' inline-block text-3xl text-appBlue border-b-4 pb-2 border-appBlue '>
          Coincora.crypto
        </span>
      </div>
      <div className='text-xl  mt-5'>
        We accept the following Crypto Currencies...
      </div>
      <div className='flex flex-wrap gap-3 mt-5'>
        <DonateButton
          borderColor={'border-green-500'}
          text={'USDT'}
          textColorHover={'hover:text-green-500'}
          coinLogo={usdtLogo}
          onClick={() => {
            setStablecoin(false);
            setNoConvert(true);
            setOpen(true);
            setCoinName('USDT');
            setAddress(wallet.usdt.tron);
            setQr(usdtQrCode);
            setCoinLogo(usdtLogo);
            setTicker('uddt');
            setNetwork('TRON');
          }}
        />
        <DonateButton
          borderColor={'border-blue-700'}
          text={'USDC'}
          textColorHover={'hover:text-blue-700'}
          coinLogo={usdcLogo}
          onClick={() => {
            setStablecoin(false);
            setNoConvert(true);
            setOpen(true);
            setCoinName('USDC');
            setAddress(wallet.usdc.tron);
            setQr(usdcQrCode);
            setCoinLogo(usdcLogo);
            setTicker('usdc');
            setNetwork('TRON');
          }}
        />
        <DonateButton
          borderColor={'border-purple-500'}
          text={'Matic'}
          textColorHover={'hover:text-purple-500'}
          coinLogo={maticLogo}
          onClick={() => {
            setStablecoin(false);
            setNoConvert(true);
            setOpen(true);
            setCoinName('Matic');
            setAddress(wallet.matic.matic);
            setQr(maticQrCode);
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
            setStablecoin(false);
            setNoConvert(true);
            setOpen(true);
            setCoinName('Binance');
            setAddress(wallet.bnb.bsc);
            setQr(bnbQrCode);
            setCoinLogo(bnbLogo);
            setTicker('bnb');
            setNetwork('BEP20');
          }}
        />
        <DonateButton
          borderColor={'border-blue-500'}
          text={'Cardano'}
          textColorHover={'hover:text-blue-500'}
          coinLogo={adaLogo}
          onClick={() => {
            setStablecoin(false);
            setNoConvert(true);
            setOpen(true);
            setCoinName('Cardano');
            setAddress(wallet.ada.ada);
            setQr(adaQrCode);
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
            setStablecoin(false);
            setNoConvert(true);
            setOpen(true);
            setCoinName('Solana');
            setAddress(wallet.solana.solana);
            setQr(solQrCode);
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
            setStablecoin(false);
            setNoConvert(true);
            setOpen(true);
            setCoinName('Link');
            setAddress(wallet.link.eth);
            setQr(linkQrCode);
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
            setStablecoin(false);
            setNoConvert(true);
            setOpen(true);
            setCoinName('Bitcoin');
            setAddress(wallet.btc.btc);
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
            setStablecoin(false);
            setNoConvert(true);
            setOpen(true);
            setCoinName('Ethereum');
            setAddress(wallet.eth.eth);
            setQr(ethQrCode);
            setCoinLogo(ethLogo);
            setTicker('ltc');
            setNetwork('Ethereum');
          }}
        />
        <DonateButton
          borderColor={'border-blue-900'}
          text={'Litecoin'}
          textColorHover={'hover:text-blue-900'}
          coinLogo={ltcLogo}
          onClick={() => {
            setStablecoin(false);
            setNoConvert(true);
            setOpen(true);
            setCoinName('Litecoin');
            setAddress(wallet.ltc.ltc);
            setQr(ltcQrCode);
            setCoinLogo(ltcLogo);
            setTicker('ltc');
            setNetwork('Litecoin');
          }}
        />
        <DonateButton
          borderColor={'border-gray-300'}
          text={'Stella'}
          textColorHover={'hover:text-gray-300'}
          coinLogo={stellaLogo}
          onClick={() => {
            setStablecoin(false);
            setNoConvert(true);
            setOpen(true);
            setCoinName('Stella');
            setAddress(wallet.stella.bsc);
            setQr(stellaQrCode);
            setCoinLogo(stellaLogo);
            setTicker('xlm');
            setNetwork('BEP20');
          }}
        />
        <DonateButton
          borderColor={'border-gray-600'}
          text={'Xrp'}
          textColorHover={'hover:text-gray-600'}
          coinLogo={xrpLogo}
          onClick={() => {
            setStablecoin(false);
            setNoConvert(true);
            setOpen(true);
            setCoinName('Xrp');
            setAddress(wallet.xrp.bsc);
            setQr(xrpQrCode);
            setCoinLogo(xrpLogo);
            setTicker('xrp');
            setNetwork('BEP20');
          }}
        />
        <DonateButton
          borderColor={'border-blue-300'}
          text={'Vechain'}
          textColorHover={'hover:text-blue-300'}
          coinLogo={vechainLogo}
          onClick={() => {
            setStablecoin(false);
            setNoConvert(true);
            setOpen(true);
            setCoinName('Vechain');
            setAddress(wallet.vet.vet);
            setQr(vechainQrCode);
            setCoinLogo(vechainLogo);
            setTicker('vet');
            setNetwork('Vechain');
          }}
        />
        <DonateButton
          borderColor={'border-sky-500'}
          text={'Sandbox'}
          textColorHover={'hover:text-sky-500'}
          coinLogo={sandboxLogo}
          onClick={() => {
            setStablecoin(false);
            setNoConvert(true);
            setOpen(true);
            setCoinName('Sandbox');
            setAddress(wallet.sandbox.eth);
            setQr(sandboxQrCode);
            setCoinLogo(sandboxLogo);
            setTicker('sand');
            setNetwork('Ethereum');
          }}
        />
        <DonateButton
          borderColor={'border-orange-800'}
          text={'Shib'}
          textColorHover={'hover:text-orange-800'}
          coinLogo={shibLogo}
          onClick={() => {
            setStablecoin(false);
            setNoConvert(true);
            setOpen(true);
            setCoinName('Shib Inu');
            setAddress(wallet.shib.eth);
            setQr(shibQrCode);
            setCoinLogo(shibLogo);
            setTicker('shib');
            setNetwork('Ethereum');
          }}
        />
        <DonateButton
          borderColor={'border-indigo-700'}
          text={'Polkadot'}
          textColorHover={'hover:text-indigo-700'}
          coinLogo={dotLogo}
          onClick={() => {
            setStablecoin(false);
            setNoConvert(true);
            setOpen(true);
            setCoinName('Polkadot');
            setAddress(wallet.polkadot.polkadot);
            setQr(dotQrCode);
            setCoinLogo(dotLogo);
            setTicker('dot');
            setNetwork('Polkadot');
          }}
        />
        <DonateButton
          borderColor={'border-blue-600'}
          text={'Near'}
          textColorHover={'hover:text-blue-600'}
          coinLogo={nearLogo}
          onClick={() => {
            setStablecoin(false);
            setNoConvert(true);
            setOpen(true);
            setCoinName('Near');
            setAddress(wallet.near.near);
            setQr(nearQrCode);
            setCoinLogo(nearLogo);
            setTicker('near');
            setNetwork('BEP20');
          }}
        />
        <DonateButton
          borderColor={'border-orange-400'}
          text={'Dai'}
          textColorHover={'hover:text-orange-400'}
          coinLogo={daiLogo}
          onClick={() => {
            setStablecoin(false);
            setNoConvert(true);
            setOpen(true);
            setCoinName('Dai');
            setAddress(wallet.dai.bsc);
            setQr(daiQrCode);
            setCoinLogo(daiLogo);
            setTicker('dai');
            setNetwork('BEP20');
          }}
        />
        <DonateButton
          borderColor={'border-stone-500'}
          text={'Iota'}
          textColorHover={'hover:text-stone-500'}
          coinLogo={iotaLogo}
          onClick={() => {
            setStablecoin(false);
            setNoConvert(true);
            setOpen(true);
            setCoinName('Iota');
            setAddress(wallet.iota.iota);
            setQr(iotaQrCode);
            setCoinLogo(iotaLogo);
            setTicker('iota');
            setNetwork('Iota');
          }}
        />
        <DonateButton
          borderColor={'border-yellow-600'}
          text={'Dogecoin'}
          textColorHover={'hover:text-yellow-600'}
          coinLogo={dogeLogo}
          onClick={() => {
            setStablecoin(false);
            setNoConvert(true);
            setOpen(true);
            setCoinName('Dogecoin');
            setAddress(wallet.doge.doge);
            setQr(dogeQrCode);
            setCoinLogo(dogeLogo);
            setTicker('doge');
            setNetwork('Dogecoin');
          }}
        />{' '}
        <DonateButton
          borderColor={'border-zinc-500'}
          text={'Cosmos'}
          textColorHover={'hover:text-zinc-500'}
          coinLogo={cosmosLogo}
          onClick={() => {
            setStablecoin(false);
            setNoConvert(true);
            setOpen(true);
            setCoinName('Cosmos');
            setAddress(wallet.cosmos.bsc);
            setQr(cosmosQrCode);
            setCoinLogo(cosmosLogo);
            setTicker('atom');
            setNetwork('BEP20');
          }}
        />
        <DonateButton
          borderColor={'border-slate-900'}
          text={'Algorand'}
          textColorHover={'hover:text-slate-900'}
          coinLogo={algoLogo}
          onClick={() => {
            setStablecoin(false);
            setNoConvert(true);
            setOpen(true);
            setCoinName('Algorand');
            setAddress(wallet.algo.algo);
            setQr(algoQrCode);
            setCoinLogo(algoLogo);
            setTicker('algo');
            setNetwork('Algorand');
          }}
        />
        <DonateButton
          borderColor={'border-violet-500'}
          text={'Aave'}
          textColorHover={'hover:text-violet-500'}
          coinLogo={aaveLogo}
          onClick={() => {
            setStablecoin(false);
            setNoConvert(true);
            setOpen(true);
            setCoinName('Aave');
            setAddress(wallet.aave.bsc);
            setQr(aaveQrCode);
            setCoinLogo(aaveLogo);
            setTicker('aave');
            setNetwork('BEP20');
          }}
        />
      </div>
      <div className='flex text-3xl font-bold mt-10 gap-2 items-center'>
        <div className=''>Quick How To Video</div>
        <FlashOnIcon style={{ fill: '#0753FF' }} />
      </div>

      <div
        className=' max-w-max rounded-md mt-5'
        style={{
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
        }}>
        <iframe
          title='How to send crypto to coincora.crypto'
          src='https://player.vimeo.com/video/665905534?h=d734b5b5a6&loop=1&byline=0&portrait=0'
          width='365'
          height='210'
          frameborder='0'
          allow='autoplay; fullscreen; picture-in-picture'
          allowfullscreen></iframe>
      </div>
      <script src='https://player.vimeo.com/api/player.js'></script>

      <div className='text-xl  mt-10'>
        View apps and wallets that support sending crypto to coincora.crypto
        <b> coincora.crypto</b>, it's as easy as sending an email!
      </div>
      <div className='mt-3'>
        <AlinkStandardButton
          href={'https://unstoppabledomains.com/apps'}
          color={'bg-appBlue'}
          text={'View Apps/Wallets'}
        />
      </div>

      <div className='mt-5'>
        <AlinkStandardButton
          href={'https://unstoppabledomains.com/?ref=242feee7bb4b439'}
          color={'bg-green-500'}
          text={'Get your own .crypto wallet!'}
        />
      </div>

      {!stablecoin && !noConvert && (
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
      )}

      {stablecoin && !noConvert && (
        <DonateCryptoModalStablecoin
          coinLogo={coinLogo}
          coinName={coinName}
          address={address}
          network={network}
          qr={qr}
          ticker={ticker}
          open={open}
          setOpen={setOpen}
        />
      )}

      {noConvert && !stablecoin && (
        <DonateCryptoModalNoConvert
          coinLogo={coinLogo}
          coinName={coinName}
          address={address}
          network={network}
          qr={qr}
          ticker={ticker}
          open={open}
          setOpen={setOpen}
        />
      )}
    </>
  );
}
