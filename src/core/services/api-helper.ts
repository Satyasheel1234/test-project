import { ApiEndpoints } from "../config/api-url";
import { environment } from "../../environments/environment";

// SERVICE DEFINITION
export interface ApiPathReturn {
  endpoint: string;
 // path: string;
  data?: object;
}


export const getMustacheReplaceString = (string: string, inputs: any): any => {
  let hasInputs = 0;
  for (const key in inputs) {
    if (inputs[key].toString().length > 0) {
      hasInputs = 1;
    }
  }

  if (hasInputs) {
    return string.replace(/{{(\w+)}}/g, (m, m1) => inputs[m1] || m);
  }
  return string.replace(/{{(\w+)}}/g, "");
};

export const dashboardSevices: ApiPathReturn = {
  endpoint: ApiEndpoints.dashboard,
  //path: ApiEndpoints.dashboard
};

