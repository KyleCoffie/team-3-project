import { Test, TestingModule } from '@nestjs/testing';
<<<<<<< HEAD
import { UserController } from './users.controller';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
=======
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile();

    controller = module.get<UsersController>(UsersController);
>>>>>>> d2e94048e8728d36e6d24fc43c23638096f53ceb
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
