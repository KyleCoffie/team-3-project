<<<<<<< HEAD
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";
=======
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';
>>>>>>> d2e94048e8728d36e6d24fc43c23638096f53ceb

/**
 * Data Transfer Object for synchronizing user information.
 */
export class SyncUserDto {

<<<<<<< HEAD
    /**
     * Unique identifier for the user.
     */
    @ApiProperty({
        description: 'Unique identifier for the user',
    })
    @IsString()
    @IsOptional()
    role: string;
}

=======
  @IsString()
  @IsOptional()
  role?: string;
}
>>>>>>> d2e94048e8728d36e6d24fc43c23638096f53ceb
