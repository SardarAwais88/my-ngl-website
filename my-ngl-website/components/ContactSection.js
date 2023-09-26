// components/ContactSection.js
import React from 'react';

const ContactSection = () => {
  return (
    <div className="bg-gray-dark py-12">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-white">BEWAI</h3>
          <h2 className="text-2xl font-bold text-white mb-4">
            <strong>Unleashing useful data within business ecosystems</strong>
          </h2>
        </div>
        <p className="text-white">
          By cooperating with our clients in specialized markets, and by mobilizing the best digital technologies (Cloud Computing, Artificial Intelligence, Process Automation, BlockChain, etc.), our ambition is to build end-to-end digital ecosystems which, freeing up data and exchanges frees users to carry out their missions.
        </p>
        <div className="my-12">
          <div className="border-b border-gray-600"></div>
        </div>
        <div id="et_pb_contact_form_0" className="et_pb_contact_form_container">
          <h2 className="text-2xl font-bold text-white mb-4">Contact us, and let’s talk!</h2>
          <div className="et-pb-contact-message"></div>
          <div className="et_pb_contact">
            <form
              className="et_pb_contact_form clearfix"
              method="post"
              action="https://bewai.com/"
            >
              <div className="mb-4">
                <label htmlFor="et_pb_contact_name_0" className="text-white">
                  Votre nom
                </label>
                <input
                  type="text"
                  id="et_pb_contact_name_0"
                  className="input"
                  value=""
                  name="et_pb_contact_name_0"
                  data-required_mark="required"
                  data-field_type="input"
                  data-original_id="name"
                  placeholder="Your name"
                  pattern="[A-Za-z\s\-]*"
                  title="Letters accepted only."
                />
              </div>
              <div className="mb-4">
                <label htmlFor="et_pb_contact_email_0" className="text-white">
                  Votre email
                </label>
                <input
                  type="text"
                  id="et_pb_contact_email_0"
                  className="input"
                  value=""
                  name="et_pb_contact_email_0"
                  data-required_mark="required"
                  data-field_type="email"
                  data-original_id="email"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-8">
                <label htmlFor="et_pb_contact_message_0" className="text-white">
                  Votre message
                </label>
                <textarea
                  name="et_pb_contact_message_0"
                  id="et_pb_contact_message_0"
                  className="et_pb_contact_message input"
                  data-required_mark="required"
                  data-field_type="text"
                  data-original_id="message"
                  placeholder="Your message"
                ></textarea>
              </div>
              <input
                type="hidden"
                value="et_contact_proccess"
                name="et_pb_contactform_submit_0"
              />
              <div className="et_contact_bottom_container">
                <button
                  type="submit"
                  name="et_builder_submit_button"
                  className="et_pb_contact_submit et_pb_button bg-blue-700 hover:bg-blue-600 transition duration-300"
                >
                  Send
                </button>
              </div>
              <input
                type="hidden"
                id="_wpnonce-et-pb-contact-form-submitted-0"
                name="_wpnonce-et-pb-contact-form-submitted-0"
                value="9d05a8dbe4"
              />
              <input
                type="hidden"
                name="_wp_http_referer"
                value="/"
              />
            </form>
          </div>
          <p className="mt-6 text-white">
            This site is protected by reCAPTCHA. Google's{' '}
            <a href="https://policies.google.com/privacy">
              privacy policies
            </a>{' '}
            and{' '}
            <a href="https://policies.google.com/terms">
              terms of service apply.
            </a>
          </p>
        </div>
        <div className="my-12">
          <a href="/mentions-legales" className="text-blue-500">
            Legal Notice
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
