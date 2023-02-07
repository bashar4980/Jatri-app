import React from "react";

const Info = () => {
  return (
    <section className="overflow-hidden  sm:grid sm:grid-cols-2">
      <div className="">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="text-2xl  text-gray-900 sm:text-5xl">
            Healthy in side
          </h2>
          <h2 className="text-2xl  text-gray-900 sm:text-5xl">
            fresh out side
          </h2>
        </div>
      </div>

      <div className="">
        <p className="text-justify">
          Exercise is a very important need for our body. Health and fitness
          will be obtained if you can do regular exercise and run a healthy
          routine. Even at home we still have to be diligent in exercising,
          either alone or with your friends at home. Healthy life makes you more
          excited to live the day
        </p>
      </div>
    </section>
  );
};

export default Info;
