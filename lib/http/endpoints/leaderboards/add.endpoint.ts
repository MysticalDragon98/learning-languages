import { LeaderboardModel } from "../../../db/models/leaderboard.model";

export default async function add (game: string, mode: string, username: string, score: number, extraFields?: any) {
    return await LeaderboardModel.create({ game, mode, username, score, extraFields, createdAt: new Date() });
}
