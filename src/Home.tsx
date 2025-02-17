import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "./candy-machine";
import Solana_Logo from "./imgs/solana_image.png";

const ConnectButton = styled(WalletDialogButton)`
    color: #ffffff!important; 
    background-color: #f0a418!important; 
    border-color: #BFB888!important; 
    font-weight: bolder!important;

    &:hover, &:focus {
      color: #f0a418!important; 
      background-color: #FEF9EF!important; 
      border-color: #BFB888!important; 
  } 
  .disabled, 
  .disabled:hover,
  .disabled:focus, 
  .disabled:active { 
    background-color: #FEF9EF!important; 
      border-color: #BFB888!important; 
  } 
  .badge { 
    background-color: #FEF9EF!important; 
      border-color: #BFB888!important; 
  }
  
`;

const CounterText = styled.span`
  /* background-color: #ebb31a; */
  font-size: 20px;
  color: #ec1818;
  background-color: rgb(237,231,218,0.9);

      /* Small devices (tablets, 768px and below) */
      @media (max-width: 768px) { 
        font-size: 16px;
        color: #ec1818;
        background-color: rgb(237,231,218,0.9);
      }
`; // add your styles here

const MintContainer = styled.div`
  display: none;

`; // add your styles here

const MintButton = styled(Button)`
    color: #ffffff!important; 
    background-color: #f0a418!important; 
    border-color: #BFB888!important; 
    font-weight: bolder!important;

    &:hover, &:focus {
      color: #f0a418!important; 
      background-color: #FEF9EF!important; 
      border-color: #BFB888!important; 
  } 
  .disabled, 
  .disabled:hover,
  .disabled:focus, 
  .disabled:active { 
    background-color: #FEF9EF!important; 
      border-color: #BFB888!important; 
  } 
  .badge { 
    background-color: #FEF9EF!important; 
      border-color: #BFB888!important; 
  }
`; // add your styles here

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Home = (props: HomeProps) => {
  const [api_url] = useState(process.env.REACT_APP_API_URL)
  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT
  const [isWhitelisted, SetWhitelisted] = useState(false);

  const [itemsAvailable, setItemsAvailable] = useState(0);
  const [itemsRedeemed, setItemsRedeemed] = useState(0);
  const [itemsRemaining, setItemsRemaining] = useState(0);

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const [startDate, setStartDate] = useState(new Date(props.startDate));
  // console.log(new Date(1645891200000));
  // setStartDate(startDate);

  const wallet = useAnchorWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();
  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return;

      const {
        candyMachine,
        goLiveDate,
        itemsAvailable,
        itemsRemaining,
        itemsRedeemed,
      } = await getCandyMachineState(
        wallet as anchor.Wallet,
        props.candyMachineId,
        props.connection
      );

      setItemsAvailable(itemsAvailable);
      setItemsRemaining(itemsRemaining);
      setItemsRedeemed(itemsRedeemed);

      setIsSoldOut(itemsRemaining === 0);
      console.log(goLiveDate);
      setStartDate(new Date(1645891200000));
      setCandyMachine(candyMachine);

    })();
  };

  const onMint = async () => {
    try {
      let res = await fetch(`${api_url}/whitelisted/member/${(wallet as anchor.Wallet).publicKey.toString()}`, {method: "GET"})
      const res_json = await res.json()
      const res_num = await JSON.parse(JSON.stringify(res_json)).reserve //The number  of reserves the user has left
      if(!isWhitelisted){
        throw new Error("You are not whitelisted");
      }
      if(res_num - 1 < 0){
        console.log("confirmed")
        throw new Error("Not enough reserves");
      }
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
          const to_send = await JSON.stringify({"reserve": res_num-1})
          console.log(JSON.stringify(to_send));
          await fetch(`${api_url}/whitelisted/update/${(wallet as anchor.Wallet).publicKey.toString()}/${process.env.REACT_APP_SECRET_KEY}`, {
            method: "PUT",
            headers: {
            'Content-Type': 'application/json',
            },
            body: to_send})
          console.log("Updated Reserves for user")

        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.message || "Minting failed! Please try again!";
      if (!error.message) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        } else if (error.message === "You are not whitelisted"){
          message = error.message;
        } else if (error.message === "Not enough reserves"){
          message = error.message
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
      refreshCandyMachineState();
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
        const data = await fetch(`${api_url}/whitelisted/member/${(wallet as anchor.Wallet).publicKey.toString()}`)
        if(data.status.toString() !== "404"){
          SetWhitelisted(true)
        }
        else{
          console.log("not found")
        }
      }
    })();
  }, [wallet, props.connection, api_url]);

  useEffect(refreshCandyMachineState, [
    wallet,
    props.candyMachineId,
    props.connection,
  ]);

  return (
    <main className="container-fluid home-section">
      <div className="intro-section"> 
        <h1 className="intro-header">Almighty Pharaohs Collections</h1>
        {/* <h5 className="intro-slogan">The Pharaohs are here to conquer Solana Universe.</h5> */}
        <img src={Solana_Logo} width="20%" height="20%" alt="Almighty Pharaohs Execlusive on Solana"/>
        <h4>{isSoldOut}</h4>
        {/* <h3>{isMinting}</h3> */}
        {/* <h4>{wallet}</h4> */}
        <Countdown
                  date={new Date(1645891200000)}
                  onMount={({ completed }) => completed && setIsActive(false)}
                  onComplete={() => setIsActive(true)}
                  renderer={renderCounter}
                />
              <div >
                <ul className="social-home"> 
                  <li><span className="social-icon-home"><a href="https://discord.gg/3mDYkxCA5r"><i className="bi bi-discord fa-lg"></i></a></span></li>
                  <li><span className="social-icon-home"><a href="https://twitter.com/AlmightyPharaoz"><i className="bi bi-twitter fa-lg"></i></a></span></li>
                  <li><span className="social-icon-home"><a href="https://www.instagram.com/almightypharaohs"><i className="bi bi-instagram fa-lg"></i></a></span></li>
                </ul>
              </div>
        <div className='hidden-detail'>
          {wallet && (
            <p>Wallet {shortenAddress(wallet.publicKey.toBase58() || "")}</p>
          )}

          {wallet && <p>Balance: {(balance || 0).toLocaleString()} SOL</p>}

          {wallet && <p>Total Available: {itemsAvailable}</p>}

          {wallet && <p>Redeemed: {itemsRedeemed}</p>}

          {wallet && <p>Remaining: {itemsRemaining}</p>}

        </div>

        <br/>
        <br/>
        <MintContainer>
          {!wallet ? (
            <ConnectButton size="large">Connect Wallet</ConnectButton>
          ) : (
            <MintButton
              disabled={!isWhitelisted || isSoldOut || isMinting || !isActive} //change happened here
              onClick={onMint}
              variant="contained"
            >
              {isSoldOut ? (
                "SOLD OUT"
              ) : isActive ? (
                isMinting ? (
                  <CircularProgress />
                ) : (
                  "MINT Almighty Pharaohs"
                )
              ) : (
                <Countdown
                  date={startDate}
                  onMount={({ completed }) => completed && setIsActive(true)}
                  onComplete={() => setIsActive(true)}
                  renderer={renderCounter}
                />
              )}
            </MintButton>
          )}
        </MintContainer>

        <Snackbar
          open={alertState.open}
          autoHideDuration={6000}
          onClose={() => setAlertState({ ...alertState, open: false })}
        >
          <Alert
            onClose={() => setAlertState({ ...alertState, open: false })}
            severity={alertState.severity}
          >
            {alertState.message}
          </Alert>
        </Snackbar>
      </div>
    </main>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CounterText>
      {days} days,{ hours + (days - (days ) || 0) * 24} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};

export default Home;
