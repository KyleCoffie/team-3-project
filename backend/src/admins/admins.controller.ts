import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AdminsService } from './providers/admins.service';
import { GetUsersFilter } from './dto';
import { FirebaseAuthGuard } from '../firebase/guards/firebase-auth.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

/** Controller to manage admin-related endpoints */
@UseGuards(FirebaseAuthGuard)
@ApiTags('Admins')
@Controller('admin')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  /**
   * Get all users with optional filtering
   */
  @ApiBearerAuth('firebase-auth')
  @Get('users')
  @ApiOperation({
    summary: 'Get all users',
    description: 'Retrieve all users with optional filtering by firstName, lastName, or firebaseUid',
  })
  @ApiQuery({
    name: 'firstName',
    required: false,
    description: 'Filter by first name (case insensitive)',
    type: String,
  })
  @ApiQuery({
    name: 'lastName',
    required: false,
    description: 'Filter by last name (case insensitive)',
    type: String,
  })
  @ApiQuery({
    name: 'firebaseUid',
    required: false,
    description: 'Filter by Firebase UID',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved users',
  })
  async getAllUsers(@Query() filterDto: GetUsersFilter) {
    return this.adminsService.getAllUsers(filterDto);
  }
}
