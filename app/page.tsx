export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-20">
      <div className="max-w-4xl mx-auto">

        {/* Hero */}
        <section className="mb-20">
          <h1 className="text-5xl font-bold mb-4">
            Samuel Dearing
          </h1>

          <p className="text-xl mb-6">
            Aerospace Engineering (Astronautics) Student @ ASU
          </p>

          <p className="text-lg text-gray-600 max-w-2xl">
            Focused on UAV design, embedded systems, flight testing, and avionics integration.
            Building real hardware, validating performance, and documenting results.
          </p>
        </section>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">
            Featured Projects
          </h2>

          <div className="space-y-6">

            <div className="border p-6 rounded-lg">
              <h3 className="text-xl font-semibold">
                3D Printed UAV – Tractor Configuration
              </h3>
              <p className="text-gray-600 mt-2">
                Designed and flight-tested a 1000mm wingspan fixed-wing UAV with
                optimized CG, NACA 4412 airfoil, and integrated FPV system.
              </p>
            </div>

            <div className="border p-6 rounded-lg">
              <h3 className="text-xl font-semibold">
                DJI O4 Fixed-Wing FPV Integration
              </h3>
              <p className="text-gray-600 mt-2">
                Implemented power distribution, avionics layout, and system
                architecture for long-range fixed-wing FPV operation.
              </p>
            </div>

            <div className="border p-6 rounded-lg">
              <h3 className="text-xl font-semibold">
                Raspberry Pi Pico 2 Control System
              </h3>
              <p className="text-gray-600 mt-2">
                Embedded control system integrating compass sensing and servo
                positioning for autonomous tracking applications.
              </p>
            </div>

          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">
            Contact
          </h2>
          <p className="text-gray-600">
            samueldearing@outlook.com
          </p>
        </section>

      </div>
    </main>
  );
}
