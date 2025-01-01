const Section = ({
  children,
  container,
  space,
}: {
  children?: React.ReactNode;
  container?: boolean;
  space?: "large" | "medium" | "small";
}) => {
  return (
    <>
      <section
        className={`${
          space == "large"
            ? "mt-20"
            : space == "medium"
            ? "mt-16"
            : space == "small"
            ? "mt-12"
            : "mt-0"
        }`}
      >
        <div className={`${container ? "container mx-auto" : "w-full"}`}>
          {children}
        </div>
      </section>
    </>
  );
};

export default Section;
