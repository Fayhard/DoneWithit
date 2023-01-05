import React from "react";
import { Alert, Keyboard } from "react-native";
import * as Yup from "yup";

import AppForm from "./AppForm";
import AppFormField from "./AppFormField";
import messagesApi from "../api/messages";
import SubmitButton from "./SubmitButton";

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Couldn't send the message to the seller.");
    }

    resetForm();
  };

  return (
    <AppForm
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <AppFormField
        maxLength={255}
        multiline
        name="message"
        numberOfLines={3}
        placeholder="Message..."
      />
      <SubmitButton title="Contact seller" />
    </AppForm>
  );
}

export default ContactSellerForm;
