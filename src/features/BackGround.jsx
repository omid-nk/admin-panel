function BackGround() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-50"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(205,205,205,0.05) 0, rgba(29,29,29,0.05) 1px, transparent 1px, transparent 20px)",
      }}
    ></div>
  );
}

export default BackGround;
