import { Controller, Get } from '@nestjs/common';
import { ScanService } from 'src/service/scan.service';

@Controller('/scan')
export class ScanController {
  constructor(private readonly scanService: ScanService) {}

  @Get('/healthCheck')
  healthCheck(): string {
    return this.scanService.healthCheck();
  }

  @Get('/getTransactionBlocks/admin')
  async getAdminTransactionBlocks(): Promise<any>{
    const address = '0x247ec3e1d8b26a3411d6b847e7188682a5b2b0242e6060fddd9979c96d321724';
    return await this.scanService.getAllTransactionsBlock(address)
  }

  @Get('/getTransactionBlocks/:suiWalletAddress')
  async getTransactionBlocks(): Promise<any[]> {
    const address = '0x247ec3e1d8b26a3411d6b847e7188682a5b2b0242e6060fddd9979c96d321724';
    return await this.scanService.getAllTransactionsBlock(address)
  }
}
