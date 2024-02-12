import { z } from "zod";

export const RoomAISchema = z.object({
    room : z.string(),
    style : z.string(),
    materials : z.string(),
    aspect_ratio : z.string(),
})