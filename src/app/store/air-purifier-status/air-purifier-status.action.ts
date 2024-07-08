import {createAction, props} from "@ngrx/store";
import {StatusModel} from "../../models/status.model";

export const update = createAction('[Air-Purifier-Status] Update', props<{status: StatusModel}>());
