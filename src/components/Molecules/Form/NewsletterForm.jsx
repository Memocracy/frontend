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
    values: { name: "" },
    onValidate: (values) => {
      if (!values.name) {
        const errors = {
          name: "How can we be friends without knowing your name?",
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
      <Form {...form}>
        <FormLabel {...form} name="name">
          Name
        </FormLabel>
        <FormInput {...form} name="name" placeholder="John Doe" />
        <FormMessage {...form} name="name" />
        <FormSubmitButton {...form}>Submit</FormSubmitButton>
      </Form>
    </div>
  );
};
