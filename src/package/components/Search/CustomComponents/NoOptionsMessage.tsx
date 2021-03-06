import { useEffect } from "react";
import { components, OptionTypeBase } from "react-select";
import { NoticeProps } from "react-select/src/components/Menu";
import { Typography } from "../../../foundation";

export function NoOptionsMessage<
  OptionType extends OptionTypeBase,
  IsMulti extends boolean
>(props: NoticeProps<OptionType, IsMulti>) {
  const { noOptionsTitle, setInvalidSearch } = props.selectProps;

  useEffect(() => {
    setInvalidSearch(true);
    return () => setInvalidSearch(false);
  }, [setInvalidSearch]);

  return (
    <>
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        margin="1rem 0 0 0"
      >
        {noOptionsTitle}
      </Typography>
      <components.NoOptionsMessage {...props} />
    </>
  );
}
