const FOO = "FOO";
console.log(FOO, FOO2);

const FOO2 = "FOO2", a = "FOO3", FOO4 = "FOO4";

console.log(FOO, FOO4);

let foo = "foo";
const B = "B";
export default B;
export const A = "A";

const BAR = "BAR";

export const bar = {
	foo: BAR,
	bar: BAR,
};

const C = "C";

export const d = {
	foo: C
};

const D ="D";
export const e = {
	D
};

const Empty = "";
export const E = Empty;

const NotMatching = "DoesNotMatch";
export const F = NotMatching;

const matchingLowercase = "matchingLowercase";
export const G = matchingLowercase;

const AL = "ALPHA";
export const H = AL;

const ALPHA = "AL";
export const I = ALPHA;
