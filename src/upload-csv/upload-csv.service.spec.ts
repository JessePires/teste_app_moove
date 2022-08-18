import { Test, TestingModule } from '@nestjs/testing';
import { UploadCsvService } from './upload-csv.service';

describe('UploadCsvService', () => {
  let service: UploadCsvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadCsvService],
    }).compile();

    service = module.get<UploadCsvService>(UploadCsvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
