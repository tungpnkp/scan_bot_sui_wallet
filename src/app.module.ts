import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScanController } from './Controller/scan.controller';
import { ScanService } from './service/scan.service';

@Module({
  imports: [],
  controllers: [AppController, ScanController],
  providers: [AppService, ScanService],
}
)
export class AppModule {}
