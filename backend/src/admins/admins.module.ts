import { Module } from '@nestjs/common';
import { AdminsController } from './admins.controller';
import { AdminsService } from './providers/admins.service';
<<<<<<< HEAD

@Module({
  controllers: [AdminsController],
  providers: [AdminsService]
=======
import { FirebaseModule } from 'src/firebase/firebase.module';
import { FirebaseAuthGuard } from 'src/firebase/guards/firebase-auth.guard';
import { RolesGuard } from 'src/firebase/guards/roles.guard';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [FirebaseModule],
  controllers: [AdminsController],
  providers: [AdminsService, PrismaService, FirebaseAuthGuard, RolesGuard],
>>>>>>> d2e94048e8728d36e6d24fc43c23638096f53ceb
})
export class AdminsModule {}
