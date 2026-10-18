import * as React$1 from 'react';

type PasswordStrengthInputProps = React.ComponentProps<"div">;
type PasswordStrengthRequirement = {
    met: boolean;
    text: string;
};
declare function PasswordStrengthInput({ className, ...props }: PasswordStrengthInputProps): React$1.JSX.Element;

export { PasswordStrengthInput, type PasswordStrengthInputProps, type PasswordStrengthRequirement };
