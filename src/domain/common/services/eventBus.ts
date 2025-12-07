import mitt from "mitt";

export type Events = {
  error: string;
  info: string;
};

const emitter = mitt<Events>();

export default emitter;
