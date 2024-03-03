import { Input, Button, Textarea } from "@nextui-org/react";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full grid md:grid-cols-2 md:gap-2"
    >
      <section id="contact-cta" className="tracking-wide leading-relaxed">
        <h3 className="text-2xl font-semibold pb-2">
          Let&apos;s Work Together ✨
        </h3>
        <p className="pb-4">
          Got a project in mind? I&apos;m here to bring it to life. Whether
          it&apos;s full-stack development or a creative collaboration, I&apos;m
          open to freelance opportunities and exciting challenges.
        </p>
      </section>
      <form
        action="https://formsubmit.co/anaismateusc@gmail.com"
        method="POST"
        id="contact-form"
        className="grid gap-3"
      >
        <h4 className="text-xl font-semibold">Contact</h4>
        <Input
          type="email"
          name="email"
          isRequired
          label="Email"
          placeholder="johndoe@example.com"
          variant="underlined"
          size="sm"
        />
        <Input
          type="text"
          name="_subject"
          isRequired
          label="Subject"
          placeholder="Project idea, collaboration, or just say hi!"
          variant="underlined"
          size="sm"
        />
        <Textarea
          isRequired
          name="message"
          label="Your Message"
          placeholder="Share your thoughts or project details here"
          variant="underlined"
          size="sm"
        />
        <Button color="default" type="submit">
          Send Message
        </Button>
      </form>
    </section>
  );
}

export default Contact;
