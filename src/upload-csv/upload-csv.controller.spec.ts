import { Test, TestingModule } from '@nestjs/testing';
import { UploadCsvController } from './upload-csv.controller';

describe('UploadCsvController', () => {
  let controller: UploadCsvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadCsvController],
    }).compile();

    controller = module.get<UploadCsvController>(UploadCsvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
