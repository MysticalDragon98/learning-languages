import { prop, getModelForClass, index, modelOptions } from '@typegoose/typegoose';

@index({ game: 1, mode: 1, score: -1 })
@modelOptions({ options: { allowMixed: 0 }})
export class Leaderboard {
    @prop() game: string;
    @prop() mode: string;
    @prop() score: number;
    @prop() username: string;
    @prop() extraFields: any;
    @prop() createdAt: Date;
}

export const LeaderboardModel = getModelForClass(Leaderboard);
