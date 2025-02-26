import { Field, Label, Switch } from "@headlessui/react";

type TogglePropsType = {
  containerClass?: string | undefined;
  labelClass?: string | undefined;
  switchClass?: string | undefined;
  togglerClass?: string | undefined;
  label?: string | undefined;
  disabled?: boolean;
  checked: boolean;
  onChange: () => void;
};

function Toggle({
  containerClass = "",
  labelClass = "",
  switchClass = "",
  togglerClass = "",
  label = "",
  disabled = false,
  checked,
  onChange,
}: TogglePropsType) {
  return (
    <Field className={`flex items-center ${containerClass}`}>
      <Label className={labelClass}>{label}</Label>
      <Switch
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className={`group inline-flex h-6 w-12 items-center rounded-full bg-error transition data-[checked]:bg-primary-900 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 ${switchClass}`}
      >
        <span
          className={`size-4 -translate-x-0.5 rounded-full bg-white transition group-data-[checked]:-translate-x-7 ${togglerClass}`}
        />
      </Switch>
    </Field>
  );
}

export default Toggle;
