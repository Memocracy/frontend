import React, { useEffect, useState } from "react";
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
import { postData } from "../../../lib/browserHelpers";
import * as formStyles from "./Form.module.scss";
import { NewsletterButton } from "../../Atoms/NewsletterButton";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const NewsletterForm = ({ additionalClasses = [] }) => {
  const [formState, setFormState] = useState("initial");
  const [apiError, setApiError] = useState();
  const { GATSBY_CURRENT_NEWSLETTER, GATSBY_CURRENT_NEWSLETTER_PDF, GATSBY_NEWSLETTER_API: apiUrl } = process.env;

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

      postData(`${apiUrl}/subscribe`, values)
        .then((data) => {
          // eslint-disable-next-line no-console
          console.log(data);

          if (!data.error) {
            setFormState("thanks");
          } else {
            setApiError(data.error);
            setFormState("initial");
          }
        })
        .catch((e) => {
          // eslint-disable-next-line no-console
          console.error(e);
          setFormState("initial");
          setApiError("Please try again later");
        });
    },
  });

  useEffect(() => {
    if (apiError) {
      setTimeout(() => {
        setApiError(null);
      }, 3000);
    }
  }, [apiError]);

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
          {apiError ? (
            <div role="alert" className={formStyles.inputError}>
              {apiError}
            </div>
          ) : (
            <FormMessage
              {...form}
              name="email"
              className={formStyles.inputError}
            />
          )}

          <FormSubmitButton {...form}>Subscribe</FormSubmitButton>
        </Form>

        {formState === "busy" && (
          <div className={formStyles.loader}>
            <Loader />
          </div>
        )}
      </div>

      <div className={formStyles.newsletterAdvert}>
        <NewsletterButton newsletterLink={GATSBY_CURRENT_NEWSLETTER} NewsletterLinkPdf={ GATSBY_CURRENT_NEWSLETTER_PDF} />
      </div>
    </div>
  );
};
