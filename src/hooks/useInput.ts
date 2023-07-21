import { useState } from "react";

export default (defaultValue: string) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e: { target: { value: any } }) => {
    const {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      target: { value },
    } = e;
    setValue(value);
  };
  return { value, onChange, setValue };
};
