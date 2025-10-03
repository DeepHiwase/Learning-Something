const run = (message: string) => {
  console.log(message);
};

run("Hello");

interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

let bear: Bear = {
  honey: true,
  name: "asj",
};

// adding new field to existing interface
interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas"); // not work in jsx/tsx file -> <> version not to use in jsx/tsx files

// const x = "hello" as number;
const y = "hello" as any as number;
const z = "hello" as unknown as number;
