import { depLib } from '@test2/dep-lib'

export function mylib(): string {
  depLib();
  return 'mylib';
}
