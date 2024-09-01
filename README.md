# Ethereum to Solana Cross-Chain Transfer

This project provides a utility to transfer tokens from the Ethereum blockchain to the Solana blockchain using the `flowlinter-sdk`. It includes automated tests using Jest to ensure that the transfer process works as expected.ss

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Function_Parameters](#Function_Parameters)

## Installation

To get started, clone the repository and install the necessary dependencies:

```bash

    git clone https://github.com/Flowlinter/example-ETH-Sol_transfer
    cd example-ETH-Sol_transfer
    npm install

```

## Usage

This project contains a utility function ethereumToSolanaTransfer which handles the transfer of tokens from Ethereum to Solana. Below is an example of how to use it:

```javascript
const { CrossChainTransfer } = require("flowlinter-sdk");

const { ethereumToSolanaTransfer } = require("./transfer");

ethereumToSolanaTransfer()
  .then(() => {
    console.log("Transfer completed successfully");
  })
  .catch((error) => {
    console.error("Transfer failed:", error);
  });
```

## Testing

Automated tests are included to validate the functionality of the transfer process. The tests are written using Jest and mock the flowlinter-sdk's CrossChainTransfer class.

To run the tests, use the following command:

```bash
    npm test
```

## Function_Parameters

The ethereumToSolanaTransfer function transfers tokens using the following hardcoded parameters:

- TokenAddress: Ethereum token address to transfer.
- Amount: The amount of tokens to transfer.
- RecipientAddress: The Solana address to receive the tokens.
- TokenName: The name of the token being transferred.

### License

This project is licensed under the MIT License. See the LICENSE file for details.
