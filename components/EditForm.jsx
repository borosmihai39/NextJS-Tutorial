import { editTask } from "@/utils/actions";
import React from "react";

const EditForm = ({ task }) => {
  const { id, completed, content } = task;
  return (
    <form
      action={editTask}
      className="max-w-sm p-12 border border-base-300 rounded-lg"
    >
      <input type="hidden" name="id" value={id}></input>
      {/* Content */}
      <input
        type="text"
        required
        defaultValue={content}
        name="content"
        className="input input-bordered w-full"
      />
      {/* Completed */}
      <div className="form-control my-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">Completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            id="completed"
            name="completed"
            className="checkbox checkbox-primary checkbox-sm"
          ></input>
        </label>
      </div>
      <button className="btn btn-primary btn-block btn-sm" type="submit">
        Edit task
      </button>
    </form>
  );
};

export default EditForm;
