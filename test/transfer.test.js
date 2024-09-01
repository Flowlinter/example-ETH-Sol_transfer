const { CrossChainTransfer } = require('flowlinter-sdk');
const { ethereumToSolanaTransfer } = require('./transfer');

// Mock the CrossChainTransfer class
jest.mock('flowlinter-sdk');
const mockTransfer = new CrossChainTransfer();

// Mock the console.log and console.error functions
console.log = jest.fn();
console.error = jest.fn();

// Mock the transferFromEthToSolana method
mockTransfer.transferFromEthToSolana = jest.fn().mockResolvedValue();

// Import the function to be tested

describe('ethereumToSolanaTransfer', () => {
    it('should call transferFromEthToSolana with the correct parameters', async () => {
        await ethereumToSolanaTransfer();

        expect(mockTransfer.transferFromEthToSolana).toHaveBeenCalledWith({
            tokenAddress: 'EthereumTokenAddress',
            amount: '100',
            recipientAddress: 'SolanaRecipientAddress',
            tokenName: 'USDC'
        });
    });

    it('should log a success message when the transfer is completed successfully', async () => {
        await ethereumToSolanaTransfer();

        expect(console.log).toHaveBeenCalledWith('Transfer from Ethereum to Solana completed successfully');
    });

    it('should log an error message when the transfer fails', async () => {
        const error = new Error('Transfer failed');
        mockTransfer.transferFromEthToSolana.mockRejectedValue(error);

        await ethereumToSolanaTransfer();

        expect(console.error).toHaveBeenCalledWith('Transfer failed:', error);
    });
});