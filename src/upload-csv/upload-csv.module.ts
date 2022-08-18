import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { UsersModule } from 'src/users/users.module';
import { UploadCsvController } from './upload-csv.controller';
import { UploadCsvService } from './upload-csv.service';

@Module({
  imports: [MulterModule.register({ dest: '../public' }), UsersModule],
  controllers: [UploadCsvController],
  providers: [UploadCsvService],
})
export class UploadCsvModule {}
