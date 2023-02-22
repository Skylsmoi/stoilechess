<template>
  <ui-form type="1" itemMarginBottom="5">
    <ui-form-field space-between>
      <ui-textfield
        v-model="email"
        required
        helper-text-id="email-field-helper-text"
      >
        <template #before>
          <ui-textfield-icon>alternate_email</ui-textfield-icon>
        </template>
        Email
      </ui-textfield>
      <ui-textfield-helper id="email-field-helper-text">
        It's just an email sir
      </ui-textfield-helper>
    </ui-form-field>

    <ui-form-field space-between>
      <ui-textfield
        v-model="password"
        required
        helper-text-id="password-field-helper-text"
      >
        <template #before>
          <ui-textfield-icon>lock</ui-textfield-icon>
        </template>
        Password
      </ui-textfield>
      <ui-textfield-helper id="password-field-helper-text">
        Your password is **********
      </ui-textfield-helper>
    </ui-form-field>

    <ui-form-field>
      <ui-button raised v-on:click="onClickSubmit">Submit</ui-button>
      <ui-button outlined v-on:click="onClickReset">Reset</ui-button>
    </ui-form-field>
  </ui-form>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../store/user.js";
const user = useUserStore();

const email = ref("");
const password = ref("");

const onClickSubmit = () => {
  setTimeout(() => {
    const fakeDataFromApi = {
      username: "MrLapin",
      email: "mrlapin@osef.fr",
      winRatio: 42,
    };

    user.logIn(fakeDataFromApi);

    email.value = "";
    password.value = "";
  }, 800);
};
const onClickReset = () => {
  email.value = "";
  password.value = "";
};
</script>

<style scoped></style>
