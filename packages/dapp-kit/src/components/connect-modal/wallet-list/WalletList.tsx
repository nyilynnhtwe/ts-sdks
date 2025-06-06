// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import type { WalletWithRequiredFeatures } from '@mysten/wallet-standard';

import { getWalletUniqueIdentifier } from '../../../utils/walletUtils.js';
import { SuiIcon } from '../../icons/SuiIcon.js';
import * as styles from './WalletList.css.js';
import { WalletListItem } from './WalletListItem.js';

type WalletListProps = {
	selectedWalletName?: string;
	onPlaceholderClick: () => void;
	onSelect: (wallet: WalletWithRequiredFeatures) => void;
	wallets: WalletWithRequiredFeatures[];
};

export function WalletList({
	selectedWalletName,
	onPlaceholderClick,
	onSelect,
	wallets,
}: WalletListProps) {
	return (
		<ul className={styles.container}>
			{wallets.length > 0 ? (
				wallets.map((wallet) => (
					<WalletListItem
						key={getWalletUniqueIdentifier(wallet)}
						name={wallet.name}
						icon={wallet.icon}
						isSelected={getWalletUniqueIdentifier(wallet) === selectedWalletName}
						onClick={() => onSelect(wallet)}
					/>
				))
			) : (
				<WalletListItem
					name="Sui Wallet"
					icon={<SuiIcon />}
					onClick={onPlaceholderClick}
					isSelected
				/>
			)}
		</ul>
	);
}
