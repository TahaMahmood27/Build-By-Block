import React, { useState } from "react";
import Form_animation from "./Animations/Form_animation";
import Header from "./Header";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [dataList, setDataList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setDataList([...dataList, { title, subject, description }]);
    setTitle("");
    setSubject("");
    setDescription("");
  };

  return (
    <div>
      <div className="">
        <Header />
        <div className="absolute top-0 h-screen w-screen flex items-center justify-center text-xl  rounded-md ">
          <div className="flex justify-start">
            <Form_animation />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <label>
                Title:
                <br />
                <input
                  className="border border-black rounded-md"
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </label>
              <br />
              <label>
                Subject:
                <br />
                <input
                  className="border border-black rounded-md"
                  type="text"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                />
              </label>
              <br />
              <label>
                Description:
                <br />
                <input
                  className="border border-black rounded-md h-[100px]"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </label>
              <br />
              <button className="" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
