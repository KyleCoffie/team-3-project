import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

/** Data Transfer Object for updating user information. */
export class PatchUserDto {
<<<<<<< HEAD

=======
>>>>>>> d2e94048e8728d36e6d24fc43c23638096f53ceb
  /**
   * First name of the user.
   */
  @ApiProperty({
    description: 'First name of the user',
    example: 'John',
  })
  @IsString()
<<<<<<< HEAD
  @MinLength(3)
  @MaxLength(96)
  firstName: string;
  
=======
  @IsOptional()
  @MinLength(3)
  @MaxLength(96)
  firstName: string;

>>>>>>> d2e94048e8728d36e6d24fc43c23638096f53ceb
  /**
   * Last name of the user.
   */
  @ApiProperty({
    description: 'Last name of the user',
    example: 'Doe',
  })
  @IsString()
<<<<<<< HEAD
  @MinLength(3)
  @MaxLength(96)
  lastName: string;
  
=======
  @IsOptional()
  @MinLength(3)
  @MaxLength(96)
  lastName: string;

>>>>>>> d2e94048e8728d36e6d24fc43c23638096f53ceb
  /**
   * Phone number of the user (optional).
   */
  @ApiProperty({
    description: 'Phone number of the user',
    example: '(123) 456-7890',
    required: false,
  })
  @IsString()
  @IsOptional()
<<<<<<< HEAD
=======
  @IsOptional()
>>>>>>> d2e94048e8728d36e6d24fc43c23638096f53ceb
  phone?: string;
}
