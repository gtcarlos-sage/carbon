import React, { useState } from "react";
import { ComponentStory } from "@storybook/react";
import Password from ".";
import Box from "../box/box.component";
import CarbonProvider from "../carbon-provider";

export const SIZES = ["small", "medium", "large"] as const;
export const VALIDATIONS = ["error", "warning", "info"] as const;

export const Default: ComponentStory<typeof Password> = () => {
  const [state, setState] = useState("Password");
  const setValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState(target.value);
  };

  return <Password label="Password" value={state} onChange={setValue} />;
};

export const ForceObscurity: ComponentStory<typeof Password> = () => {
  const [state, setState] = useState("Password");
  const setValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState(target.value);
  };

  return (
    <Password
      forceObscurity
      label="Password"
      value={state}
      onChange={setValue}
    />
  );
};

export const InputHint: ComponentStory<typeof Password> = () => {
  const [state, setState] = useState("Password");
  const setValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState(target.value);
  };

  return (
    <Password
      inputHint="Please enter a password with at least 8 characters"
      label="Password"
      value={state}
      onChange={setValue}
    />
  );
};

export const CharacterCounter: ComponentStory<typeof Password> = () => {
  const [state, setState] = useState("Password");
  const setValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState(target.value);
  };

  return (
    <Password
      label="Password"
      value={state}
      characterLimit={10}
      onChange={setValue}
      enforceCharacterLimit={false}
    />
  );
};

export const Prefix: ComponentStory<typeof Password> = () => {
  const [state, setState] = useState("Password");
  const setValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState(target.value);
  };

  return (
    <Password
      prefix="prefix"
      label="Password"
      value={state}
      onChange={setValue}
    />
  );
};

export const Sizes: ComponentStory<typeof Password> = () => {
  const [smallState, setSmallState] = useState("Password");
  const setSmallValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSmallState(target.value);
  };
  const [mediumState, setMediumState] = useState("Password");
  const setMediumValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setMediumState(target.value);
  };
  const [largeState, setLargeState] = useState("Password");
  const setLargeValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setLargeState(target.value);
  };

  return (
    <>
      <Password
        key="Password - Small"
        label="Password - Small"
        value={smallState}
        size="small"
        onChange={setSmallValue}
        mb={2}
      />
      <Password
        key="Password - Medium"
        label="Password - Medium"
        value={mediumState}
        size="medium"
        onChange={setMediumValue}
        mb={2}
      />
      <Password
        key="Password - Large"
        label="Password - Large"
        value={largeState}
        size="large"
        onChange={setLargeValue}
        mb={2}
      />
    </>
  );
};

export const Margins: ComponentStory<typeof Password> = () => {
  const [state, setState] = useState("Password");
  const setValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState(target.value);
  };

  return <Password m={4} label="Password" value={state} onChange={setValue} />;
};

export const Disabled: ComponentStory<typeof Password> = () => {
  const [state, setState] = useState("Password");
  const setValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState(target.value);
  };

  return (
    <Password disabled label="Password" value={state} onChange={setValue} />
  );
};

export const ReadOnly: ComponentStory<typeof Password> = () => {
  const [state, setState] = useState("Password");
  const setValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState(target.value);
  };

  return (
    <Password readOnly label="Password" value={state} onChange={setValue} />
  );
};

export const AutoFocus: ComponentStory<typeof Password> = () => {
  const [state, setState] = useState("Password");
  const setValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState(target.value);
  };

  return (
    <Password autoFocus label="Password" value={state} onChange={setValue} />
  );
};

AutoFocus.parameters = { chromatic: { disable: true } };

export const WithLabelInline: ComponentStory<typeof Password> = () => {
  const [state, setState] = useState("Password");
  const setValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState(target.value);
  };

  return (
    <Password labelInline label="Password" value={state} onChange={setValue} />
  );
};

WithLabelInline.parameters = { chromatic: { disable: true } };

export const WithLabelAlign: ComponentStory<typeof Password> = () => {
  const [leftAlignState, setLeftAlignState] = useState("Password");
  const setVLeftAlignValue = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setLeftAlignState(target.value);
  };

  const [rightAlignState, setRightAlignState] = useState("Password");
  const setRightAlignValue = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setRightAlignState(target.value);
  };

  return (
    <>
      <Password
        label="Password"
        labelInline
        value={leftAlignState}
        onChange={setVLeftAlignValue}
        inputWidth={50}
        key="left"
        labelAlign="left"
      />
      <Password
        label="Password"
        labelInline
        value={rightAlignState}
        onChange={setRightAlignValue}
        inputWidth={50}
        key="right"
        labelAlign="right"
      />
    </>
  );
};

export const WithCustomLabelWidthAndInputWidth: ComponentStory<
  typeof Password
> = () => {
  const [state, setState] = useState("Password");
  const setValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState(target.value);
  };

  return (
    <Password
      labelWidth={50}
      inputWidth={50}
      labelInline
      label="Password"
      value={state}
      onChange={setValue}
    />
  );
};

export const WithCustomMaxWidth: ComponentStory<typeof Password> = () => {
  const [state, setState] = useState("Password");
  const setValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState(target.value);
  };

  return (
    <Password
      maxWidth="70%"
      label="Password"
      value={state}
      onChange={setValue}
    />
  );
};

export const WithFieldHelp: ComponentStory<typeof Password> = () => {
  const [state, setState] = useState("Password");
  const setValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState(target.value);
  };

  return (
    <Password
      fieldHelp="help"
      label="Password"
      value={state}
      onChange={setValue}
    />
  );
};

export const WithLabelHelp: ComponentStory<typeof Password> = () => {
  const [state, setState] = useState("Password");
  const setValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState(target.value);
  };

  return (
    <Password
      labelHelp="help"
      label="Password"
      value={state}
      onChange={setValue}
    />
  );
};

export const WithRequired: ComponentStory<typeof Password> = () => {
  const [state, setState] = useState("Password");
  const setValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState(target.value);
  };

  return (
    <Password required label="Password" value={state} onChange={setValue} />
  );
};

export const ValidationsAsAString: ComponentStory<typeof Password> = () => {
  const [state, setState] = useState("Password");
  const setValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState(target.value);
  };

  return (
    <Box>
      {VALIDATIONS.map((validationType) => (
        <Box key={`${validationType}-string-component`}>
          <Password
            label="Password"
            value={state}
            onChange={setValue}
            {...{ [validationType]: "Message" }}
            mb={2}
          />
          <Password
            label="Password - readOnly"
            value="Password"
            readOnly
            {...{ [validationType]: "Message" }}
            mb={2}
          />
        </Box>
      ))}
    </Box>
  );
};

export const ValidationsAsAStringWithTooltipCustom: ComponentStory<
  typeof Password
> = () => {
  const [state, setState] = useState("Password");
  const setValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState(target.value);
  };

  return (
    <Box>
      {VALIDATIONS.map((validationType) => (
        <Box key={`${validationType}-string-component`}>
          <Password
            label="Password"
            value={state}
            onChange={setValue}
            {...{ [validationType]: "Message" }}
            mb={2}
            tooltipPosition="bottom"
          />
        </Box>
      ))}
    </Box>
  );
};
ValidationsAsAStringWithTooltipCustom.parameters = {
  chromatic: { disableSnapshot: true },
};

export const ValidationsAsAStringDisplayedOnLabel: ComponentStory<
  typeof Password
> = () => {
  const [state, setState] = useState("Password");
  const setValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState(target.value);
  };

  return (
    <Box>
      {VALIDATIONS.map((validationType) => (
        <Box key={`${validationType}-string-label`}>
          <Password
            label="Password"
            value={state}
            onChange={setValue}
            validationOnLabel
            {...{ [validationType]: "Message" }}
            mb={2}
          />
          <Password
            label="Password - readOnly"
            value="Password"
            validationOnLabel
            readOnly
            {...{ [validationType]: "Message" }}
            mb={2}
          />
        </Box>
      ))}
    </Box>
  );
};

export const NewDesignsValidation: ComponentStory<typeof Password> = () => {
  const [state, setState] = useState("Password");
  const setValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState(target.value);
  };

  return (
    <Box>
      <CarbonProvider validationRedesignOptIn>
        {(["error", "warning"] as const).map((validationType) =>
          SIZES.map((size) => (
            <Box style={{ width: "296px" }} key={`${validationType}-${size}`}>
              <Password
                m={4}
                label={`${size} - ${validationType}`}
                value={state}
                onChange={setValue}
                labelHelp="Hint text (optional)"
                size={size}
                {...{ [validationType]: "Message" }}
              />
              <Password
                m={4}
                label={`readOnly - ${size} - ${validationType}`}
                value="Password"
                size={size}
                labelHelp="Hint text (optional)"
                readOnly
                {...{ [validationType]: "Message" }}
              />
            </Box>
          ))
        )}
      </CarbonProvider>
    </Box>
  );
};

export const ValidationsAsAStringWithTooltipDefault: ComponentStory<
  typeof Password
> = () => {
  const [state, setState] = useState("Password");
  const setValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState(target.value);
  };

  return (
    <Box>
      {VALIDATIONS.map((validationType) => (
        <Box key={`${validationType}-string-label`}>
          <Password
            label="Password"
            value={state}
            onChange={setValue}
            validationOnLabel
            {...{ [validationType]: "Message" }}
            mb={2}
            tooltipPosition="bottom"
          />
        </Box>
      ))}
    </Box>
  );
};
ValidationsAsAStringWithTooltipDefault.parameters = {
  chromatic: { disableSnapshot: true },
};

export const ValidationsAsABoolean: ComponentStory<typeof Password> = () => {
  const [state, setState] = useState("Password");
  const setValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState(target.value);
  };

  return (
    <Box>
      {VALIDATIONS.map((validationType) => (
        <Box key={`${validationType}-boolean-component`}>
          <Password
            label="Password"
            value={state}
            onChange={setValue}
            {...{ [validationType]: true }}
            mb={2}
          />
          <Password
            label="Password - readOnly"
            value="Password"
            readOnly
            {...{ [validationType]: true }}
            mb={2}
          />
        </Box>
      ))}
    </Box>
  );
};
