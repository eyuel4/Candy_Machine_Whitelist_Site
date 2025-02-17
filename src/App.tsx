import "./App.css";
import { useMemo } from "react";

import Home from "./Home";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { createTheme, ThemeProvider } from "@material-ui/core";
import GlobalStyles from "./styles/Global";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Roadmap from "./components/Roadmap";
import Teams from "./components/Teams";
import { AppConstants } from "./common/AppConstants";
import Family from "./components/Family";
import Attributes from "./components/Attributes";
import FaqComponent from "./components/FaqComponent";

const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS!
);

const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);

const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const theme = createTheme({
    palette: {
        type: 'dark',
    },
    overrides: {
        MuiButtonBase: {
            root: {
                justifyContent: 'flex-start',
            },
        },
        MuiButton: {
            root: {
                textTransform: undefined,
                padding: '12px 16px',
            },
            startIcon: {
                marginRight: 8,
            },
            endIcon: {
                marginLeft: 8,
            },
        },
    },
});

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
        getPhantomWallet(),
        getSlopeWallet(),
        getSolflareWallet(),
        getSolletWallet({ network }),
        getSolletExtensionWallet({ network })
    ],
    []
  );

  return (
      <>
      {/* <Router>
        
          <ThemeProvider theme={theme}>
            <>
              <GlobalStyles />
              <Header/>
              <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect={true}>
                  <WalletDialogProvider>
                    <Route path="/" 
                    element={
                    <Home
                      candyMachineId={candyMachineId}
                      config={config}
                      connection={connection}
                      startDate={startDateSeed}
                      treasury={treasury}
                      txTimeout={txTimeout} />
                    }/>

                  </WalletDialogProvider>
                </WalletProvider>
              </ConnectionProvider>
              <Routes>
              <Route path="/" 
                    element={
                    <Home
                      candyMachineId={candyMachineId}
                      config={config}
                      connection={connection}
                      startDate={startDateSeed}
                      treasury={treasury}
                      txTimeout={txTimeout} />
                    }/>
              <Route path="/home" 
                    element={
                    <Home
                      candyMachineId={candyMachineId}
                      config={config}
                      connection={connection}
                      startDate={startDateSeed}
                      treasury={treasury}
                      txTimeout={txTimeout} />
              }/>
                <Route path="/about" element={<About/>} />
                <Route path="/family" element={<Family/>} />
                <Route path="/roadmap" element={<Roadmap/>} />
                <Route path="/teams" element={<Teams/>} />
                <Route path="/faqs" element={<Faq faqItems={AppConstants.FAQ}/>} />
              </Routes>

              <Footer/>
            </>
          </ThemeProvider>

      </Router> */}

        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <ConnectionProvider endpoint={endpoint}>
              <WalletProvider wallets={wallets} autoConnect={true}>
                <WalletDialogProvider>
                <Header/>
                  <Home
                    candyMachineId={candyMachineId}
                    config={config}
                    connection={connection}
                    startDate={startDateSeed}
                    treasury={treasury}
                    txTimeout={txTimeout}
                  />
                </WalletDialogProvider>
              </WalletProvider>
            </ConnectionProvider>
            <About/>
            <Family/>
            <Roadmap/>
            <Teams/>
            <FaqComponent faqItems={AppConstants.FAQ}/>
            <Attributes/>
            <Footer/>
          </>
        </ThemeProvider>
      </>
  );
};

export default App;
