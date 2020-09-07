import { style as s, cssRaw } from "typestyle";

cssRaw(`
	:root {
		--font-size-normal: 10px;
	}
	@media (min-width: 1024px) {
		:root {
			--font-size-normal: 24px;
		}
	}
`);

// Double edged sword with Typescript here, uncommenting the below
// doesn't let us override our variable due to type errors!
export const outer = s({
  //   '--font-size-normal': '50px',
});

export const inner = s({
  fontSize: "var(--font-size-normal)",
});
