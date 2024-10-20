import {
  SafeStatus,
  WarningStatus,
  DangerStatus,
} from "@/components/custom-ui/Status";
import { TRANSLATION } from "./translation";

const STATUS_DESCRIPTION = [
  {
    StatusIcon: SafeStatus,
    statusTitle: TRANSLATION.safe_title,
    statusDescription: TRANSLATION.safe_description,
  },
  {
    StatusIcon: WarningStatus,
    statusTitle: TRANSLATION.warning_title,
    statusDescription: TRANSLATION.warning_description,
  },
  {
    StatusIcon: DangerStatus,
    statusTitle: TRANSLATION.danger_title,
    statusDescription: TRANSLATION.danger_description,
  },
];

export { STATUS_DESCRIPTION };
