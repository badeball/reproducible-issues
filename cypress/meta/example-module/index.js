import assert from 'node:assert';

export default function () {
  assert(import.meta.dirname, "Expected to find a populated import.meta");
}
