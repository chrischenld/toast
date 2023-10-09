---
title: first poot
description: this is my very first poot
slug: first
date: 20230829T000000-0400
---

# toast

## handling arrays of components

- a very different post here
- second post which has diff content

```tsx
const popToast = () => {
    const newToast = (
      <motion.div key={Date.now()} className="w-fit absolute">
        <Toast toastKey={Date.now()} />
      </motion.div>
    )

    const updatedToasts = [...toasts, newToast]
    const trimmedToasts = updatedToasts.slice(-3)

    setToasts(trimmedToasts)
  };
```
- above method actually not ideal!
	- `trimmedToast[0]`, `trimmedToast[1]`, and `trimmedToast[2]` will all get added correctly
	- `trimmedToast[3]` will trigger force a `slice` on `updatedToasts`
	- that means the entire array changes, with objects `[0]`, `[1]`, `[2]` all getting replaced by updated values (previous `[1]` becomes `[0]`, previous `[2]` becomes `[1]`, etc.)
	- this means the entire stack of toasts will re-draw

## type definitions
- previously was getting errors on `setMostRecentToast(newToast)` in the following code snippet

```tsx
const [mostRecentToast, setMostRecentToast] = useState(null);

...

setMostRecentToast(newToast);
```
>Type 'ReactElement<any, any>' provides no match for the signature '(prevState: null): null'.typescript(2345)
- the issue is because i wasn't providing type definitions in the declaration
	- linter doesn't know what to expect as the type for
		- for `useState()` or `setMostRecentToast`?
	- instead, have to specify the type that it is. revised declaration:
```tsx
  const [mostRecentToast, setMostRecentToast] = useState<JSX.Element | null>(null);
```
- this line reads that the type will either by a `JSX.Element` or null
	- this specifically pulls `JSX.Element` which is included in some definition of some typescript library
- we also got linting errors when it comes to the `<Button>` component
	- previously didn't define any types for each of the Props
	- you do this by adding `: Props` in the export function statement and then using `interface Props` to define their types
	- you can "shortcut" things by using definitions already included in typescript libraries by using `extends`

```tsx
import React, { HTMLProps, ButtonHTMLAttributes } from "react";

// interface Props extends Omit<HTMLProps<HTMLButtonElement>, "type"> {
//   text: string;
//   type: "button" | "submit" | "reset" | undefined
// }

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function Button({ text, onClick, type }: Props) {
  return (
    <button
      className="h-8 pl-2 pr-2 flex items-center gap-0.5 inline-block max-w-max rounded-md text-zinc-400 hover:text-zinc-200 focus:text-zinc-200 focus:outline-0 focus:ring-zinc-200 focus:ring-2 underline"
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}
```
 