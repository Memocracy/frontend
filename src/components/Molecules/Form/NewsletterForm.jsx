import React from "react";
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormLabel as FormLabel,
  unstable_FormInput as FormInput,
  unstable_FormMessage as FormMessage,
  unstable_FormSubmitButton as FormSubmitButton,
} from "reakit/Form";
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
      if (!values.email) {
        const errors = {
          email: "?",
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
        <FormInput {...form} name="email" placeholder="John Doe" />
        <FormMessage {...form} name="email" />
        <FormSubmitButton {...form}>Subscribe</FormSubmitButton>
      </Form>
    </div>
  );
};
