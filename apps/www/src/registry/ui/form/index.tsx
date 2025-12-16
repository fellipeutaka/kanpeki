"use client";

import { Form as RACForm } from "react-aria-components";

export interface FormProps extends React.ComponentProps<typeof RACForm> {}
export function Form(props: FormProps) {
  return <RACForm {...props} data-slot="form" />;
}
