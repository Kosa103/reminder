import { SnackbarColor } from ".";

export interface SnackbarData {
  active: boolean;
  message: string;
  duration: number;
  color: SnackbarColor;
}
