import { prisma } from '../lib/prisma';
import { userService } from './userService';

export const questService = {
  async create(data: any) {
    return prisma.quest.create({
      data: {
        title: data.title,
        type: data.type,
        reward: data.reward,
        userId: data.userId,
      },
    });
  },

  async complete(questId: string) {
    const quest = await prisma.quest.findUnique({
      where: { id: questId },
    });

    if (!quest) throw new Error('Quest not found');

    if (quest.status === 'COMPLETED') {
      throw new Error('Already completed');
    }

    // XP нэмэх
    await userService.addXp(quest.userId, quest.reward.xp);

    return prisma.quest.update({
      where: { id: questId },
      data: {
        status: 'COMPLETED',
      },
    });
  },
};
