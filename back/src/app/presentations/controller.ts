import { jsonRenderer } from "../../core/utils/presentationsRenderer";

export const index = (_req: any, res: any) => res.status(200).json(jsonRenderer(res));