import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PortfolioPage() {
  return (
    <>
    <Header
    title={"Our Work in Action"}
    subtitle={"Real-world software solutions built to solve real challenges."}
    />
    <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Project #1 */}
        <div className="rounded-2xl shadow p-6 bg-white mx-auto">
          <h3 className="text-xl font-semibold mb-2">Cutbill Builder</h3>
          <p class="mb-4 text-gray-700">
              {"Automating a 6-hour process down to seconds."}
          </p>
          <p className="mb-2 text-gray-600">
              We developed a custom tool that automates cutbill creation for a chopsaw operation, 
              turning a manual weekly task into a one-click solution. With a simple UI, the user 
              selects the necessary details, and the tool calculates the board footage needed based 
              on editable settings. It then exports the data in the precise format required by the saw.
              The result: fewer mistakes, faster production, and over 250 hours saved annually.
          </p>
          <div class="overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
              {/* <img
              src="/images/portfolio/cutbill-builder-mockup.png"
              alt="Cutbill Builder Screenshot"
              className="w-full h-auto object-cover"
              /> */}
          </div>
        </div>

        {/* Project #2 */}
        <div className="rounded-2xl shadow p-6 bg-white mx-auto">
          <h3 className="text-xl font-semibold mb-2">Kiosk Ordering System</h3>
          <p class="mb-4 text-gray-700">
            Built for the showroom floor and built to last.
          </p>
          <p className="mb-2 text-gray-600">
            Touchscreen-enabled kiosk with update automation and system lockdown, trusted in 50+ retail locations.
            We developed a custom Windows-based kiosk app that powers furniture design in showrooms across the U.S. 
            The application is fully touchscreen-compatible and locked down to prevent access to system settings or 
            outside websites. It features automated update checking to ensure all locations stay current without 
            manual intervention, delivering a seamless, secure experience for customers and sales staff alike.
          </p>
          <div class="overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
            {/* <img
            src="/images/portfolio/kiosk-mockup.png"
            alt="Kiosk Screenshot"
            class="w-full h-auto object-cover"
            /> */}
          </div>
        </div>


        {/* Project 3 */}
        <div className="rounded-2xl shadow p-6 bg-white mx-auto">
          <h3 className="text-xl font-semibold mb-2">Mill Inventory App</h3>
          <p class="mb-4 text-gray-700">
            Digitizing log receiving and inventory tracking from the yard to the ERP
          </p>
          <p className="mb-2 text-gray-600">
            Built for Android tablets, this custom app streamlines how our sawmill scales and manages log 
            inventory. It replaces manual log tracking with an intuitive interface for creating ERP entries 
            during log scaling, ensuring fast and accurate data capture in the field. Operators can scan QR 
            codes to instantly access inventory details, reducing errors and making inventory traceability seamless. 
            The result is a more efficient, reliable workflow from the moment logs arrive to when they are processed.</p>
          <div class="overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
            {/* <img
            src="/images/portfolio/mill-mockup.png"
            alt="Kiosk Screenshot"
            class="w-full h-auto object-cover"
            /> */}
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-2">{"Have a problem you’d like to solve with software?"}</h3>
          <p className="text-gray-600 mb-4">{"I’d love to hear about it."}</p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-[#0097B2] text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
    </main>
    <Footer/>
    </>
  );
}
