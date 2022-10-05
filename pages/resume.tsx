import { NextPage } from "next";
import Layout from "../components/Layout";

const Resume: NextPage = () => {
  return (
    <Layout>
      <div className="px-64 py-16">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <h2 className="text-4xl font-extrabold">Edmund Xin</h2>
            <h4 className="text-xl font-medium">Software Engineering Intern</h4>
          </div>
          <div className="flex flex-col text-right">
            <p>Email: edmund@gatech.edu</p>
            <p>Phone Number: 913-617-0133</p>
            <p>San Jose</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row py-12 text-xl">
            <h5 className="w-1/4 text-xl font-semibold">Education</h5>
            <div className="flex flex-col w-full">
              <div className="flex flex-row">
                <div>
                  <h6 className="font-semibold">Georgia Tech</h6>
                  <p>B.S. in Computer Science</p>
                </div>
                <div className="flex flex-col ml-auto text-right">
                  <h6>Aug 2020 - May 2024</h6>
                  <p>B.S. in Computer Science</p>
                </div>
              </div>

              <p className="mt-4">
                Threads: Systems Architecture and Information Internetworks
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row py-12 text-xl">
            <h5 className="w-1/4 text-xl font-semibold">Experience</h5>
            <div className="flex flex-col w-full">
              <div className="flex flex-row">
                <div>
                  <h6 className="font-semibold">Tesla</h6>
                  <p>B.S. in Computer Science</p>
                </div>
                <div className="flex flex-col ml-auto text-right">
                  <h6>Aug 2020 - May 2024</h6>
                  <p>B.S. in Computer Science</p>
                </div>
              </div>

              <p className="mt-4">
                Threads: Systems Architecture and Information Internetworks
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
