import React from "react";
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormLabel as FormLabel,
  unstable_FormInput as FormInput,
  unstable_FormMessage as FormMessage,
  unstable_FormSubmitButton as FormSubmitButton,
} from "reakit/Form";
import { isEmailValid } from "../../../lib/stringHelpers";
import * as formStyles from "./Form.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const NewsletterForm = ({ additionalClasses = [] }) => {
  const form = useFormState({
    values: { email: "" },
    onValidate: (values) => {
      if (!isEmailValid(values.email)) {
        const errors = {
          email: "Please enter a valid email address.",
        };
        throw errors;
      }
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const classes = `
    ${formStyles.base}
    ${additionalClasses.join(" ")}
  `;

  return (
    <div className={classes}>
      <h2>Newsletter</h2>
      <Form {...form}>
        <FormLabel {...form} name="email">
          Email Address
        </FormLabel>
        <FormInput {...form} name="email" placeholder="address@domain.com" />
        <FormMessage {...form} name="email" className={formStyles.inputError} />
        <FormSubmitButton {...form}>Subscribe</FormSubmitButton>
      </Form>
    </div>
  );
};
