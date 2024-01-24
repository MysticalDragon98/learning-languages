import { LeaderboardModel } from "../../../db/models/leaderboard.model";

export default async function get (game: string, mode: string, skip?: number, limit?: number) {
    return await LeaderboardModel.find({ game, mode }).sort({ score: -1 }).skip(skip).limit(limit);
}
