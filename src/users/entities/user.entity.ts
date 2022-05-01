import { ApiProperty } from '@nestjs/swagger';
// mapped 1:1 to database table
export class User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;
}
