export default function page() {
  return (
    <div className="mt-20 bg-[radial-gradient(circle,rgba(120,120,1200,0.1)_2px,transparent_2px)] bg-[size:30px_30px] h-screen mx-20">
      <div className="flex gap-50">
        <div>
          <h1 className="text-red-600 font-semibold my-8">About AshaTech</h1>
          <h1 className="text-6xl font-bold">
            Building <span className="text-red-600">Digital Solutions</span>{" "}
            That Move Businesses Forward
          </h1>
          <p className="text-gray-500 my-4 text-lg">
            We help businesses turn ideas into powerful digital experiences
            through innovative technology, thoughtful design and reliable
            solutions.
          </p>
          <button className="bg-[#b91c1c] font-semibold px-4 py-2 text-white rounded-md">
            Get Started
          </button>
        </div>
        <div className="rounded-2xl overflow-hidden bg-amber-300 w-350 mt-14">
          <img src="image.jpg" />
        </div>
      </div>
    </div>
  );
}
