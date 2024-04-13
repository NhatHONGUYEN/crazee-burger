import styled from "styled-components";
import React from "react";
import TextInput from "../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig } from "./inputTextConfig";
import SelectInput from "../../../../../reusable-ui/SelectInput";

const isAvailableOptions = [
  { value: true, label: "En stock" },
  { value: false, label: "En rupture" },
];

const isPublicisedOptions = [
  { value: true, label: "Sans pub" },
  { value: false, label: "Avec pub" },
];

const Form = React.forwardRef(
  ({ product, onSubmit, onChange, onFocus, children, onBlur }, ref) => {
    const inputTexts = getInputTextsConfig(product);

    return (
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview title={product.title} imageSource={product.imageSource} />
        <div className="input-fields">
          {inputTexts.map((input) => (
            <TextInput
              {...input}
              key={input.id}
              onChange={onChange}
              version="minimalist"
              onFocus={onFocus}
              onBlur={onBlur}
              ref={ref && input.name === "title" ? ref : null}
            />
          ))}
          {/* <select name="isAvailable" className="is-available" id="3">
            {isAvailableOptions.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          <select name="isPublicised" className="is-publicised" id="3">
            {isPublicisedOptions.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select> */}

          <SelectInput
            name={isAvailableOptions}
            options={isAvailableOptions}
            className="is-available"
            id="3"
          />
          <SelectInput
            name={isPublicisedOptions}
            options={isPublicisedOptions}
            className="is-publicised"
            id="4"
          />
        </div>
        <div className="form-footer">{children}</div>
      </FormStyled>
    );
  }
);

export default Form;

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    grid-area: 1 / 2 / -2 / 3;

    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 8px;
    grid-column-gap: 8px;

    .title {
      grid-area: 1/1/2/4;
    }
    .imageSource {
      grid-area: 2/1/3/4;
    }
    .price {
      grid-area: 3/1/4/2;
    }
    .is-available {
    }
    .is-publicised {
    }
  }

  .form-footer {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }
`;
