import { useState, FormEvent } from "react"; // Import FormEvent
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Remove the `result` state and its usage
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    form.append("access_key", "8c36f47d-d35f-43e3-a878-3b803bc4841c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const data = await response.json();

    if (data.success) {
      setFormData({ name: "", email: "", message: "" });
      toast.success("Message sent successfully!");
    } else {
      console.log("Error", data);
    }
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-12 bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-poppins font-semibold mb-6">
              Contact Information
            </h3>
            <p className="mb-8">
              Feel free to reach out to me for any questions or opportunities!
            </p>
            <div className="space-y-4">
              <a
                href="mailto:devmagic313@gmail.com"
                className="flex items-center gap-4 text-neon-cyan hover:text-neon-magenta transition-colors"
              >
                <FaEnvelope className="text-xl" />
                <span>devmagic313@gmail.com</span>
              </a>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/DevMagic313"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full border-2 border-neon-cyan hover:bg-neon-cyan/10 transition-colors"
                >
                  <FaGithub className="text-xl" />
                </motion.a>
                <motion.a
                  href="https://www.tiktok.com/@codebygirl"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full border- 2 border-neon-magenta hover:bg-neon-magenta/10 transition-colors"
                >
                  <FaTiktok className="text-xl" />
                </motion.a>
{/*                 <motion.a
                  href="https://www.instagram.com/devmagic313"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full border-2 border-neon-purple hover:bg-neon-purple/10 transition-colors"
                > */}
                  <FaInstagram className="text-xl" />
                </motion.a>
              </div>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-poppins mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border-2 border-neon-cyan bg-transparent focus:border-neon-magenta outline-none transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-poppins mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border-2 border-neon-cyan bg-transparent focus:border-neon-magenta outline-none transition-colors"
                placeholder="Your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-poppins mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg border-2 border-neon-cyan bg-transparent focus:border-neon-magenta outline-none transition-colors resize-none"
                placeholder="Your Message"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 rounded-lg border-2 border-neon-cyan hover:bg-neon-cyan/10 transition-colors font-poppins font-semibold"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact 
