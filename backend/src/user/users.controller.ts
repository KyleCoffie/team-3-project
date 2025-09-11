<<<<<<< HEAD
import {
  Body,
  Controller,
  UseGuards,
  Param,
  Query,
  Patch,
  Post,
  ParseIntPipe,
  DefaultValuePipe,
} from '@nestjs/common';
=======
import { Body, Controller, UseGuards, Patch, Post, Get } from '@nestjs/common';
>>>>>>> d2e94048e8728d36e6d24fc43c23638096f53ceb
import { UsersService } from './providers/users.service';
import { FirebaseAuthGuard } from '../firebase/guards/firebase-auth.guard';
import { SyncUserDto } from './dto/sync-user.dto';
import { CurrentUser } from './decorators/current-user.decorator';
import type { AuthenticatedUser } from './types';
import { PatchUserDto } from './dto/patch-user.dto';
<<<<<<< HEAD
import { GetUsersParamDto } from './dto/get-users-param.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

/**
 * Controller to handle user-related endpoints.
 */
=======
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

/** Controller to handle user-related endpoints. */
>>>>>>> d2e94048e8728d36e6d24fc43c23638096f53ceb
@UseGuards(FirebaseAuthGuard)
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

<<<<<<< HEAD
  /** Updates the current user's information in the database.
   */
  @ApiBearerAuth('firebase-auth')
  @Patch('/updateMe')
=======
  /** Updates the current user's information in the database. */
  @Patch()
>>>>>>> d2e94048e8728d36e6d24fc43c23638096f53ceb
  @ApiOperation({
    summary: 'Updates the current user',
  })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully updated.',
  })
  updateUser(@CurrentUser() user: any, @Body() body: PatchUserDto) {
    return this.usersService.updateUser(user.uid, body);
  }

<<<<<<< HEAD
  /**
   *
   * @param user
   * @param body
   * @returns
   * Syncs the authenticated user with the database.
   */
=======
  /** Syncs the authenticated user with the database. */
>>>>>>> d2e94048e8728d36e6d24fc43c23638096f53ceb
  @ApiOperation({
    summary: 'Syncs the authenticated user with the database',
  })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully synced.',
  })
  @Post('sync')
  async syncUser(
    @CurrentUser() user: AuthenticatedUser,
    @Body() body: SyncUserDto,
  ) {
    const dbUser = await this.usersService.upsertUser({
      firebaseUid: user.uid,
      email: user.email,
<<<<<<< HEAD
      displayName: user.name,
=======
>>>>>>> d2e94048e8728d36e6d24fc43c23638096f53ceb
      role: body.role === 'ADMIN' ? 'ADMIN' : 'GUEST',
    });
    return { message: 'User synced', user: dbUser };
  }

<<<<<<< HEAD
  /**
   *
   * @param user
   * @returns
   * Promotes the current user to host.
   */
  @ApiBearerAuth('firebase-auth')
=======
  /** Promotes the current user to host. */
>>>>>>> d2e94048e8728d36e6d24fc43c23638096f53ceb
  @ApiOperation({
    summary: 'Promotes the current user to host',
  })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully promoted to host.',
  })
  @Patch('promote-to-host')
  async promoteToHost(@CurrentUser() user: AuthenticatedUser) {
    const updatedUser = await this.usersService.promoteToHost(user.uid);
    return { message: 'User promoted to host', user: updatedUser };
  }
<<<<<<< HEAD
=======

  @Get('/me')
  async getMe(@CurrentUser() user: AuthenticatedUser) {
    return this.usersService.getMe(user.uid);
  }
>>>>>>> d2e94048e8728d36e6d24fc43c23638096f53ceb
}
