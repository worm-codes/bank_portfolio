import { useFormik } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';

import { Button, Checkbox, Input } from 'components';
import { devices } from 'theme';

import Textarea from './Textarea';

function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      phone: '',
      message: '',
      checkbox: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Please enter your name.'),
      lastname: Yup.string().required('Please enter your lastname.'),
      email: Yup.string().email('Please enter valid mail.').required('Please enter your mail.'),
      phone: Yup.string().required('Please enter your phone number.'),
      message: Yup.string().required('Please enter your message.'),
      checkbox: Yup.boolean().oneOf([true]),
    }),
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <FormWrapper noValidate>
      <NameWrapper>
        <Input
          id="name"
          name="name"
          placeholder="Your Name"
          label="Name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <Input
          id="lastname"
          name="lastname"
          placeholder="Your Lastname"
          label="Lastname"
          onChange={formik.handleChange}
          value={formik.values.lastname}
        />
      </NameWrapper>

      <Input
        type="email"
        id="email"
        name="email"
        placeholder="johndoe@example.com"
        label="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <Input
        type="tel"
        id="phone"
        name="phone"
        placeholder="+905550000000"
        label="Phone Number"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />

      <Textarea
        label="Your Message"
        id="message"
        onChange={formik.handleChange}
        value={formik.values.message}
      />

      <Checkbox
        id="checkbox"
        name="checkbox"
        onChange={formik.handleChange}
      >
        I have read and accept the terms of the Membership Agreement.
      </Checkbox>

      <StyledButton
        type="submit"
        // disabled={!(formik.isValid && formik.dirty)}
      >
        Send
      </StyledButton>
    </FormWrapper>
  );
}

export default ContactForm;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  padding: ${p => p.theme.spacing.$5};
  & > *:not(:last-child) {
    margin-bottom: ${p => p.theme.spacing.$6};
  }
`;

const NameWrapper = styled.div`
  display: flex;
  & div:first-child {
    margin-right: ${p => p.theme.spacing.$8};
  }

  @media ${devices.phone} {
    input {
      width: 155px;
    }
  }
`;

const StyledButton = styled(Button)`
  border-radius: 0;
  font-family: inherit;
  &:disabled {
    background-color: ${p => p.theme.colors.grayDark.gray600};
    color: ${p => p.theme.colors.white};
  }
`;
