// Import the CrossChainTransfer class from the SDK
const { CrossChainTransfer } = require('flowlinter-sdk');
require('dotenv').config(); // Lode environment variables

// Initialize the CrossChainTransfer class with the private key
const privateKey = process.env.PRIVATE_KEY;

const transfer = new CrossChainTransfer(privateKey);

// Transfer from Ethereum to Solana

async function ethereumToSolanaTransfer() {
    try {
        await transfer.transferFromEthToSolana({
            tokenAddress: 'EthereumTokenAddress', // token address on Ethereum
            amount: '100',  // ( wei for Ethereum) 
            recipientAddress: 'SolanaRecipientAddress', // Solana recipient address
            tokenName: 'MyTestToken' // token name on Solana 
            
            // tokenDecimals: 18 // token decimals on Solana
            // tokenSymbol: 'MTT' // token symbol on Solana
            // solanaTokenMintAddress: 'SolanaTokenMintAddress' // token mint address on Solana

        });
        console.log('Transfer from Ethereum to Solana completed successfully');
    } catch (error) {
        console.error('Transfer failed:', error);
    }
}

ethereumToSolanaTransfer();