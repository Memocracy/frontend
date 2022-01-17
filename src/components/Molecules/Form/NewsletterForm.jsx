import React, { useState } from "react";
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormLabel as FormLabel,
  unstable_FormInput as FormInput,
  unstable_FormMessage as FormMessage,
  unstable_FormSubmitButton as FormSubmitButton,
} from "reakit/Form";
import { Loader } from "../../Atoms/Loader";
import { isEmailValid } from "../../../lib/stringHelpers";
import * as formStyles from "./Form.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const NewsletterForm = ({ additionalClasses = [] }) => {
  const [formState, setFormState] = useState("initial");
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
      setFormState("busy");

      setTimeout(() => setFormState("thanks"), 2000);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const classes = `
    ${formStyles.base}
    ${additionalClasses.join(" ")}
  `;

  return (
    <div className={classes} aria-busy={formState === "busy"}>
      <h2>Newsletter</h2>
      <div className={formStyles.formContainer}>
        {formState === "thanks" && (
          <div className={formStyles.thanks}>
            <p>Thank you for joining!</p>
          </div>
        )}

        <Form {...form} aria-hidden={formState === "thanks"}>
          <FormLabel {...form} name="email">
            Email Address
          </FormLabel>
          <FormInput {...form} name="email" />
          <FormMessage
            {...form}
            name="email"
            className={formStyles.inputError}
          />
          <FormSubmitButton {...form}>Subscribe</FormSubmitButton>
        </Form>

        {formState === "busy" && (
          <div className={formStyles.loader}>
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};
