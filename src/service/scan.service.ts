import { Injectable } from '@nestjs/common';
import { getFullnodeUrl, SuiClient } from '@mysten/sui/client';

@Injectable()
export class ScanService {
    healthCheck(): string {
        return 'health check';
    }

    async getAllTransactionsBlock(suiWalletAddress: string): Promise<any>{
        const rpcUrl = getFullnodeUrl('mainnet');
        const client = new SuiClient({ url: rpcUrl });

        let owner_tx = []

        await client.queryTransactionBlocks({
            filter: {
                ToAddress: suiWalletAddress
            },
            options: {
                showBalanceChanges: true,
                showInput: true,
                showEffects: true,
                showRawEffects: true
            }
        }).then(data => {
            owner_tx = [data.data[0]]
        })
        return owner_tx
    }
}
