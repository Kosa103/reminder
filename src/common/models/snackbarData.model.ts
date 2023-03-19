export interface SnackbarData {
  active: boolean;
  message: string;
  duration: number;
  color: 'default' | 'success' | 'warning' | 'error';
}
