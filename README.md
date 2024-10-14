# Orpheus – A Sovereign Soundscape, Empowering Every Artist

Orpheus is a Web3-powered, subscription-based music streaming platform where artists retain sovereignty over their work and receive proportional revenue based on listener engagement. Through the integration of blockchain technology and NFTs, Orpheus enables artists to earn fairly and allows listeners to support their favorite artists directly.

## Table of Contents
1. [Project Description](#project-description)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Getting Started](#getting-started)
5. [Smart Contracts](#smart-contracts)
6. [NFT Integration](#nft-integration)
7. [Contributing](#contributing)
8. [License](#license)

## Project Description
Orpheus aims to create a fair distribution of subscription revenue for artists, based on listenership metrics such as streaming time and retention rate. Artists are paid out at the end of each month in APT (Aptos) cryptocurrency directly to their MetaMask wallets, with revenue shared according to listener engagement data. Additionally, artists can mint songs as NFTs, allowing listeners to purchase exclusive rights and support them further.

## Tech Stack
- **Frontend:** Next.js, JavaScript
- **Backend:** Node.js, Express
- **Blockchain and Smart Contracts:** Aptos (Move language)
- **Payment Gateway:** Stripe
- **Data Handling:** Off-chain (Database)

## Features
### For Listeners
- **Sign Up / Login:** Users can create accounts, pay a subscription fee via Stripe, and access the platform.
- **Music Library:** Organized by artists (e.g., Ed Sheeran, Arijit Singh, Taylor Swift) and genres, with a similar look and feel to Tidal’s interface.
- **NFT Purchase:** Exclusive NFTs published by artists are available for purchase.

### For Artists
- **Dashboard:** Artists can view published songs, NFTs, and their wallet balance in APT.
- **Monthly Earnings:** At the end of each month, artists see their accumulated APT earnings based on the streaming time their songs receive.

### Backend & Revenue Distribution
- **Subscription and Revenue Distribution:** Revenue is collected from subscriptions and allocated to artists based on listenership metrics.
- **NFT Smart Contracts:** Artists mint song NFTs which listeners can buy, with the platform handling payment processing and NFT transfer.

## Getting Started

### Prerequisites
- Node.js (>= 14.x)
- Next.js (latest)
- Move CLI for Aptos smart contracts

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/username/orpheus.git
    cd orpheus
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file at the root of the project and include your keys and configuration settings:
    ```makefile
    STRIPE_SECRET_KEY=<your_stripe_key>
    APTOS_NETWORK=<aptos_network_url>
    ```

4. Run Next.js frontend:
    ```bash
    npm run dev
    ```
    Access the frontend at `http://localhost:3000`.

5. Run backend server:
    ```bash
    npm run server
    ```

## Smart Contracts Setup
1. Install Move CLI: Follow instructions from the [Aptos documentation here](https://aptos.dev/).
2. Compile and deploy smart contracts:
    ```bash
    move build
    move publish --url <aptos_node_url>
    ```

### Configure MetaMask
To enable artists to receive revenue and for listeners to interact with NFTs, it’s essential to configure MetaMask for use with the Aptos blockchain.

1. **Install MetaMask:**
    - Download and install the MetaMask extension for your browser from the official [MetaMask website](https://metamask.io/).

2. **Add the APT (Aptos) Token:**
    - In MetaMask, navigate to Settings > Assets > Import Tokens.
    - Select **Custom Token** and enter the following details:
        - **Token Contract Address:** `<APT Token Contract Address>`
        - **Token Symbol:** APT
        - **Decimals of Precision:** `<decimals>`
    - Confirm and add the token to make it visible in your wallet.

3. **Register Wallets on the Aptos Blockchain:**
    - **For Artists:**
        - During sign-up or wallet configuration, verify that their MetaMask wallet addresses are stored securely in the backend database for automated revenue distribution.
    - **For Listeners:**
        - Listeners will also connect MetaMask wallets, enabling them to purchase NFTs directly and interact with Aptos-based assets.

4. **Network Configuration (if applicable):**
    - Configure MetaMask to interact with the Aptos network node:
        - **Network Name:** Aptos (or your custom name)
        - **New RPC URL:** `<Aptos RPC URL>`
        - **Chain ID:** `<chain_id>` 

## Smart Contracts
Orpheus includes multiple Move-based smart contracts, managing the core blockchain functionality:
1. **SubscriptionManagement:** Handles listener subscriptions and routes funds to the revenue pool.
2. **RevenueDistribution:** Gathers and distributes revenue to artists at the end of each month.
3. **ArtistRegistration:** Registers artists and verifies their eligibility for receiving revenue.
4. **NFTMarketplace:** Enables artists to mint NFTs and listeners to purchase them directly.

## NFT Integration
Artists mint NFTs of their songs, allowing listeners to buy exclusive rights. Once purchased, these NFTs are transferred to the buyer's wallet, with proceeds directed to the artist.

## Contributing
We welcome contributions! Please fork the repository and submit a pull request with a detailed explanation of your changes. Make sure to test your code and follow the project’s coding style.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
