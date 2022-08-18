import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UploadCsvController } from './upload-csv/upload-csv.controller';
import { UploadCsvService } from './upload-csv/upload-csv.service';
import { UploadCsvModule } from './upload-csv/upload-csv.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, UploadCsvModule],
  controllers: [AppController, UploadCsvController],
  providers: [AppService, UploadCsvService],
})
export class AppModule {}
