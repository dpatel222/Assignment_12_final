import { string } from "prop-types";

export interface ButtonProps {
  label?: string;
  disabled?: boolean;
  "data-testid"?: string;
}
