const Form = () => {
  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        className="input p-1 text-xs"
        placeholder="Full name"
      />
      <input
        type="text"
        className="input p-1 text-xs"
        placeholder="Email address"
      />
      <input
        type="text"
        className="input p-1 text-xs"
        placeholder="Phone number"
      />
      <textarea
        className="textarea p-1 text-xs resize-none "
        placeholder="Your message"
      />
      <button
        type="submit"
        className="btn self-center  text-xs"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
