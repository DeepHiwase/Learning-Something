// function identity(arg: number): number {
//   return arg;
// }
// function identity(arg: any): any {
//   return arg;
// }
function identity<Type>(arg: Type): Type {
  return arg;
}
