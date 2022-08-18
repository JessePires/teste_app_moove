import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

import { csvFileName, getCSVFile } from 'src/utils/csvUtils';
import { UploadCsvService } from './upload-csv.service';

@Controller('upload-csv')
export class UploadCsvController {
  constructor(private readonly uploadCsvService: UploadCsvService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public',
        filename: csvFileName,
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    const filePath = getCSVFile();
    this.uploadCsvService.saveInDb(filePath);

    const response = {
      message: 'File uploaded successfully!',
      data: {
        originalname: file.originalname,
        filename: file.filename,
      },
    };
    return response;
  }
}
