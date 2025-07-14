# Blockchain Intern - StablePay Frontend Demo

## Your Role
You are the **Blockchain Intern** working on the StablePay frontend demo. Your primary responsibility is implementing all Web3 functionality, wallet integrations, and blockchain interactions. You'll work closely with the senior developer's overall architecture.

## Project Context
StablePay is a crypto payment processing demo built with Next.js, React, Tailwind CSS, and shadcn/ui. The senior developer has defined the overall structure - you need to implement the blockchain layer.

## Your Specific Responsibilities

### 1. Wallet Connection System
- **Primary Task**: Implement wallet connection using WalletConnect and MetaMask
- **Requirements**:
  - Support both MetaMask and WalletConnect v2
  - Handle wallet detection and connection states
  - Implement proper error handling for connection failures
  - Create a reusable `useWallet` hook for state management
  - Add wallet disconnect functionality

**Key Components to Build:**
```typescript
// hooks/useWallet.ts
interface WalletState {
  isConnected: boolean;
  address: string | null;
  provider: any;
  chainId: number;
}

// components/WalletConnectButton.tsx
// components/WalletStatus.tsx
```

### 2. Ethers.js Integration
- **Primary Task**: Set up ethers.js for blockchain interactions
- **Requirements**:
  - Initialize ethers providers
  - Handle network switching (focus on mainnet/testnet)
  - Implement balance checking for USDC
  - Create transaction signing functionality
  - Handle gas estimation

**Key Utilities to Build:**
```typescript
// utils/ethers.ts
- getProvider()
- getBalance(address: string, tokenAddress: string)
- switchNetwork(chainId: number)
- signTransaction(txData: any)
```

### 3. USDC Token Integration
- **Primary Task**: Implement USDC token interactions
- **Requirements**:
  - USDC contract integration (mainnet: 0xa0b86a33e6b9d4e8d3d7a10ff1b7fb2b7c1b5c7e)
  - Balance checking functionality
  - Token approval flow
  - Transaction simulation before actual sending

**Contract Interface:**
```typescript
// contracts/USDC.ts
interface USDCContract {
  balanceOf(address: string): Promise<string>;
  transfer(to: string, amount: string): Promise<any>;
  approve(spender: string, amount: string): Promise<any>;
}
```

### 4. Mock Transaction System
- **Primary Task**: Create realistic transaction simulation
- **Requirements**:
  - Generate mock transaction hashes
  - Simulate transaction states (pending → confirmed)
  - Create transaction receipt objects
  - Handle transaction failures gracefully

**Transaction Flow:**
1. User clicks "Confirm Payment"
2. Show loading state with "Confirming transaction..."
3. Simulate 2-3 second delay
4. Show success with mock transaction hash
5. Provide link to mock block explorer

### 5. Checkout Widget Integration
- **Primary Task**: Connect blockchain functionality to checkout UI
- **Requirements**:
  - Integrate wallet connection into checkout modal
  - Handle amount validation and conversion
  - Implement payment confirmation flow
  - Show transaction status updates

**Integration Points:**
```typescript
// In checkout modal:
1. Wallet connection button
2. Balance display
3. Amount input with balance validation
4. Gas fee estimation
5. Transaction confirmation
```

## Technical Requirements

### Dependencies to Add:
```json
{
  "ethers": "^6.8.0",
  "@walletconnect/web3-provider": "^1.8.0",
  "@walletconnect/client": "^2.0.0",
  "wagmi": "^1.4.0" // Optional: for React hooks
}
```

### Environment Variables:
```
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
NEXT_PUBLIC_INFURA_API_KEY=your_infura_key
NEXT_PUBLIC_CHAIN_ID=1 // mainnet
```

### Testing Requirements:
- Test wallet connection/disconnection
- Test balance fetching
- Test transaction simulation
- Test error handling (wrong network, insufficient funds)
- Test responsive behavior on mobile

## Code Examples to Follow

### Wallet Connection Hook:
```typescript
const { connect, disconnect, isConnected, address, balance } = useWallet();
```

### Transaction Flow:
```typescript
const handlePayment = async () => {
  try {
    setLoading(true);
    const tx = await simulateTransaction({
      to: STABLEPAY_ADDRESS,
      amount: paymentAmount,
      token: 'USDC'
    });
    setTransactionHash(tx.hash);
    setSuccess(true);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};
```

## Success Criteria
- [ ] Wallet connection works with MetaMask and WalletConnect
- [ ] USDC balance displays correctly
- [ ] Transaction simulation feels realistic
- [ ] Error handling is robust
- [ ] Mobile wallet integration works
- [ ] Code is well-documented and reusable

## Important Notes
- **Focus on UX**: Make wallet connection feel seamless
- **Error Handling**: Always provide clear error messages
- **Mobile First**: Ensure wallet connection works on mobile browsers
- **Security**: Never expose private keys or sensitive data
- **Testing**: Use testnets for development, mock for demo

## Deliverables
1. Complete wallet connection system
2. USDC token integration
3. Transaction simulation system
4. Checkout widget blockchain integration
5. Comprehensive error handling
6. Documentation and examples

**Timeline**: Complete core functionality within 2-3 days, then iterate based on senior developer feedback.

---

*Remember: You're building a demo, so prioritize user experience and visual polish over complex blockchain features. Focus on making the wallet connection and payment flow feel smooth and professional.* 