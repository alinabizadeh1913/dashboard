const Typography = ({
  tag,
  color,
  className,
  children,
}: {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  color?: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <>
      {tag == "h1" && (
        <h1
          style={{
            color
          }}
          className={className}
        >
          {children}
        </h1>
      )}
      {tag == "h2" && (
        <h2
          style={{
            color
          }}
          className={className}
        >
          {children}
        </h2>
      )}
      {tag == "h3" && (
        <h3
          style={{
            color
          }}
          className={className}
        >
          {children}
        </h3>
      )}
      {tag == "h4" && (
        <h4
          style={{
            color
          }}
          className={className}
        >
          {children}
        </h4>
      )}
      {tag == "h5" && (
        <h5
          style={{
            color
          }}
          className={className}
        >
          {children}
        </h5>
      )}
      {tag == "h6" && (
        <h6
          style={{
            color
          }}
          className={className}
        >
          {children}
        </h6>
      )}
      {tag == "p" && (
        <p
          style={{
            color
          }}
          className={className}
        >
          {children}
        </p>
      )}
      {!tag && (
        <p
          style={{
            color
          }}
          className={className}
        >
          {children}
        </p>
      )}
    </>
  );
};
export default Typography;
