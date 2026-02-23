export function check(label: string, passed: boolean): void {
  if (passed) {
    console.log(`✅ ${label}`);
  } else {
    console.log(`❌ ${label}`);
  }
}
