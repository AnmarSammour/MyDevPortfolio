import React, { useRef } from "react";
import { useForm } from "@formspree/react";
import styles from "./Contact.module.css";
import EmailForm from "../EmailForm/EmailForm";
import contactImg from "../../assets/images/connect.png";

const Connect = () => {
  const [state, handleSubmit] = useForm("xldryblj");
  const formRef = useRef(null);

  const resetForm = () => {
    setTimeout(() => {
      if (formRef.current) formRef.current.reset();
    }, 1500);
  };

  return (
    <section id="connect" className={styles.connectSection}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.contactImg}>
            <img src={contactImg} alt="Contact us" />
          </div>

          <div className={styles.formWrapper}>
            <h2 className={styles.connectTitle}>Get In Touch</h2>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className={styles.connectForm}
            >
              <div className={styles.inputRow}>
                <div className={styles.inputDiv}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className={styles.inputDiv}>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              <div className={styles.inputRow}>
                <div className={styles.inputDiv}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className={styles.inputDiv}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone No."
                    required
                  />
                </div>
              </div>

              <div className={styles.inputRow}>
                <div className={styles.inputDivFull}>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className={styles.submitBtn}
                onClick={resetForm}
              >
                <span>{state.submitting ? "Sending..." : "Send"}</span>
              </button>

              {state.succeeded && (
                <div className={styles.successMessage}>
                  <p>Your message has been sent successfully 👌</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <EmailForm />
    </section>
  );
};

export default React.memo(Connect);
