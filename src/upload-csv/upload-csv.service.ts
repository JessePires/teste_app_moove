import { Inject, Injectable } from '@nestjs/common';
import * as fs from 'fs';

import { UsersService } from 'src/users/users.service';
import { parse } from 'csv-parse';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class UploadCsvService {
  constructor(
    @Inject(UsersService)
    private readonly usersService: UsersService,
  ) {}

  async saveInDb(filePath: string) {
    fs.createReadStream(filePath)
      .pipe(parse({ delimiter: ',', from_line: 1 }))
      .on('data', async (row) => {
        const [_, name, email, phone] = row;
        const user = new CreateUserDto(name, email, phone);
        await this.usersService.create(user);
      })
      .on('end', () => console.log('Finish'));
  }
}
