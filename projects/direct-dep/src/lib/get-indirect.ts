import { getString } from "indirect-dep";

export function getMessage(): string {
  return getString();
}
