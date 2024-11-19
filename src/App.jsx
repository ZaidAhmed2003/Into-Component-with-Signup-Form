import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <>
      <div className="container mx-auto px-6 my-24 md:my-0">
        <div className="grid items-center md:h-screen md:grid-cols-2 gap-16 ">
          <div className=" text-center md:text-start text-white">
            <h1 className="text-[28px] md:text-4xl lg:text-5xl leading-9 font-bold">
              Learn to code by watching others
            </h1>
            <p className="mt-6">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </div>
          <div className="flex flex-col gap-7">
            <div className="text-white bg-accent rounded-lg shadow-custom px-14 py-5 text-center">
              <span className="font-semibold">Try it free 7 days</span> then
              20/mo. thereafter
            </div>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
