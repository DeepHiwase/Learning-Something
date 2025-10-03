export type Animal = {
  name: string;
  type: string;
  age?: number;
};

type Bear = Animal & {
  honey: boolean;
};

// let bear: Bear = {
//   honey: true,
// }

// type Window = {
//   title: string;
// };

// type Window = {
//   ts: TypeScriptAPI;
// };
