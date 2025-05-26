import ContactIcons from './ContactIcons';

export default function ContactSection() {
  return (
    <main className="bg-black text-gray-800">
      <section id="contact" className="py-20 px-4 bg-black-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#a98274] mb-4">Contact Me</h2>
          <p className="text-gray-600 mb-6">Feel free to connect with me on the platforms below:</p>
          <ContactIcons />
        </div>
      </section>
    </main>
  );
}